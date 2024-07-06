# Security and Compliance Monitor - Forge App for Jira Cloud

This Forge app helps organizations monitor and ensure security and compliance within their Jira Cloud instances. It provides real-time alerts, compliance reports, and integrates seamlessly with Jira's ecosystem.

## Project Structure

```
.
├── README.md              # Project overview and setup instructions
├── manifest.yml           # Forge app manifest defining app configuration
├── index.js               # Entry point for Forge app serverless functions
├── static/                # Static assets (e.g., HTML files, images)
│   └── index.html         # Example HTML file for Forge app interface
└── functions/             # Serverless functions (if using TypeScript, this would be 'src/')
    └── main.js            # Example serverless function file (JavaScript)
```

### File Descriptions

manifest.yml: Describes your app. This file contains the name and ID of the app, the app permissions, and the modules the app uses. To learn more about the manifest.yml file, see Forge manifest documentation.
package.json: The app’s Node.js metadata. See the Node documentation for more information.
package-lock.json: Records the version of the app’s dependencies.
README.md: Information about the app. We recommend updating this as you change the behavior of the app.
src/frontend/index.jsx: Where you write the application with which the user interacts directly.
src/resolvers/index.js: Where you write backend functions (resolver functions) for your app. To learn more about resolvers, see the Custom UI Resolver documentation.


## Getting Started

Follow these steps to set up and deploy your Forge app for Jira Cloud:

### Prerequisites

1. **Forge CLI**: Install the Forge CLI for local development and deployment.
   ```sh
   npm install -g @forge/cli
   ```

2. **Jira Cloud Account**: Access to a Jira Cloud instance for testing and deployment.

### Local Development

1. **Initialize Forge App**: Set up your Forge app project.
   ```sh
   forge create
   ```

2. **Develop Locally**: Use `forge tunnel` to test your app locally with live Jira Cloud data.
   ```sh
   forge tunnel
   ```

3. **Deploy**: Deploy your app to the Atlassian Forge platform.
   ```sh
   forge deploy
   ```

### Usage

Once deployed, access your Forge app within Jira Cloud and configure permissions and integrations as defined in `manifest.yml`.

### Additional Resources

- [Atlassian Forge Documentation](https://developer.atlassian.com/platform/forge/)
- [Forge CLI Reference](https://developer.atlassian.com/platform/forge/forge-cli-reference/)

### License

This project is licensed under the [MIT License](LICENSE).
