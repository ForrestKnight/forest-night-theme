/**
 * Forest Night Theme Demo File
 * This file showcases the ethereal magical colors of the theme
 */

// Comments are in shadow gray with italic styling

import axios from 'axios'; // Strings in ethereal teal
import { useEffect, useState } from 'react'; // Keywords in warm amber
import * as THREE from 'three'; // Variables in moonlight silver

const API_URL = 'https://api.example.com/data'; // Constants in sage green
const MAX_RETRIES = 3; // Numbers in sage green
const DEFAULT_TIMEOUT = 5000; // More numbers  

// Class definition with types in earthy red
class DataProcessor {
  constructor(config) {
    this.apiUrl = API_URL; // Properties in ethereal teal
    this.retries = MAX_RETRIES;
    this.timeout = DEFAULT_TIMEOUT;
    this.isActive = true; // Boolean constants in sage green
  }

  // Function names in mystical purple
  async fetchData(endpoint, options = {}) {
    try {
      const response = await axios.get(`${this.apiUrl}/${endpoint}`, {
        timeout: this.timeout,
        ...options
      });
      
      return response.data;
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
      throw new Error(`API Error: ${error.status}`);
    }
  }

  // Method with various syntax elements showcasing bracket colors
  processResults(data, filters) {
    const results = data
      .filter(item => item.active && item.score > 0.8) // Operators in purple
      .map((item, index) => ({
        id: item.id || `generated-${index}`,
        title: item.title?.trim() || 'Untitled',
        score: Math.round(item.score * 100) / 100,
        tags: item.tags || [],
        createdAt: new Date(item.timestamp)
      }))
      .sort((a, b) => b.score - a.score);

    return results;
  }
}

// React component showing JSX highlighting
function ThemeDemo({ data, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data?.length > 0) {
      console.log(`Processing ${data.length} items`);
    }
  }, [data]);

  return (
    <div className="theme-demo">
      <h1 style={{ color: '#9B59B6' }}>Forest Night Demo</h1>
      <p className="description">
        Showcasing ethereal magic against the deep forest night background
      </p>
      
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <ul>
          {data?.map(item => (
            <li key={item.id} onClick={() => onUpdate(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// CSS-in-JS showing CSS syntax highlighting
const styles = {
  container: {
    backgroundColor: '#1a2125', // Our magical forest night background
    color: '#c9d1d9', // Moonlight silver text
    padding: '20px',
    borderRadius: '8px'
  },
  button: {
    background: 'linear-gradient(45deg, #4ECDC4, #9B59B6)', // Teal to purple gradient
    border: 'none',
    color: 'white',
    fontSize: '16px'
  }
};

// Regular expressions in earthy red and template literals
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

function validateInput(email, phone) {
  const emailValid = EMAIL_REGEX.test(email);
  const phoneValid = phonePattern.test(phone);
  
  return {
    email: emailValid,
    phone: phoneValid,
    message: `Validation ${emailValid && phoneValid ? 'passed' : 'failed'}`
  };
}

// Async/await with error handling showcasing this keyword
async function initializeApp() {
  try {
    const processor = new DataProcessor({
      apiUrl: API_URL,
      timeout: 10000
    });

    const userData = await processor.fetchData('users');
    const processedData = processor.processResults(userData, {
      minScore: 0.5,
      activeOnly: true
    });

    console.log('App initialized successfully');
    return processedData;
  } catch (err) {
    console.error('Initialization failed:', err);
    return [];
  }
}

// Export statement with amber keywords
export { DataProcessor, initializeApp, ThemeDemo, validateInput };
export default ThemeDemo;
