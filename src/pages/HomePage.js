import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CabinetCard from '../components/CabinetCard';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [cabinets] = useState([
    {
      id: 'tool',
      name: 'Tool Cabinet',
      image: '/assets/tool-cabinet.jpg'
    },
    {
      id: 'paint',
      name: 'Paint Cabinet',
      image: '/assets/paint-cabinet.jpg'
    },
    {
      id: 'holiday',
      name: 'Holiday Decorations',
      image: '/assets/holiday-cabinet.jpg'
    }
  ]);

  const handleCabinetClick = (cabinetId) => {
    navigate(`/cabinet/${cabinetId}`);
  };

  return (
    <div className="home-page">
      <h1>My Garage Cabinets</h1>
      <div className="cabinet-list">
        {cabinets.map(cabinet => (
          <CabinetCard
            key={cabinet.id}
            name={cabinet.name}
            image={cabinet.image}
            onClick={() => handleCabinetClick(cabinet.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;