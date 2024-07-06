// src/frontend/index.jsx

import React, { useEffect, useState } from 'react';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch user info when component mounts
    fetchUserInfo();
    // Fetch issues data when component mounts
    fetchIssues();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch('/api/main', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      const userData = await response.json();
      setUserInfo(userData.user);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const fetchIssues = async () => {
    try {
      const response = await fetch('/api/resolver', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch issues');
      }

      const issuesData = await response.json();
      setIssues(issuesData.data.issues);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  return (
    <div>
      <h1>Security and Compliance Monitor</h1>
      <div>
        {userInfo ? (
          <div>
            <h2>User Information</h2>
            <p>Name: {userInfo.displayName}</p>
            <p>Email: {userInfo.emailAddress}</p>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
      <div>
        <h2>Issues Assigned to You</h2>
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>{issue.fields.summary}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
