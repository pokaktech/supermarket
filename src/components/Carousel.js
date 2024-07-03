
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import AddToCartModal from './Addtocart';
import './Carousel.css';

const Carousell = () => {
  const [offers, setOffers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    fetchOffers();
    fetchProducts();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/offers/');
      setOffers(response.data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCardClick = (offer) => {
    setSelectedOffer(offer);
  };

  const handleCloseModal = () => {
    setSelectedOffer(null);
  };

  const getPrice = (offer) => {
    if (!products || products.length === 0) {
      return 'Product data not available';
    }

    const currentDate = new Date();
    const endDate = new Date(offer.end_date);
    const product = products.find(product => product.id === parseInt(offer.products[0]));

    if (product) {
      const price = Number(product.price);
      if (isNaN(price)) {
        console.error(`Invalid price for product ID ${product.id}`);
        return 'Invalid price';
      }

      if (endDate >= currentDate) {
        if (offer.discount_percentage) {
          const discount = offer.discount_percentage / 100;
          return (price * (1 - discount)).toFixed(2);
        } else {
          return price.toFixed(2);
        }
      } else {
        return price.toFixed(2);
      }
    } else {
      console.error('Product not found');
      return 'Product not found';
    }
  };

  const filteredOffers = offers.filter((offer) => {
    const currentDate = new Date();
    const startDate = new Date(offer.start_date);
    const endDate = new Date(offer.end_date);
    return startDate <= currentDate && currentDate <= endDate;
  });

  return (
    <div className="carousel-container">
      <div className="container">
        <div className="row justify-content-md-center g-1 m-2">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="col-md-3 mb-4" align="center">
              <Card className="offer-card" onClick={() => handleCardClick(offer)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={offer.image}
                  alt="Offer"
                  className="offer-image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {offer.title}
                  </Typography>
                
                  <Typography variant="h6" color="text.primary">
                    Price: ${getPrice(offer)}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {selectedOffer && (
        <AddToCartModal open={!!selectedOffer} handleClose={handleCloseModal} offer={selectedOffer} products={products} />
      )}
    </div>
  );
};

export default Carousell;
