import React from 'react';
import { CContainer, CImage, CRow, CCol } from '@coreui/react';
import { Link } from 'react-router-dom';
import './Circle.css';

export default function Circle({ categories }) {
  const circleStyle = {
    width: '100px', // Adjust circle size
    height: '100px', // Adjust circle size
    borderRadius: '50%', // Make the div round
    backgroundColor: '#e9ecef', // Set background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0', // Adjust margin between circles
    padding: '0',
    marginRight: '0', // Remove right margin
  };

  if (!categories || categories.length === 0) {
    return null; // Return null if categories are undefined or empty
  }

  const chunks = [];
  const chunkSize = 7;
  for (let i = 0; i < categories.length; i += chunkSize) {
    chunks.push(categories.slice(i, i + chunkSize));
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <CContainer style={{ maxWidth: '100%' }}>
        {chunks.map((chunk, index) => (
          <CRow className="justify-content-center" key={index}>
            {chunk.map((category, categoryIndex) => (
              <CCol key={categoryIndex} md="auto" className="text-center">
                <Link to='/categories' style={{textDecoration:"none",listStyleType:"none"}}>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={circleStyle}>
                      <CImage src={category.image} alt={category.title} style={{ maxWidth: '80px', maxHeight: '80px', borderRadius: '50%' }} />
                    </div>
                    <p style={{ textAlign: 'center', margin: '5px 0' }}>{category.name}</p>
                  </div>
                </Link>
              </CCol>
            ))}
          </CRow>
        ))}
      </CContainer>
    </div>
  );
}
