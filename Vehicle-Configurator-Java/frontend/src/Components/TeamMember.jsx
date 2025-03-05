import React from 'react';
import TeamCard from '../Components/TeamCard';
import '../CSS/TeamMember.css'; 
import one from "../Content/team/one.jpeg"
import two from "../Content/team/two.jpeg"
import three from "../Content/team/three.jpeg"
import four from "../Content/team/four.jpeg"



const teamMembers = [
  { name: 'John Durrant',
    role: 'CEO', 
    img: one,
    bio: "John leads the company in providing innovative car customization solutions, enhancing automotive experiences for customers worldwide."
  },
  { name: 
    'Mark Benjamin', 
    role: 'CTO', 
    img: two, 
    bio: "Mark spearheads the company’s technology strategy, driving innovation in car customization and ensuring top-tier performance in every project." 
  },
  { name: 'Lisa A. Hook', 
    role: 'Director', 
    img: three, 
    bio: "Lisa oversees strategic initiatives and ensures the seamless execution of car customization projects, delivering exceptional results to customers." 
  },
  { name: "Gary L. Lauer", 
    role: "VP of Marketing", 
    img: four, 
    bio: "Gary leads marketing strategies to promote innovative car customization solutions and expand the company’s reach in the automotive industry."
  }
];

const TeamMember = () => {
  return (
    <section className="meet-redaptive">
      <h2>Meet Vconfig</h2>
      <p>Vconfig's team of automotive and technology experts is at the heart of our 
        success in delivering customized car solutions that transform the way drivers 
        personalize and enhance their vehicles.
         Meet the team dedicated to bringing your car customization vision to life.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            name={member.name}
            role={member.role}
            img={member.img}
            bio={member.bio}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamMember;
