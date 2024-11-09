# React Project for HTML Conversion

In this project, I created a basic static website using vanilla HTML and CSS, and then rebuilt it using React to demonstrate the conversion of a simple HTML page to a React application. The React project is fully compiled into static files, making it accessible without needing a development server.

**Note:** My goal here was not to achieve pixel-perfect accuracy with the original site layout. Spending time to match exact fonts and pixel measurements wouldn’t add any valuable learning in this case.

### Project Structure

- **Root Directory**: Contains the vanilla HTML and CSS version of the site.
- **`screenshots` Folder**: Contains screenshots for visual reference of the completed work without needing to launch a browser.
- **`react` Folder**: Holds the source code for the React version of the project.
- **`dist` Folder**: Contains the compiled static build of the React app, ready to be used as a standalone project.

### How to Run the Project

1. **Vanilla HTML**: Open the HTML file in the root directory directly in your browser.
2. **React Project (Development Mode)**:
   - Navigate to the `react` folder.
   - Run `npm install` to install dependencies.
   - Run `npm start` to launch the development server.
3. **React Project (Static Build)**:
   - In the root directory, the `dist` folder contains the compiled static files for the React project.
   - Open `dist/index.html` directly in the browser, or serve it through any static file server (like GitHub Pages or Netlify).

### Dependencies Used

The following modules were used to set up and build the React project:

```
├── @babel/core@7.26.0
├── @babel/preset-env@7.26.0
├── @babel/preset-react@7.25.9
├── babel-loader@9.2.1
├── css-loader@7.1.2
├── html-webpack-plugin@5.6.3
├── react@18.3.1
├── react-dom@18.3.1
├── react-router-dom@6.28.0
├── style-loader@4.0.0
├── webpack-cli@5.1.4
├── webpack-dev-server@5.1.0
└── webpack@5.96.1
```

---

Thank you for reviewing this project! Wishing you health and happiness.