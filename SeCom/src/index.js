// src/index.js

// Example of main serverless function handler
exports.main = async (req, res) => {
    try {
      // Example of integrating with Jira Cloud API (fetching user info)
      const userResponse = await fetch('https://api.atlassian.com/ex/jira/{cloudid}/rest/api/3/myself', {
        headers: {
          Authorization: `Bearer ${req.context.token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user information');
      }
  
      const userData = await userResponse.json();
  
      // Example response to frontend
      res.status(200).json({ message: 'Successfully fetched user info', user: userData });
    } catch (error) {
      console.error('Error fetching user info:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  