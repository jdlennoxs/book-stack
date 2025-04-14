import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for the frontend
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:5173', // Default Vite dev server port
}));

app.get('/image-proxy', async (req, res) => {
  const imageUrl = req.query.url as string;
  if (!imageUrl) {
    return res.status(400).send('Missing image URL');
  }

  try {
    // Fetch the image as a stream
    const response = await axios.get(imageUrl, {
      responseType: 'stream',
      timeout: 5000, // 5 second timeout
    });

    // Set the correct content type header
    res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
    
    // Add caching headers
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    
    // Pipe the image stream directly to the response
    response.data.pipe(res);
  } catch (error) {
    console.error(`Error proxying image ${imageUrl}:`, error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).send(error.response.statusText);
    } else {
      res.status(500).send('Error fetching image');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Image proxy server running on port ${PORT}`);
}); 