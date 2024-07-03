// CustomCard.jsx (or CustomCard.js)

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ title, content, imageUrl }) => {
  return (
    <Card>
      {imageUrl && <CardMedia component="img" height="250" image={imageUrl} alt={title} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
