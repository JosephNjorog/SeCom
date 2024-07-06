export { handler } from './resolvers';
// src/index.js

// Example of main serverless function handler
exports.main = async (req, res) => {
    // Implement your logic here
    res.status(200).json({ message: 'Hello from Security and Compliance Monitor!' });
  };
  