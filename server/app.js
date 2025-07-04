import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://business-iq.vercel.app'],
  credentials: true
}));
app.use(express.json());


// Sample SEO headlines for regeneration
const seoHeadlines = [
  "Why {name} is {location}'s Hidden Gem in 2025",
  "The Ultimate Guide to {name} in {location}",
  "Discover Why {name} is {location}'s Top Choice",
  "What Makes {name} Stand Out in {location}",
  "The Story Behind {name}'s Success in {location}",
  "Why Locals Love {name} in {location}",
  "The Complete {name} Experience in {location}",
  "How {name} Became {location}'s Favorite",
  "The Secret to {name}'s Popularity in {location}",
  "Why {name} is {location}'s Best Kept Secret"
];

// Simulate realistic business data
const generateBusinessData = (name, location) => {
  const baseRating = 3.5 + Math.random() * 1.3; // 3.5 to 4.8
  const rating = Math.round(baseRating * 10) / 10;
  const reviews = Math.floor(Math.random() * 500) + 50; // 50 to 550 reviews
  
  const headlineTemplate = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  const headline = headlineTemplate.replace('{name}', name).replace('{location}', location);
  
  return { rating, reviews, headline };
};

// Routes
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required' 
      });
    }
    
    // Simulate API delay
    setTimeout(() => {
      const data = generateBusinessData(name, location);
      res.json(data);
    }, 800);
    
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required' 
      });
    }
    
    // Simulate API delay
    setTimeout(() => {
      const headlineTemplate = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
      const headline = headlineTemplate.replace('{name}', name).replace('{location}', location);
      
      res.json({ headline });
    }, 600);
    
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});