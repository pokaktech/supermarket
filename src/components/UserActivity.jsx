import React, { useState, useEffect } from 'react';
import { CChart } from '@coreui/react-chartjs';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const UserActivity = () => {
  const [userData, setUserData] = useState(null);
  const [maxProductInOrders, setMaxProductInOrders] = useState('');
  const [maxProductInCart, setMaxProductInCart] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username') || 'Guest');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || 'guest@example.com');
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

    let totalItems = 0;
    savedCart.forEach(item => {
      totalItems += item.qty;
    });

    setCartItemCount(totalItems);
    setOrdersCount(savedOrders.length);

    setCarts(savedCart);
    setOrders(savedOrders);

    const ordersProducts = savedOrders.flatMap(order => order.products || []);
    const maxQuantityProduct = ordersProducts.reduce((max, product) => (product && product.qty > max.qty ? product : max), ordersProducts[0] || {});
    setMaxProductInOrders(maxQuantityProduct);

    const maxTotalPriceProduct = savedCart.reduce((max, item) => (item.totalPrice > max.totalPrice ? item : max), savedCart[0] || {});
    setMaxProductInCart(maxTotalPriceProduct);

    const chartData = {
      labels: ['Cart Items', 'Order Count'],
      datasets: [
        {
          label: 'Count',
          backgroundColor: ['rgba(153,102,255,0.2)', 'rgba(75,192,192,0.2)'],
          borderColor: ['rgba(153,102,255,1)', 'rgba(75,192,192,1)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(153,102,255,0.4)', 'rgba(75,192,192,0.4)'],
          hoverBorderColor: ['rgba(153,102,255,1)', 'rgba(75,192,192,1)'],
          data: [totalItems, savedOrders.length],
        },
      ],
    };

    setUserData(chartData);
  }, []);

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: 'lightgrey',
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        grid: {
          color: 'lightgrey',
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  const getUniqueProductsCount = () => {
    const products = orders.flatMap(order => (order.products || []).map(product => product && product.name));
    return new Set(products).size;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>User Activity Chart</h2>
      {userData && (
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'center', gap:'10px'}}>
          <div style={{ width: '300px', height: '300px' }}>
            <CChart
              type="line"
              data={userData}
              options={chartOptions}
            />
          </div>
          <div style={{ width: '300px', height: '300px' }}>
            <CChart
              type="pie"
              data={{
                labels: ['Max Product in Orders', 'Max Product in Cart'],
                datasets: [
                  {
                    label: 'Product',
                    backgroundColor: ['#36a2eb', '#ff6384'],
                    data: [carts.length, orders.length],
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
          <div style={{ width: '300px', height: '300px' }}>
            <CChart
              type="bar"
              data={{
                labels: ['Max Product in Orders', 'Max Product in Cart'],
                datasets: [
                  {
                    label: 'Product',
                    backgroundColor: ['#36a2eb', '#ff6384'],
                    data: [carts.length, orders.length],
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
          <div style={{ width: '300px', height: '300px' }}>
            <CChart
              type="doughnut"
              data={{
                labels: ['Max Product in Orders', 'Max Product in Cart'],
                datasets: [
                  {
                    label: 'Product',
                    backgroundColor: ['#36a2eb', '#ff6384'],
                    data: [carts.length, orders.length],
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
          <div style={{ width: '300px', height: '300px' }}>
            <CChart
              type="polarArea"
              data={{
                labels: ['Max Product in Orders', 'Max Product in Cart'],
                datasets: [
                  {
                    label: 'Product',
                    backgroundColor: ['#36a2eb', '#ff6384'],
                    data: [carts.length, orders.length],
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {userData && (
          <div style={{ width: '600px', height: '400px' }}>
            <CChart type="bar" data={userData} options={chartOptions} />
          </div>
        )}
      </div>
      <br/><br/><br/><br/><br/>
      <h1>User Details, Orders, and Cart Items</h1>
      <Table striped bordered hover style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Order ID / Cart ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Username</th>
            <th>UserEmail</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (order.products || []).map((product, idx) => (
            <tr key={`${order._id}-${idx}`}>
              {idx === 0 && (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{order._id}</Tooltip>}
                >
                  <td>{order._id}</td>
                </OverlayTrigger>
              )}
              <td>{product.name}</td>
              <td>{product.qty}</td>
              <td>Order</td>
              <td>{username}</td>
              <td>{userEmail}</td>
            </tr>
          )))}
          {carts.map((item, idx) => (
            <tr key={`cart-${idx}`}>
              <td>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{item._id}</Tooltip>}
                >
                  <span>{item._id}</span>
                </OverlayTrigger>
              </td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>Cart</td>
              <td>{username}</td>
              <td>{userEmail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {(carts.length === 0 && orders.length === 0) && (
        <p>No orders or cart items available.</p>
      )}
    </div>
  );
};

export default UserActivity;
