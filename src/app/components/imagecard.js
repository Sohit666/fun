// /components/ImageCards.js

"use client";
import { Box, Card, CardMedia, Typography } from '@mui/material';

const images = [
  { src: '/assets/sohit.jpg', title: 'Web Developer - Sohit Prajapati' },
  { src: '/assets/tarun.png', title: 'Liquor Manager - Tarun Pal ' },
  { src: '/assets/rohit.png', title: 'Location Manager - Rohit Maurya' },
  { src: '/assets/ekii.png', title: 'Food Manager - Ekansh Rajput' },
  { src: '/assets/akrit.png', title: 'Akrit Raghav' },
  { src: '/assets/anuj.png', title: 'Anuj Jatav' },
  { src: '/assets/golu.png', title: 'Bharat Goyal Golu' },

  { src: '/assets/mayank.png', title: 'Mayank Malhotra' },

  { src: '/assets/chaman.png', title: 'Tarun Singh' },
  { src: '/assets/saurav.png', title: 'Saurabh' },



  { src: '/assets/vivek.png', title: 'Vivek Chaudhary' }
];


const ImageCards = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" sx={{ color: "white", mb: 2 }}>
        Mukhya Karyakarta
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allow wrapping to the next line
          justifyContent: 'center',
          gap: 2, // Space between cards
        }}
      >
        {images.map((image, index) => (
          <Card key={index} sx={{ width: 150, height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mb: 2 }}>
            <CardMedia
              component="img"
              height="150" // Adjust height to make cards smaller
              image={image.src}
              alt={image.title}
              sx={{ objectFit: 'cover' }} // Keep aspect ratio of the image
            />
            <Typography variant="h7" align="center" sx={{ p: 1, flexShrink: 0 }}>
              {image.title}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImageCards;
