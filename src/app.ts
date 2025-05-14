/**
 * Primis Link Shortener & Tracking Task Service
 * 
 * This application provides a simple proof-of-concept for:
 *  - Parsing HTML and replacing long URLs with short, tokenized tracking URLs
 *  - Redirecting short URLs back to their original long URLs
 * 
 * Endpoints:
 *  - POST /parse: Accepts raw HTML, replaces URLs with tokens, and returns the modified HTML
 *  - GET /track/:token: Redirects to the original URL for a given token
 *  - GET /: Health check endpoint
 */

import express from 'express';
import { parseHtml } from './htmlProcessor';
import UrlService  from './urlService'; 

const app = express();
const PORT = 3000;

app.use(express.json());

const urlService = new UrlService();

/**
 * Health check endpoint.
 * @route GET /
 * @returns {string} "Hello World"
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});

/**
 * Parses HTML and replaces URLs with tokenized tracking URLs.
 * @route POST /parse
 * @body Raw HTML string
 * @returns {string} Modified HTML with tokenized URLs
 */
app.post('/parse', express.text() , (req, res) => {
    const html = req.body;
    const parsedHtml = parseHtml(html, urlService);
    console.log('Parsed HTML:', parsedHtml);
    res.send(parsedHtml);
});

/**
 * Redirects to the original URL for a given token.
 * @route GET /track/:token
 * @param {string} token - The tokenized URL identifier
 * @returns {302} Redirect to the original URL, or 404 if not found
 */
app.get('/track/:token', (req, res) => {
    const { token } = req.params;
    console.log('Received token:', token);
    const originalUrl = urlService.getLongUrl(token);
    console.log('Original URL:', originalUrl);
    if (originalUrl) {
        urlService.logVisit(token); // for analytics purposes
        res.redirect(originalUrl);
    } else {
        console.log('Token not found:', token);
        res.status(404).send('URL not found');
    }
});

// In hindsight this app file would be the urlService entrypoint, and the urlService class would be a controller for links/analytics
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
