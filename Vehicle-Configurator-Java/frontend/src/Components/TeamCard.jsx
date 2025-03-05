import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/TeamCard.css';

const TeamCard = ({ name, role, img, bio }) => {
  return (
    <div className="team-member-card">
      <img src={img} alt={`${name}'s photo`} className="team-member-img"/>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default TeamCard;
