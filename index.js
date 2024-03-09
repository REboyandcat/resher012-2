// Import necessary libraries or modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route to fetch cryptocurrency news
app.get('/news', async (req, res) => {
    try {
        // Fetch cryptocurrency news from an API (replace this with your actual data source)
        const response = await axios.get('https://api.cryptonews.com/v1/articles');
        const newsData = response.data;

        // Send news data as JSON response
        res.json(newsData);
    } catch (error) {
        console.error('Error fetching cryptocurrency news:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CryptoInsights server is running on port ${PORT}`);
});
