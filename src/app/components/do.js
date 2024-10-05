// /components/DoAndDont.js
"use client"
import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const dosEnglish = [
    "Do pace yourself – It’s a party, not a sprint.",
    "Do stay hydrated – Alternate between drinks and water.",
    "Do share the love – If you brought the good stuff, don’t hoard it.",
    "Do know your limits – Feeling like you can solve world hunger? Chill for a bit.",
    "Do stock up on snacks – Weed and alcohol without snacks is like Netflix without Wi-Fi."
];

const dontsEnglish = [
    "Don’t mix too much – Mixing alcohol and weed isn't a good idea.",
    "Don’t get philosophical – You're not Socrates after your third drink.",
    "Don’t challenge people to shots – You might lose and look silly.",
    "Don’t text your ex – It’s never a good idea, no matter how much you want to.",
    "Don’t forget where you are – Keep your shoes on!"
];

// Hindi translations
const dosHindi = [
    "अपना ध्यान रखें - यह एक पार्टी है, स्प्रिंट नहीं।",
    "हाइड्रेटेड रहें - पेय और पानी के बीच बारी-बारी से पीएं।",
    "प्यार बांटें - अगर आपने अच्छी चीज़ें लाई हैं, तो उन्हें जमा न करें।",
    "अपनी सीमाएं जानें - क्या आपको लगता है कि आप विश्व भूख को हल कर सकते हैं? थोड़ी देर के लिए ठंडा हो जाएं।",
    "नाश्ते का भंडार करें - बिना नाश्ते के भांग और शराब नेटफ्लिक्स के बिना वाई-फाई की तरह है।"
];

const dontsHindi = [
    "बहुत अधिक मिश्रण न करें - शराब और भांग को मिलाना अच्छा विचार नहीं है।",
    "दार्शनिक न बनें - आप अपने तीसरे पेय के बाद सुकरात नहीं हैं।",
    "लोगों को शॉट्स की चुनौती न दें - आप हार सकते हैं और बेवकूफ दिख सकते हैं।",
    "अपने एक्स को टेक्स्ट न करें - यह कभी भी अच्छा विचार नहीं है, चाहे आप कितने भी चाहें।",
    "यह न भूलें कि आप कहाँ हैं - अपने जूते पहनें!"
];

const DoAndDont = () => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" sx={{ p: 1, textDecoration:"underline" }}>
        Read carefully
      </Typography>
      <Typography variant="h4" gutterBottom>
        Do&rsquo;s and Don&rsquo;ts
      </Typography>
      
      <Button onClick={toggleLanguage} variant="contained" color="primary" sx={{ mb: 2 }}>
        {isHindi ? "Switch to English" : "हिंदी में बदलें"}
      </Button>

      <Typography variant="h6" gutterBottom>
        Do&rsquo;s:
      </Typography>
      <List>
        {(isHindi ? dosHindi : dosEnglish).map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>
        Don&rsquo;ts:
      </Typography>
      <List>
        {(isHindi ? dontsHindi : dontsEnglish).map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DoAndDont;
