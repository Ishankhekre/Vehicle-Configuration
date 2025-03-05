import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const TeamMemberCard = ({ name, role, img, bio }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }} className="mb-4">
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={`${name}'s photo`}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {role}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default TeamMemberCard;
