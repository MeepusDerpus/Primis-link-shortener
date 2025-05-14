/**
 * This module provides functionality to generate and manage tokenized URLs, tracking visits as well.
 * I have used a map to store the tokenized URLs and their original counterparts.
 * In a production scenario, this would be replaced with a database or a more robust storage solution.
 * Improvements would include error handling, logging and monitoring.
 */

import { v4 as uuidv4 } from 'uuid';

/**
 * The UrlService class provides methods to generate tokens for URLs, retrieve original URLs, and log visits.
 */
class UrlService {
    private urlMap: Map<string, string>;

    constructor() {
        this.urlMap = new Map();
    }

    /**
     * Generates a token for a given URL, storing the token URL pair.
     * this would write to a DB store in a production scenario.
     * @param url - The original URL to be tokenized
     * @returns The generated token
     */
    public generateToken(url: string): string {
        const token = uuidv4();
        this.urlMap.set(token, url);
        console.log(`Generated token: ${token} for URL: ${url}`);
        return token;
    }

    /**
     * Retrieves the original URL for a given token.
     * This would be a DB call in a production scenario.
     * @param token - The tokenized URL identifier
     * @returns The original URL or undefined if not found
     */
    public getLongUrl(token: string): string | undefined {
        console.log(`Retrieving long URL for token: ${token}`);
        return this.urlMap.get(token);
    }

    /**
     * Logs the visit for a given token.
     * This would be a DB call to an analytics store in a production scenario.
     * Alternatively a separate microservice or queue could be used.
     * @param token - The tokenized URL identifier
     */
    public logVisit(token: string): void {
        console.log(`logging visit for token: ${token}`);
        // Add calls to analytics store here
    }
}

export default UrlService;