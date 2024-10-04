// /components/DoAndDont.js
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const dos = [
    "Do pace yourself – It’s a party, not a sprint.",
    "Do stay hydrated – Alternate between drinks and water.",
    "Do share the love – If you brought the good stuff, don’t hoard it.",
    "Do know your limits – Feeling like you can solve world hunger? Chill for a bit.",
    "Do stock up on snacks – Weed and alcohol without snacks is like Netflix without Wi-Fi."
];

const donts = [
    "Don’t mix too much – Mixing alcohol and weed isn't a good idea.",
    "Don’t get philosophical – You're not Socrates after your third drink.",
    "Don’t challenge people to shots – You might lose and look silly.",
    "Don’t text your ex – It’s never a good idea, no matter how much you want to.",
    "Don’t forget where you are – Keep your shoes on!"
];

const DoAndDont = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Do&rsquo;s and Don&rsquo;ts
      </Typography>

      <Typography variant="h6" gutterBottom>
        Do&rsquo;s:
      </Typography>
      <List>
        {dos.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>
        Don&rsquo;ts:
      </Typography>
      <List>
        {donts.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DoAndDont;
