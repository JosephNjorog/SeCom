// index.js

const { atlassianJwt } = require('@forge/api');

/**
 * Main handler function for Forge app.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
async function main(req, res) {
  try {
    // Example: Retrieve client key from JWT token
    const clientKey = atlassianJwt.getClientKey();
    
    // Example response
    res.status(200).send(`Hello from Security and Compliance Monitor! Client key: ${clientKey}`);
  } catch (err) {
    // Handle errors
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  main,
};
