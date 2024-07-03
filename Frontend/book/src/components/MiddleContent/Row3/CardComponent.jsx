import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
