import React from 'react';
import {  Card, CardContent, Typography,  ListItem, ListItemText, Grid } from '@mui/material';

const guests = [
  'Rohit Maurya', 'Sohit Prajapati', 'Vivek Chaudhary', 'Harsh Verma', 'Akrit Raghav', 'Tarun Pal',
  'Tarun Raghav', 'Saurav', 'Ankit Gupta', 'Vicky Kasana', 'Anuj Kasana', 'Bharat Goyal Golu',
  'Tarun Kshyap', 'Ekansh Rajput', 'Mayank Malhotra', 'Kartik Tomar', 'Cheema', 'Nirmal Bhai',
  'Amit Tomar', 'Swyam Verma', 'Gaurav', 'Govinda', 'Uv Raghav', 'Satyam Raghav (Sam)', 'Rohit', 'Himanshu'
];

// Sort the guests alphabetically
const sortedGuests = guests.sort();

const GuestList: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2, boxShadow: 4, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Guest List (12th Oct)
        </Typography>
        <Grid container spacing={2}>
          {sortedGuests.map((guest, index) => (
            <Grid item xs={12} key={index}>
              <ListItem
                sx={{
                  bgcolor: index % 2 === 0 ? 'whitesmoke' : 'white',
                  borderRadius: 1,
                  p: 2,
                  boxShadow: 1,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    bgcolor: 'lightblue',
                  },
                }}
              >
                <ListItemText
                  primary={guest}
                  primaryTypographyProps={{
                    variant: 'h6',
                    fontWeight: 'medium',
                    textAlign: 'center',
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GuestList;
