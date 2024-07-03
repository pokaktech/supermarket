import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [user_id, setUserId] = useState(null);
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/password-reset/', { username: email });
      if (response.data.status === 1) {
        setStep(2);
        setToken(response.data.token); // Assuming the token is returned in the response
      } else {
        setError('User not found');
      }
    } catch (error) {
      setError('Failed to send reset email');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/accounts/password/reset/', { token, password });
      setStep(3);
    } catch (error) {
      setError('Failed to reset password');
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/set-password/${user_id}/`, { password });
      if (response.data.status === 1) {
        setStep(4);
      } else {
        setError('Failed to set password');
      }
    } catch (error) {
      setError('Failed to set password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
     
      <div className="min-h-screen flex items-center justify-center bg-whitesmoke-500">
        <div className="bg-white p-8 rounded shadow-md">
          
          {step === 1 && (
            <>
             <LockOutlinedIcon className="justify-center"/>
              <Typography variant="h5" className="text-center mb-4">Forgot Password</Typography>
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Send Reset Email
                </Button>
              </form>
            </>
          )}
          {step === 2 && (
            <>
             <LockOutlinedIcon/>
              <Typography variant="h5" className="text-center mb-4">Reset Password</Typography>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <TextField
                  fullWidth
                  label="New Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Reset Password
                </Button>
              </form>
            </>
          )}
          {step === 3 && (
            <>
             <LockOutlinedIcon/>
              <Typography variant="h5" className="text-center mb-4">Set Password</Typography>
              <form onSubmit={handleSetPassword} className="space-y-4">
                <TextField
                  fullWidth
                  label="New Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Set Password
                </Button>
              </form>
            </>
          )}
          {step === 4 && (
            <div className="text-center">
              <Typography>Password has been successfully set.</Typography>
              <Typography>
                <Link href="/login" color="primary">Back to Login</Link>
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
