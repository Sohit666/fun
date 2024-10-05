// /components/Carousel.js

"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, Button, Box, Typography } from '@mui/material';

const images = [
  '/assets/d1.png',
  '/assets/d2.png',
  '/assets/d3.png'
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-move images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card 
      sx={{ 
        maxWidth: 370, 
        mx: 'auto', 
        mt: 4, 
        position: 'relative',
        border: '2px solid #1976d2', // Add border with color (primary blue in this case)
        borderRadius: '16px', // Optional: rounding the corners for the border
        boxShadow: 3 // Optional: add some shadow for better effect
      }}
    >
      <Box sx={{ height: 400, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src={images[currentImage]}
          alt={`Carousel image ${currentImage + 1}`}
          layout="intrinsic"
          width={300} // Adjust width to maintain aspect ratio
          height={400} // Adjust height to maintain aspect ratio
          objectFit="contain" // Center the image without cropping
        />
      </Box>
      <Typography variant="h4" align="center" sx={{ p: 1 }}>
        Deepak Chaudhary
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Button
          variant="contained"
          color="primary"
          href="https://maps.app.goo.gl/xv8wY46Uw4Ay8LjE9"
          target="_blank"
          sx={{
            mr: 1,
            borderRadius: 2, // Rounded corners
            padding: '10px 20px', // Increase size
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#0056b3', // Darker shade on hover
              transform: 'scale(1.05)', // Slightly enlarge on hover
            },
          }}
        >
          Get Location
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="tel:7834916406"
          sx={{
            borderRadius: 2, 
            padding: '10px 20px', 
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#d74e00', 
              transform: 'scale(1.05)', 
            },
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Card>
  );
};

export default Carousel;
