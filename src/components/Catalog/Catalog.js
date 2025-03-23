import React, { useState } from 'react';
import catalogData from '../../mocks/CatalogItems.js';

function Catalog() {
  const [selectedCountry, setSelectedCountry] = useState('france');
  
  const filteredData = catalogData.filter(item => item.country === selectedCountry);

  return(
    <div className='catalog'>
      <div className="countrySelector">
        <button onClick={() => setSelectedCountry('france')}>Франция</button>
        <button onClick={() => setSelectedCountry('germany')}>Германия</button>
        <button onClick={() => setSelectedCountry('england')}>Англия</button>
      </div>
      <div className='items'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="catalogItem">
              <img src={item.image} alt={item.title} />
              <p>{item.author}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Нет данных для выбранной страны.</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
