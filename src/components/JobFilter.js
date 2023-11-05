import React from 'react'

const jobFilter = () => {
    const { SearchClient, AzureKeyCred } = require("@azure/search-documents");

    // Define your Azure Cognitive Search service information
    const searchServiceName = "your-search-service-name";
    const indexName = "your-index-name";
 const apiKey = "34c005ae79904a52954d09445643780b"; // Your API key
    
    // Initialize the SearchClient
    const searchClient = new SearchClient(searchServiceName, indexName, new AzureKeyCred(apiKey));
    
    // Define a function to search for specific keywords
    async function searchForKeywords(keywords) {
      try {
        const searchResults = await searchClient.search(keywords);
    
        if (searchResults.results && searchResults.results.length > 0) {
          // Iterate through the search results to find CVs that match your criteria
          for (const result of searchResults.results) {
            console.log(`CV ID: ${result["@search.id"]}`);
            // You can access other CV properties as needed
          }
        } else {
          console.log("No matching CVs found.");
        }
      } catch (error) {
        console.error("Error searching for CVs:", error);
      }
    }
    
    // Example usage
    const keywordsToSearch = "skills:programming AND experience:3+ years";
    searchForKeywords(keywordsToSearch);
    
}
export default jobFilter

