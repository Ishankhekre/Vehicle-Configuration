import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Slide } from "react-awesome-reveal";


const Features = () => {








  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container>      <Slide direction="up" cascade triggerOnce>

        <Typography variant="h2" sx={{ mb: 4 }}>Our Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Typography variant="h5">Advanced Analytics</Typography>
              <Typography sx={{ color: '#A9A9A9' }} variant="body1"> Unlock the power of your data with cutting-edge analytics tools that provide 
                deep insights and drive smarter decisions.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Typography variant="h5">Real-Time Collaboration</Typography>
              <Typography sx={{ color: '#A9A9A9' }} variant="body1">
                Collaborate seamlessly with your team in real-time, 
                enhancing productivity and streamlining workflow management.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Typography  variant="h5">Security and Encryption</Typography>
              <Typography sx={{ color: '#A9A9A9' }} variant="body1"> 
                Our solution ensures top-notch security and encryption, 
                protecting your sensitive data from potential threats.
                </Typography>
            </Paper>
          </Grid>
        </Grid>      </Slide>

      </Container>
    </Box>
  );
}

export default Features;
