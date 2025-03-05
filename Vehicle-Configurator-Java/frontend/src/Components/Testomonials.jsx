import React from 'react';
import { Box, Container, Typography , Grid} from '@mui/material';
import { Fade } from "react-awesome-reveal";

const Testomonials = () => {


    
    return (
        <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container><Fade cascade damping={0.3}>
          <Typography variant="h2" sx={{ mb: 4 }}>What Our Clients Say</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                "With V-Config, I built a car that suits both my style and my needs.
                 It’s fantastic how you can see your exact specifications instantly."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Hilary Mantel, CEO of DriveWorx
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                "Their team is incredibly professional, and they deliver on time every time."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Alan Bennett, Founder of TailorDrive Solutions
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                "V-Config made car customization a breeze! I could experiment with different
                 options and visualize them instantly. Definitely a game-changer!"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Carlos M., Technology Expert
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3 }}>
              "From selecting my car model to customizing each feature, I had full creative control. 
              I couldn't be more pleased with the final product."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Michael Ondaatje, CustomRide Enterprises
              </Typography>
            </Grid>
          </Grid></Fade>
        </Container>
      </Box>
      
    );
  };
  
  export default Testomonials;
  