import React from 'react';
import { Grid } from '@mui/material';
import CustomCard from '../Row3/CardComponent';

const GridContainer = () => {
  const cards = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
  ];

  return (
    <Grid container spacing={3} style={{ marginTop: '50px',paddingLeft:'15px' }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <CustomCard title={card.title} content={card.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridContainer;
