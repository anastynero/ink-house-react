import '../../style/App.css';
import React, { useState } from 'react';
import catalogData from '../../mocks/CatalogItems.js';

function Catalog() {
  const [selectedCountry, setSelectedCountry] = useState('france');
  
  const filteredData = catalogData.filter(item => item.country === selectedCountry);

  return(
    <div className='catalog'>
      <div className='container'>
      <div className="countrySelector">
        <button className="country-btn" onClick={() => setSelectedCountry('france')}>Франция</button>
        <button className="country-btn" onClick={() => setSelectedCountry('germany')}>Германия</button>
        <button className="country-btn" onClick={() => setSelectedCountry('england')}>Англия</button>
      </div>
      <div className='items'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="catalogItem">
              <img src={item.image} alt={item.title} />
              <p classname='standard-text'>{item.author}</p>
              <h3>{item.title}</h3>
              <p classname='standard-text'>{item.description}</p>
              <p>{item.price}</p>
              <a href="#" className="btn">В корзину</a>
            </div>
          ))
        ) : (
          <p>Нет данных для выбранной страны.</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Catalog;
