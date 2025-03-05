import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Grid, Typography, Container } from '@mui/material';

import one from "../Content/team/one.jpeg"
import two from "../Content/team/two.jpeg"
import three from "../Content/team/three.jpeg"
import four from "../Content/team/four.jpeg"



const teamMembers = [
  { name: 'John Doe',
    role: 'CEO', 
    img: one,
    bio: "John is passionate about sustainability and leads Redaptive with a vision to change  how companies adopt energy solutions. "
  },
  { name: 
    'Jane Smith', 
    role: 'CTO', 
    img: two, 
    bio: 'Jane drives technological innovations and oversees Redaptive’s energy-saving platform development.' 
  },
  { name: 'Alice Johnson', 
    role: 'Lead Engineer', 
    img: three, 
    bio: 'Alice is a key part of our engineering team, building scalable solutions for energy efficiency.' 
  },
  { name: 'Bob Brown', 
    role: 'VP of Operations', 
    img: four, 
    bio: 'Bob ensures Redaptive’s projects are executed efficiently, optimizing both energy and resources.' 
  }
];
const Team = () => {
  return (
    <section className="py-5">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Meet Vconfig
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Vconfig's team of business and technology experts is at the core of our success in delivering a platform to accelerate the adoption of energy solutions that transform how organizations reduce their carbon impact. Meet the team who will bring your business a more sustainable future.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamMemberCard 
                name={member.name}
                role={member.role}
                img={member.img}
                bio={member.bio}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Team;
