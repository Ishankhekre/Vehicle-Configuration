import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HeroContent from '../Content/HeroContent3.jpg';
import { Fade } from "react-awesome-reveal";


const Hero = () => {

  const navigate = useNavigate(); 

  function handleHerobtn() {
   
    navigate('/Registerpage');
  }


    
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${HeroContent})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#F1F1F1',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Container><Fade duration={1500}>
        <Typography variant="h1" sx={{ color : "#223747",fontWeight: 700, mb: 2 }}>
          Welcome to Vconfig
        </Typography><Fade delay={500} cascade damping={0.3}>
        <Typography variant="h5" sx={{  fontWeight: 900, mb: 3 }}>
          Transforming your ideas into reality with cutting-edge solutions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleHerobtn}
          sx={{
            padding: '12px 30px',
            borderRadius: '8px',
            fontSize: '1.2rem',
            textTransform: 'none',
          }}
          href="#services"
        >
          Explore Our Services
        </Button> </Fade>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
