// /pages/index.js
import { Container,  Typography } from '@mui/material';
import Carousel from './components/carousel';
import ImageCard from './components/imagecard';
import List from './components/List'
import DoAndDont from './components/do';


const Home = () => {
  

  return (

  <div>
  <Typography variant="h2" align="center" sx={{ p: 1 }}>
        🎉 On 12th Oct, 8:00 PM all are invited 🎉
      </Typography>
      
      {/* Cheers to 24 years */}
      <Typography variant="h4" align="center" sx={{ p: 1 }}>
        🍻 Cheers and Beer to 24 years 🍺
      </Typography>
      
      {/* Beat the Heat */}
      <Typography variant="h6" align="center" sx={{ p: 1 }}>
        ☀️ Beat the Heat!!!!! 🧊
      </Typography>
    <Container>
      {/* Carousel Section */}
      <Carousel />

      <ImageCard/>

      {/* Do's and Don'ts Section */}
      <List/>
      <DoAndDont />
    </Container>
  </div>
  );
};

export default Home;