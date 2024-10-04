// /pages/index.js
import { Container,  Typography } from '@mui/material';
import Carousel from './components/carousel';
import ImageCard from './components/imagecard';
import DoAndDont from './components/do';

const Home = () => {
  

  return (

  <div>
  <Typography variant="h2" align="center" sx={{ p: 1 }}>
       On 12th oct , 8:00 pm all are invited
      </Typography>
  <Typography variant="h6" align="center" sx={{ p: 1 }}>
       Beat the Heat!!!!!
      </Typography>
    <Container>
      {/* Carousel Section */}
      <Carousel />

      <ImageCard/>

      {/* Do's and Don'ts Section */}
      <DoAndDont />
    </Container>
  </div>
  );
};

export default Home;
