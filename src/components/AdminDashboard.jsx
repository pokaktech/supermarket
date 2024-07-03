
import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryData();
    fetchProductData();
  }, []);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/categories/');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };
 // Function to generate random color
 const getRandomColor = index => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#BADA55', '#FF6666'];
  return colors[index % colors.length];
};
  // Calculate statistics based on category and product data
  const calculateStatistics = () => {
    const categoryStats = categories.reduce((acc, category) => {
      const productsInCategory = products.filter(product => product.category === category.id);
      acc.push({ name: category.name, value: productsInCategory.length, color: getRandomColor(acc.length) });
      return acc;
    }, []);

    return categoryStats;
  };

  const statistics = calculateStatistics();

  const pieChartData = statistics;

  

  return (
    <div style={{ padding: 20, backgroundColor: '#f8f9fa', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#343a40' }}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Total Categories</Typography>
            <Typography variant="h4">{categories.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Total Products</Typography>
            <Typography variant="h4">{products.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Pie Chart: Categories vs Products</Typography>
            <PieChart width={400} height={400}>
            <Pie
  data={pieChartData}
  dataKey="value"
  nameKey="name"
  cx="50%"
  cy="50%"
  outerRadius={150}
  fill="#8884d8"
  label
  animationBegin={300}
  animationDuration={1000}
  animationEasing="ease-in-out"
  isAnimationActive={true}
>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;