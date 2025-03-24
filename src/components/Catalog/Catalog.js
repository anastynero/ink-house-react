import '../../style/App.css';
import React, { useState } from 'react';
import catalogData from '../../mocks/CatalogItems.js';

function Catalog() {
  const [selectedCountry, setSelectedCountry] = useState('france');
  
  const filteredData = catalogData.filter(item => item.country === selectedCountry);

  return(
    <div className='catalog'>
      <div className='container'>
      <div className='catalog-wrapper'>
        <div className='catalog-title'>
         <h2>Репродукции</h2>
          </div>
      <div className="countrySelector">
        <button className="country-btn" onClick={() => setSelectedCountry('france')}>Франция</button>
        <button className="country-btn" onClick={() => setSelectedCountry('germany')}>Германия</button>
        <button className="country-btn" onClick={() => setSelectedCountry('england')}>Англия</button>
      </div>
      </div>
      <div className='items'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="catalogItem">
              <img src={item.image} alt={item.title} />
              <p className='item-author'>{item.author}</p>
              <h3 className='item-title'>{item.title}</h3>
              <p className='item-description'>{item.description}</p>
              <p className='item-price'>{item.price}</p>
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
