// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Image Cards</h1>
      <div className="card-container">
        {images.map((image) => (
          <Card key={image.id} imageUrl={image.url} title={image.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
