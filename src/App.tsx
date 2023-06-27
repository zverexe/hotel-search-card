import React from 'react';
import './App.scss';

import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import calendarIcon from './assets/date-calendar.svg';
import personsIcon from './assets/user-users.svg';
import flagIcon from './assets/flags-es.svg';

const data = [
  {
    id: 1,
    title: 'Can Pastilla, Mallorca, Spanien',
    date: '2 juni – 9 juni',
    persons: '2 vuxna, 2 barn',
    locationImg: image1,
    quantity: '141',
  },
  {
    id: 2,
    title: 'Playa Blanca, Lanzarote, Kanarieöarna, Spanien',
    date: '2 juni – 9 juni',
    persons: '2 vuxna, 2 barn',
    locationImg: image2,
    quantity: '42',
  },
];

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <h1>Senaste sökningar</h1>
        <div className="row">
          {data.map((item) => (
            <div className="search-card" key={item.id}>
              <div className="search-card--image">
                <picture>
                  <source
                    srcSet={`${item.locationImg} 767w, ${item.locationImg} 1199w`}
                    sizes="(max-width: 767px) 767px,
             (max-width: 1199px) 1199px"
                  />
                  <img src={item.locationImg} alt="location" />
                </picture>
              </div>
              <div className="search-card--footer">
                <div className="flex-row search-card--destination">
                  <img src={flagIcon} alt="country" />
                  <h3>{item.title}</h3>
                </div>
                <div className="flex-row search-card--info">
                  <img src={calendarIcon} alt="dates" />
                  <p>{item.date}</p>
                </div>
                <div className="flex-row search-card--info persons">
                  <img src={personsIcon} alt="persons" />
                  <p>{item.persons}</p>
                </div>
                <div className="search-card--button">
                  <button className="primary-button">View {item.quantity} hotels</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
