import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './style/theme';
import { StudiesContextProvider } from './state/StudiesContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StudiesContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StudiesContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
