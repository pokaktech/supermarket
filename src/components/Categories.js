import React, { useState, useEffect } from "react";
import { Button, Modal, FormControl, InputAdornment, TextField, Grid, Card, CardContent, Typography, MenuItem, Select, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

export default function Categories() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedProductInModal, setSelectedProductInModal] = useState(null);
  const [priceRanges, setPriceRanges] = useState([]);
  const [priceRangeModalShow, setPriceRangeModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get("http://127.0.0.1:8000/accounts/categories/");
        const productResponse = await axios.get("http://127.0.0.1:8000/accounts/products/");

        setCategories(categoryResponse.data);
        setProducts(productResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelection = (categoryId) => {
    const selectedCategoryProducts = products.filter((product) => product.category === categoryId);
    if (selectedCategoryProducts.length > 0) {
      setSelectedProductInModal(selectedCategoryProducts[0]);
      setSelectedProduct(selectedCategoryProducts[0]);
      setShowModal(true);
    }
  };

  const handleCardClick = (product) => {
    setSelectedProductInModal(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleAddToCart = async () => {
    if (selectedProductInModal && quantity > 0) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/accounts/add-to-cart/${selectedProductInModal.id}/`,
          {
            qty: quantity,
          }
        );

        if (response.status === 201) {
          handleCloseModal();
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

  const filterProductsByPriceRange = (product) => {
    if (priceRanges.length === 0) return true;

    return priceRanges.some((range) => {
      const [minPrice, maxPrice] = range.split("-").map(parseFloat);
      return product && product.price >= minPrice && product.price <= maxPrice;
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRanges((prev) => {
      if (prev.includes(range)) {
        return prev.filter((r) => r !== range);
      } else {
        return [...prev, range];
      }
    });
  };

  const filteredProducts = products
    .filter(filterProductsByPriceRange)
    .filter((product) => product && product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div style={{ backgroundColor: "whitesmoke", padding: "20px", minHeight: "100vh" }}>
        <br /><br />
        <Grid container spacing={3}>
          <Grid item md={3}>
            <h3>Categories</h3>
            {categories.map((category, idx) => (
              <Card key={idx} style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Typography variant="h6">{category.name}</Typography>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "10px" }}
                  >
                    {products.category?.map((product, index) => (
                      <MenuItem key={index} onClick={() => handleCategorySelection(category.id)}>
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item md={9}>
            <h3>Products</h3>
            <FormControl fullWidth style={{ marginBottom: "10px" }}>
              <TextField
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" onClick={() => setPriceRangeModalShow(true)} style={{ backgroundColor: "blue", color: "white" }}>
                        Filter
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <div>Products found: {filteredProducts.length}</div>
            <Grid container spacing={1}>
              {filteredProducts.map((product, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Card style={{ width: '250px' }}>
                    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" style={{ marginBottom: '5px' }}>{product.name}</Typography>
                      <Typography variant="body2">Price: Rs. {product.price}</Typography>
                      <Button
                        onClick={() => handleCardClick(product)}
                        variant="contained"
                        style={{ backgroundColor: 'blue', color: 'white', marginTop: '5px' }}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Modal open={priceRangeModalShow} onClose={() => setPriceRangeModalShow(false)}>
          <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
            <h2>Price Range</h2>
            {["1-10", "10-50", "50-100", "100-250", "250-500", "500-1000", "1000-5000", "5000-10000", "10000-20000", "20000-30000"].map((range, index) => (
              <FormControl key={index} style={{ marginBottom: "10px" }}>
                <FormControlLabel
                  control={<Checkbox checked={priceRanges.includes(range)} onChange={() => handlePriceRangeChange(range)} />}
                  label={range}
                />
              </FormControl>
            ))}
            <Button variant="contained" onClick={() => setPriceRangeModalShow(false)} style={{ backgroundColor: "blue", color: "white" }}>
              Close
            </Button>
          </div>
        </Modal>

        <Modal open={showModal} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
            <h2>Add to Cart</h2>
            <p>Product: {selectedProductInModal?.name}</p>
            <img src={selectedProductInModal?.image} style={{ width: "100px", objectFit: "cover" }} alt={selectedProductInModal?.name} />
            <FormControl fullWidth style={{ marginBottom: "10px" }}>
              <TextField
                type="number"
                label="Quantity"
                inputProps={{ min: 1 }}
                value={quantity}
                onChange={handleQuantityChange}
              />
            </FormControl>
            <Button variant="contained" onClick={handleAddToCart} style={{ backgroundColor: "blue", color: "white" }}>
              Add to Cart
            </Button>
          </div>
        </Modal>
      </div>
      <Footer />
    </>
  );
}
