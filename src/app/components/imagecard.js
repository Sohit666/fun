// /components/ImageCards.js

"use client";
import { Box, Card, CardMedia, Typography } from '@mui/material';

const images = [
  { src: '/assets/sohit.jpg', title: 'Sohit Prajapati' },
  { src: '/assets/rohit.png', title: 'Rohit Maurya' },
  { src: '/assets/tarun.png', title: 'Tarun Pal' },
  { src: '/assets/vivek.png', title: 'Vivek Chaudhary' },
  { src: '/assets/anuj.png', title: 'Anuj Jatav' },
  { src: '/assets/akrit.png', title: 'Akrit Raghav' },
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
