import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error boundary for catching React errors
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("Fatal: Root element not found in document!");
      document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Root element not found</div>';
      return;
    }
    
    console.log("Mounting React app to DOM...");
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React app mounted successfully");
  } catch (error) {
    console.error("Fatal error rendering application:", error);
    // Show visible error on screen for easy debugging
    document.body.innerHTML = `
      <div style="color: red; padding: 20px; font-family: sans-serif;">
        <h2>Application Error</h2>
        <p>There was an error rendering the application:</p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">${error?.toString()}</pre>
      </div>
    `;
  }
};

// Execute with a small delay to ensure DOM is ready
setTimeout(renderApp, 100);

// Also try immediate execution
renderApp();
