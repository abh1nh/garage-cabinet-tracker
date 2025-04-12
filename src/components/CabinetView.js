import { useState } from 'react';
import './CabinetView.css';

const CabinetView = ({ cabinetData }) => {
  // In CabinetView.js
const [selectedDrawer, setSelectedDrawer] = useState(initiallySelectedDrawer || null);
  
  const handleDrawerClick = (drawer, e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedDrawer(drawer);
  };

  if (!cabinetData) return <div>Loading cabinet data...</div>;

  return (
    <div className="cabinet-view">
      <div className="cabinet-visual">
        <img 
          src={cabinetData.image} 
          alt={cabinetData.name} 
          className="cabinet-image"
        />
        
        <div className="drawer-hotspots">
          {cabinetData.drawers.map((drawer) => (
            <div
              key={drawer.id}
              className={`drawer-hotspot drawer-${drawer.id}`}
              onClick={(e) => handleDrawerClick(drawer, e)}
              style={{
                position: 'absolute',
                top: `${drawer.position.top}%`,
                left: `${drawer.position.left}%`,
                width: `${drawer.position.width}%`,
                height: `${drawer.position.height}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="drawer-contents-panel">
        {selectedDrawer ? (
          <>
            <h3>{selectedDrawer.name}</h3>
            <ul>
              {selectedDrawer.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Click on a drawer to view its contents</p>
        )}
      </div>
    </div>
  );
};

export default CabinetView;