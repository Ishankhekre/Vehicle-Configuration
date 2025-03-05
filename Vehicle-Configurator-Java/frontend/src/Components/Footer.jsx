import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#333', 
        color: 'white', 
        py: 4,
        position: 'relative', // Position relative, so it will go down naturally with the content
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
      }}
    >
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body1">&copy; 2025 Vconfig Inc. All rights reserved.</Typography>
            <Typography variant="body1">Jacksonville, 347 Riverside Ave, United States</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Follow us on:</Typography>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;



