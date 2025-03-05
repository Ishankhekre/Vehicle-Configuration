// import React from 'react';
// import { Card, CardMedia, Container, Typography } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import a1 from "../Content/carsol/a1.jpeg";
// import a2 from "../Content/carsol/a2.jpeg";
// import a3 from "../Content/carsol/a3.jpeg";

// const Clients = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 5 }}>
//       <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 4 }}>
//         Our Clients
//       </Typography>
//       <Carousel showThumbs={false} infiniteLoop autoPlay>
//         <div>
//           <Card sx={{ maxWidth: 945, boxShadow: 3 }}>
//             <CardMedia
//               component="img"
//               height="400"  // Consistent height
//               image={a1}
//               alt="Client 1"
//               sx={{ objectFit: "cover", borderRadius: 2 }} // Ensure images scale uniformly and with rounded corners
//             />
//           </Card>
//         </div>
//         <div>
//           <Card sx={{ maxWidth: 945, boxShadow: 3 }}>
//             <CardMedia
//               component="img"
//               height="400"
//               image={a2}
//               alt="Client 2"
//               sx={{ objectFit: "cover", borderRadius: 2 }}
//             />
//           </Card>
//         </div>
//         <div>
//           <Card sx={{ maxWidth: 945, boxShadow: 3 }}>
//             <CardMedia
//               component="img"
//               height="400"
//               image={a3}
//               alt="Client 3"
//               sx={{ objectFit: "cover", borderRadius: 2 }}
//             />
//           </Card>
//         </div>
//       </Carousel>
//     </Container>
//   );
// };

// export default Clients;


//=============================================================================================



import React from 'react';
import { Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';
import img1 from '../Content/carsol/one.png';
import img2 from '../Content/carsol/two.png';
import img3 from '../Content/carsol/three.png';
import img4 from '../Content/carsol/four.png';
import img5 from '../Content/carsol/five.png';
import img6 from '../Content/carsol/six.png';
import img7 from '../Content/carsol/seven.png';
import img8 from '../Content/carsol/eight.png';
import img9 from '../Content/carsol/nine.png';
import img10 from '../Content/carsol/ten.png';
import '../CSS/Clients.css';

function Clients() {
  return (
    <div className="App">
      <div className="title">
      <Typography variant="h2" sx={{ mb: 4 }}>Our Technology Partner's</Typography>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Clients;
