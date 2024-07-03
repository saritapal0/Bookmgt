import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Row1() {
  return (
    <Box
      p={2} // Padding all around
      m={2} // Margin all around
      bgcolor="white" // Background color
      borderRadius={4} // Border radius
    >
      <div>
        <Typography variant="h2">Publish your Book.</Typography>
        <Typography variant="h2">Publish your Story.</Typography>
        <Typography variant="h5">All the tools you need to write, publish and sell your book in paperback and ebook Worldwide</Typography>
        <Button variant="contained" color="primary">
          Get Started for Free
        </Button>
      </div>
    </Box>
  );
}
