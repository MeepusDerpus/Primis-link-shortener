/**
 * This module provides functionality to parse raw HTML and replace URLs with tokenized tracking URLs.
 * I would propose moving ownership of generating tokens here to decouple the URL service from the HTML parsing.
 * This would allow for a more modular design, where the HTML parsing logic is separate from the URL generation logic.
 * This also allows better scalability and maintainability of the codebase.
 * Current improvements would be hardening, error handling, and obervability tools (e.g. logging, metrics).
 */

import UrlService from "./urlService";

/**
 * Parses raw HTML and replaces URLs with tokenized tracking URLs.
 * @param rawHtml - The raw HTML string to be parsed
 * @param urlService - An instance of UrlService for generating tokens
 * @returns The modified HTML with tokenized URLs
 */
export function parseHtml(rawHtml: string, urlService: UrlService ): string {
    console.log('Parsing raw HTML:', rawHtml, '\n');
    
    // I've decided to use a regex to find URLs in the HTML & iterate over them
    const urlRegex = /(https?:\/\/[^"]+)/g;
    let tokenizedHtml = rawHtml;

    const urls = rawHtml.match(urlRegex);
    if (urls) {
        urls.forEach(url => {
            const token = urlService.generateToken(url);
            tokenizedHtml = tokenizedHtml.replace(url, "http://localhost:3000/track/"+token); // note Token key doesn't include URL, this is a discrepancy to be discussed.
        });
    }
    return tokenizedHtml;
}


