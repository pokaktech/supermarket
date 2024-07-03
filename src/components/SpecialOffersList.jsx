import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Form, Button, ListGroup, Modal, Container, Row, Col, Card } from 'react-bootstrap';

export default function SpecialOffersList() {
  const [offers, setOffers] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentOffer, setCurrentOffer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(null);

  const initialOfferState = {
    title: '',
    description: '',
    discount_percentage: '',
    promo_code: '',
    start_date: '',
    end_date: '',
    products: [],
  };
  const [newOffer, setNewOffer] = useState(initialOfferState);

  useEffect(() => {
    fetchOffers();
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffers(prevOffers => {
        return prevOffers.map(offer => {
          const timeRemaining = calculateTimeRemaining(offer.start_date, offer.end_date);
          return { ...offer, timeRemaining };
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchOffers = () => {
    axios.get('http://127.0.0.1:8000/accounts/offers/')
      .then(response => {
        const offersWithTimeRemaining = response.data.map(offer => {
          const timeRemaining = calculateTimeRemaining(offer.start_date, offer.end_date);
          return { ...offer, timeRemaining };
        });
        setOffers(offersWithTimeRemaining);
      })
      .catch(error => {
        console.error('Error fetching the offers!', error);
      });
  };

  const fetchProducts = () => {
    axios.get('http://127.0.0.1:8000/accounts/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the products!', error);
      });
  };

  const onDrop = acceptedFiles => {
    setImage(acceptedFiles[0]);
  };

  const getPrice = (offer) => {
    if (!products || products.length === 0) {
      return 'Product data not available';
    }

    const currentDate = new Date();
    const endDate = new Date(offer.end_date);
    const product = products.find(product => product.id === parseInt(offer.products[0]));

    if (product) {
        // Ensure product.price is a number
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

  const calculateTimeRemaining = (startDate, endDate) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let timeDifference;

    if (currentDate < start) {
      // Countdown to start date
      timeDifference = start.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (currentDate < end) {
      
      timeDifference = end.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      return 'Expired';
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleInputChange = (e, offerSetter) => {
    const { name, value } = e.target;
    if (name === 'products') {
      offerSetter(prevState => ({ ...prevState, [name]: [value] }));
    } else {
      offerSetter(prevState => ({ ...prevState, [name]: value }));
    }
    if (name === 'discount_percentage') {
      const productPrice = products.find(product => product.id === parseInt(newOffer.products[0]))?.price || 0;
      const discountPercentage = parseInt(value) || 0;
      const discountedPrice = productPrice - (productPrice * (discountPercentage / 100));
      setUpdatedPrice(discountedPrice.toFixed(2));
      setNewOffer(prevState => ({
        ...prevState,
        discount_percentage: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newOffer).forEach(key => {
      formData.append(key, newOffer[key]);
    });
    if (image) {
      formData.append('image', image);
    }

    axios.post('http://127.0.0.1:8000/accounts/offers/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(response => {
        fetchOffers();
        setNewOffer(initialOfferState);
        setImage(null);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error creating the offer!', error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(currentOffer).forEach(key => {
      formData.append(key, currentOffer[key]);
    });
    if (image) {
      formData.append('image', image);
    }

    axios.put(`http://127.0.0.1:8000/accounts/offers/${currentOffer.id}/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(response => {
        fetchOffers();
        setCurrentOffer(null);
        setImage(null);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error updating the offer!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/accounts/offers/${id}/`)
      .then(() => {
        fetchOffers();
      })
      .catch(error => {
        console.error('Error deleting the offer!', error);
      });
  };

  const openModal = (offer = null) => {
    setCurrentOffer(offer);
    if (offer) {
      setNewOffer({ ...offer, products: offer.products.map(product => product.id) });
    } else {
      setNewOffer(initialOfferState);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentOffer(null);
    setNewOffer(initialOfferState);
    setImage(null);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Button variant="primary" onClick={() => openModal()}>Create New Offer</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {offers.map(offer => (
              <ListGroup.Item key={offer.id}>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body className="d-flex">
                        <div className="flex-shrink-0">
                          <Card.Img
                            variant="left"
                            src={offer.image}
                            alt={offer.title}
                            style={{ width: "200px", height: "auto", objectFit: "cover" }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3 float-right">
                          <Card.Title>{offer.title}</Card.Title>
                          <Card.Text>{offer.description}</Card.Text>
                          <Card.Text>Discount: {offer.discount_percentage}%</Card.Text>
                          <Card.Text>Promo Code: {offer.promo_code}</Card.Text>
                          <Card.Text>Start Date: {offer.start_date}</Card.Text>
                          <Card.Text>End Date: {offer.end_date}</Card.Text>
                          <Card.Text>
                            Products: {offer.products.map(productId => {
                              const product = products.find(product => product.id === productId);
                              return product ? product.name : null;
                            }).join(', ')}
                          </Card.Text>
                          <Card.Text>Price: ${getPrice(offer)}</Card.Text>
                          {offer.timeRemaining && <Card.Text>{offer.timeRemaining}</Card.Text>}
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Button variant="warning" onClick={() => openModal(offer)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleDelete(offer.id)} className="ml-2">Delete</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentOffer ? 'Edit Offer' : 'Create Offer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={currentOffer ? handleUpdate : handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title" value={newOffer.title} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} placeholder="Enter description" value={newOffer.description} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formDiscountPercentage">
              <Form.Label>Discount Percentage</Form.Label>
              <Form.Control type="number" name="discount_percentage" placeholder="Enter discount percentage" value={newOffer.discount_percentage} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formPromoCode">
              <Form.Label>Promo Code</Form.Label>
              <Form.Control type="text" name="promo_code" placeholder="Enter promo code" value={newOffer.promo_code} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="start_date" value={newOffer.start_date} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="end_date" value={newOffer.end_date} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required />
            </Form.Group>
            <Form.Group controlId="formProducts">
              <Form.Label>Products</Form.Label>
              <Form.Control as="select" name="products" value={newOffer.products[0]} onChange={(e) => handleInputChange(e, currentOffer ? setCurrentOffer : setNewOffer)} required>
                <option value="">Select a product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <div {...getRootProps()} className="border p-2 text-center">
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select one</p>
                {image && <p>Selected file: {image.name}</p>}
              </div>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" readOnly value={updatedPrice || getPrice(newOffer)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {currentOffer ? 'Update' : 'Create'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
