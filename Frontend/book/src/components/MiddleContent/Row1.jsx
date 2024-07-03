import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Import your book image
import BookImage from '../../assets/images/bks.webp';

export default function Row1() {
  return (
    <Grid container spacing={0}>
      {/* Left side content */}
      <Grid item xs={12} md={7}>
        <Box
          p={6}
          m={6} // Decreased margin for smaller screens
          bgcolor="white"
          borderRadius={4}
        >
          <Typography variant="h2" mb={2}>Publish your Book.</Typography>
          <Typography variant="h2" mb={2}>Publish your Story.</Typography>
          <Typography variant="h5" mb={4}>
            All the tools you need to write, publish and sell your book in
            <br />
            paperback and ebook Worldwide
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '30px', width: '200px', height:'40px' }}>
            Get Started for Free
          </Button>
        </Box>
      </Grid>
      
      {/* Right side card with image */}
      <Grid item xs={12} md={5}>
        <Box
          bgcolor="white"
          borderRadius={4}
          display="flex"
          flexDirection="column"
          alignItems="center" // Center align content horizontally
          justifyContent="flex-start" // Align content towards the top
          // height="100%"
        >
         <img src={BookImage} alt="Book" style={{  maxWidth: '800px', maxHeight: '500px', marginTop: '0px', objectFit: 'contain' }} />
        </Box>
      </Grid>
    </Grid>
    
  );
}
