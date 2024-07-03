import React from 'react';
import {
    Box,
    Divider,
    Link,
    Typography,
    Grid,
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
            <Divider sx={{ bgcolor: 'white' }} />
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body2" sx={{ display: 'inline', ml: 1 }}>
                        <EmailIcon sx={{ fontSize: 30 }} />
                        <br/>
                            Write: <Link href="mailto:One@bluerosepublishers.com" color="inherit">One@bluerosepublishers.com</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body2">
                        <PhoneIphoneIcon sx={{ fontSize: 30 }} />
                        <br/>
                            Call: +91 888 2 898 898 | +44 (0) 7342408967
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body2">
                        <HouseSidingIcon sx={{ fontSize: 30 }} />
                        <br/>
                            Find: New Delhi | London | New York | Nairobi
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ bgcolor: 'white' }} />
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography>
                    Copyright © 2024 | All Rights Reserved | Privacy Policy
                    <Link href="https://www.wrappixel.com" color="inherit">Wrappixel.com</Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
