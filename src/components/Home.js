import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography, Modal, Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Carousell from "./Carousel";
import Footer from "./Footer";
import FixedMenu from "./FixedMenu";
import { FaTag } from "react-icons/fa";
import CustomCard from "./CustomCard";
import Circle from "./Circle";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [ads, setAds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get("http://127.0.0.1:8000/accounts/products/");
        setProducts(productsResponse.data);
        const categoriesResponse = await axios.get("http://127.0.0.1:8000/accounts/categories/");
        setCategories(categoriesResponse.data);
        const tagsResponse = await axios.get("http://localhost:5000/products/tags");
        setTagsList(tagsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchAds();
  }, []);

  const fetchProductsByTag = async (tag) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/tags/${tag}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products by tag:", error);
    }
  };

  const fetchAds = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/ads/');
      setAds(response.data);
    } catch (error) {
      console.error('Error fetching ads:', error);
    }
  };

  const handleAddToCart = async () => {
    if (selectedProduct && modalQuantity > 0) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/accounts/add-to-cart/${selectedProduct.id}/`,
          {
            qty: modalQuantity,
          }
        );

        if (response.status === 201) {
          handleClose();
          navigate("/cart");
        } else {
          console.log("Error adding to cart");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    } else {
      console.log("Invalid product or quantity");
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedAd(null);
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
    setShowModal(true);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <br/><br/><br/>
          <FixedMenu />
        </Grid>
        <Grid item xs={12}>
          <div className="ads-container">
            <Link to="/categories">
              <Carousel interval={5000} pause="hover">
                {ads.map((ad) => (
                  <Carousel.Item key={ad.id}>
                    <div className="ad-item" onClick={() => handleAdClick(ad)}>
                      <img className="ad-image" src={ad.image} alt={ad.title} />
                      <div className="ad-overlay">
                        <div className="ad-overlay-content"></div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Carousell />
        </Grid>
        <Grid item xs={12} align="center" style={{ width: "100%" }}>
          <Circle categories={categories} />
          <TextField
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Best seller grocery near you</Typography>
          <Typography variant="body1" align="center">We provide the best quality & fresh grocery items near your location</Typography>
        </Grid>
        {filteredProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <CustomCard product={product} handleShow={handleShow} />
          </Grid>
        ))}
      </Grid>
      <Modal open={showModal} onClose={handleClose}>
        <Box className="modal-container">
          {selectedAd ? (
            <>
              <Typography variant="h6">{selectedAd.title}</Typography>
              <img src={selectedAd.image} alt={selectedAd.title} className="modal-image" />
              <Typography variant="body1">{selectedAd.description}</Typography>
            </>
          ) : (
            selectedProduct && (
              <>
                <Typography variant="h6">{selectedProduct.name}</Typography>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
                <div className="tag-list">
                  {selectedProduct.tags && selectedProduct.tags.map((tag, index) => (
                    <div key={index} className="tag" onClick={() => fetchProductsByTag(tag)}>
                      <FaTag />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <TextField
                  id="quantity"
                  label="Quantity"
                  type="number"
                  value={modalQuantity}
                  onChange={(e) => setModalQuantity(parseInt(e.target.value))}
                  InputProps={{ inputProps: { min: 1 } }}
                />
                <p>Price: Rs.{(selectedProduct.price * modalQuantity).toFixed(2)}</p>
                <Button variant="contained" onClick={handleClose}>Close</Button>
                <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</Button>
              </>
            )
          )}
        </Box>
      </Modal>
      <Footer />
    </div>
  );
}
