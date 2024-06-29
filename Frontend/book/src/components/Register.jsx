import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        border: '1px solid #ced4da',
        borderRadius: 5,
        backgroundColor: '#bbdefb',
        maxWidth: 400,
        margin: 'auto',
        marginTop: 50,
    };

    const formStyle = {
        width: '100%',
        marginTop: 1,
    };

    const submitStyle = {
        margin: '12px 0 6px',
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login/login', {
                username,
                email,
                password,
            });

            if (response.status === 200) {
                console.log('Login successful');
                // Reset form fields on successful login
                setUsername('');
                setEmail('');
                setPassword('');
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div style={paperStyle}>
                    <Typography component="h1" variant="h5">
                        User Login
                    </Typography>
                    {error && (
                        <Typography variant="body2" color="error" align="center">
                            {error}
                        </Typography>
                    )}
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
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
                            InputProps={{
                                style: { borderRadius: 5 }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                style: { borderRadius: 5 }
                            }}
                        />
                        <TextField
                            variant="outlined"
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
                            InputProps={{
                                style: { borderRadius: 5 }
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={submitStyle}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </Box>
        </Container>
    );
};

export default LoginForm;
