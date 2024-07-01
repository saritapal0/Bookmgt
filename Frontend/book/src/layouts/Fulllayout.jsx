import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import { styled } from '@mui/system'; // Import styled from @mui/system

// Define styled component using styled from @mui/system
const PageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Ensure content flows vertically
  minHeight: "100vh", // Take full viewport height
  backgroundColor: theme.palette.background.default,
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: "40px", // Adjust padding as needed
}));

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      
      <PageWrapper>
        <ContentWrapper>
          <Container
            maxWidth="xl" // Set maxWidth to "xl" for full width
            sx={{
              paddingLeft: "0px!important", // Adjust padding as needed
              paddingTop: "0px!important", // Adjust padding as needed
              overflow: "hidden",
              flexGrow: 1, // Ensure the Container grows to take full width
            }}
          >
            <Box>
              <Outlet />
            </Box>
          </Container>
        </ContentWrapper>
        
        <Box sx={{ marginTop: "80px", width: "100%", bgcolor: '#ede7f6', color: 'black' }}>
          <Footer />
        </Box>
      </PageWrapper>
    </>
  );
};

export default App;
