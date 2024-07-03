import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showDiscountModal, setShowDiscountModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [editedProduct, setEditedProduct] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        image: null,
        quantity_in_stock: '',
    });
    const [categories, setCategories] = useState([]);
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        fetchProducts();
        fetchCategory();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (cardsContainerRef.current) {
            observer.observe(cardsContainerRef.current);
        }

        return () => {
            if (cardsContainerRef.current) {
                observer.unobserve(cardsContainerRef.current);
            }
        };
    }, []);
 
    const fetchProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/accounts/products/');
        setProducts(response.data);
    };

    const fetchCategory = async () => {
        const response = await axios.get('http://127.0.0.1:8000/accounts/categories/');
        setCategories(response.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/accounts/products/${id}/`);
        fetchProducts();
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setShowModal(true);
        setEditedProduct({
            name: product.name,
            category: product.category,
            description: product.description,
            price: product.price,
            image: product.image,
            quantity_in_stock: product.quantity_in_stock,
        });
    };

    const handleAdd = async () => {
        const formData = new FormData();
        formData.append('name', editedProduct.name);
        formData.append('category', editedProduct.category);
        formData.append('description', editedProduct.description);
        formData.append('price', editedProduct.price);
        formData.append('quantity_in_stock', editedProduct.quantity_in_stock);
        formData.append('image', editedProduct.image);
        
        await axios.post('http://127.0.0.1:8000/accounts/products/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
       
        setShowModal(false);
        fetchProducts();
    };

    const handleSaveEdit = async () => {
        const formData = new FormData();
        formData.append('name', editedProduct.name);
        formData.append('category', editedProduct.category);
        formData.append('description', editedProduct.description);
        formData.append('price', editedProduct.price);
        formData.append('quantity_in_stock', editedProduct.quantity_in_stock);
        formData.append('image', editedProduct.image);

        await axios.put(`http://127.0.0.1:8000/accounts/products/${editProduct.id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        setShowModal(false);
        fetchProducts();
    };

    const isSeasonalProduct = (product) => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1; // getMonth() returns month from 0-11
        // Example: Seasonal products are available from June to August
        return product.season_start <= month && month <= product.season_end;
    };

    const calculateDiscount = (price, season) => {
        switch (season) {
            case 'Winter':
                // Winter discount logic
                return price * 0.8; // Example: 20% discount for winter
            case 'Spring':
                // Spring discount logic
                return price * 0.9; // Example: 10% discount for spring
            case 'Summer':
                // Summer discount logic
                return price * 0.95; // Example: 5% discount for summer
            case 'Autumn':
                // Autumn discount logic
                return price; // No discount for autumn
            default:
                return price; // No discount by default
        }
    };
    

    const applyDiscount = async () => {
        if (selectedProduct) {
            const discountPercentage = parseFloat(discount);
            console.log(discountPercentage);
            if (!isNaN(discountPercentage)) {
                const discountedPrice = selectedProduct.price - (selectedProduct.price * (discountPercentage / 100));
                const updatedProduct = { ...selectedProduct, price: discountedPrice };
                console.log(discountedPrice);
                console.log(updatedProduct);
                // Update the product's price in the products state
                const updatedProducts = products.map(product => {
                    if (product.id === updatedProduct.id) {
                        return updatedProduct;
                    } else {
                        return product;
                    }
                });
                console.log(updatedProducts);
                setProducts(updatedProducts);
    
                // Now send the request to the server to apply the discount
                await axios.put(`http://127.0.0.1:8000/accounts/products/${selectedProduct.id}/discount/`, { discount_percentage: discountPercentage });
                setShowDiscountModal(false);
            }
        }
    };
    

    const sortedProducts = products
        .filter(product => product.quantity_in_stock > 0)
        .sort((a, b) => b.quantity_in_stock - a.quantity_in_stock);

    return (
        <div className="scroll-container">
            <div className="container">
                <h1 className="mt-3 mb-3">Products</h1>
                <Button className="mt-3" variant="success" onClick={() => setShowModal(true)}>Add Product</Button>
                <Button className="mt-3 ml-2" variant="warning" onClick={() => setShowDiscountModal(true)}>Apply Discount</Button>
                <div ref={cardsContainerRef} className="cards-container">
                    <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                        {sortedProducts && products.map(product => (
                            <Col key={product.id}>
                                <Card className="product-card">
                                    <div className="product-image-container">
                                        <Card.Img variant="top" src={product.image} alt={product.name} />
                                    </div>
                                    <Card.Body className="product-details">
                                        <Card.Title className="product-name">{product.name}</Card.Title>
                                        <Card.Text className="product-description">{product.description}</Card.Text>
                                        <Card.Text className="product-category">{product.category}</Card.Text>
                                        <Card.Text className="product-price">
                                            {isSeasonalProduct(product) ? (
                                                <>
                                                    <span className="original-price">${product.price}</span>
                                                    <span className="discounted-price">${calculateDiscount(product.price, 10)}</span>
                                                </>
                                            ) : (
                                                <>${product.price}</>
                                            )}
                                        </Card.Text>
                                        <Card.Text className="product-quantity-in-stock">{product.quantity_in_stock}</Card.Text>
                                      
                                        <div className="product-buttons">
                                            <Button variant="primary" onClick={() => handleEdit(product)}>Edit</Button>
                                            <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
             
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="editFormName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={editedProduct.name} onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editFormCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={editedProduct.category} onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}>
                                    <option value="">Select a category</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="editFormDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={editedProduct.description} onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editFormPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={editedProduct.price} onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editFormQuantity">
                                <Form.Label>Quantity in Stock</Form.Label>
                                <Form.Control type="number" value={editedProduct.quantity_in_stock} onChange={(e) => setEditedProduct({ ...editedProduct, quantity_in_stock: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editFormImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.files[0] })} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                        <Button variant="primary" onClick={editProduct ? handleSaveEdit : handleAdd}>{editProduct ? 'Save changes' : 'Add'}</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showDiscountModal} onHide={() => setShowDiscountModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Apply Discount</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="discountFormProduct">
                                <Form.Label>Product</Form.Label>
                                <Form.Control as="select" value={selectedProduct?.id || ''} onChange={(e) => setSelectedProduct(products.find(product => product.id === parseInt(e.target.value)))}>
                                    <option value="">Select a product</option>
                                    {products.map(product => (
                                        <option key={product.id} value={product.id}>{product.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="discountFormPercentage">
                                <Form.Label>Discount Percentage</Form.Label>
                                <Form.Control type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDiscountModal(false)}>Close</Button>
                        <Button variant="primary" onClick={applyDiscount}>Apply Discount</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default ProductList;
