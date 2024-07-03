import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography, CssBaseline, TextField, Avatar, FormControlLabel, Checkbox,Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/token/', {
        username: username,
        password: password
      });

      const { access } = response.data;
      localStorage.setItem('token', access);
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
      navigate('/');
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ marginBottom: '8px', backgroundColor: 'secondary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ margin: '16px 0' }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" style={{ color: 'blue' }}>
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" style={{ color: 'blue' }}>
                New User? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default Login;
