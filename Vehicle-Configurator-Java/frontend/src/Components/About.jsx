import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import about from '../Content/about.jpg'; 

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container>
        {/* Header */}
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
          About Us
        </Typography>

        {/* Text Content */}
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
          Our mission is to provide a highly interactive and intuitive 
          online platform that empowers you to create your perfect vehicle 
          in just a few clicks. Whether you're looking for an electric car, 
          a sports car, or a family-friendly SUV, 
          we offer everything you need to choose and configure the perfect 
          vehicle, all from the comfort of your home.
        </Typography>

        {/* Image and More Content */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={about} 
              alt="About Us"
              style={{
                width: '100%',
                height: 'auto',
                // borderRadius: '8px',
                // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We prioritize quality, affordability, and customization. Our platform 
              offers a wide range of options, from eco-friendly electric vehicles to 
              powerful sports cars, with an easy-to-use configurator that lets you 
              choose every detail of your vehicle.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We also provide excellent customer support throughout your journey, 
              ensuring that your experience is seamless from the first click to 
              the final purchase.
            </Typography>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
