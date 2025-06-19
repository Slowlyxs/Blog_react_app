// BasicExample.js
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // 100 ms entre cada incremento

    return () => clearInterval(timer); // Limpieza al desmontar el componente
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Progreso:</h3>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
}

export default BasicExample;
