// src/resolvers/index.js

// Example resolver function
exports.resolver = async (req, context) => {
  try {
    // Example of integrating with Jira Cloud API (fetching issue count)
    const issueResponse = await fetch('https://api.atlassian.com/ex/jira/{cloudid}/rest/api/3/search?jql=assignee=currentuser()', {
      headers: {
        Authorization: `Bearer ${context.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!issueResponse.ok) {
      throw new Error('Failed to fetch issues');
    }

    const issueData = await issueResponse.json();

    // Example response to frontend
    return { data: issueData };
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw new Error('Failed to fetch issues');
  }
};
