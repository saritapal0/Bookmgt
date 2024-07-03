import React from 'react';
import { Grid } from '@mui/material';
import CustomCard from './CustomCard'; // Adjust the path as per your project structure

const  CardGrid = () => {
  const cards = [
    { id: 1, title: 'Title:Bhagvad Geeta', content: 'Author:Abc', imageUrl: "https://vediccosmos.com/wp-content/uploads/2023/04/3-lang-box-and-book-eng.png" },
    { id: 2, title: 'Title:Herry Poter', content: 'Author:J.K Rowling',imageUrl: "https://i.ebayimg.com/images/g/04kAAOSwREdlprtZ/s-l500.jpg" },
    { id: 3, title: 'Title:Fantasy', content: 'Author:Abc',imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/5/KV/NK/MM/3726307/narrative-story-books-43-different-books-1000x1000.jpg" },
    { id: 4, title: 'Title:Johnny  Chuck', content: 'Author:Abc',imageUrl: "https://myreadingvintage.com/cdn/shop/files/IMG_0185_4d4f535d-2d2d-474e-9eca-a04647aaee87_2048x.jpg?v=1718049324" },
  ];

  return (
    <Grid container spacing={3} style={{ marginTop: '50px', paddingLeft: '20px' }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <CustomCard title={card.title} content={card.content} imageUrl={card.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
