import { useState, useEffect } from 'react';
import './CabinetView.css';

const CabinetView = ({ cabinetData, initialDrawerId }) => {
  const [selectedDrawer, setSelectedDrawer] = useState(null);

  // Handle initial drawer selection from URL
  useEffect(() => {
    if (initialDrawerId && cabinetData?.drawers) {
      const drawer = cabinetData.drawers.find(d => d.id === initialDrawerId);
      if (drawer) setSelectedDrawer(drawer);
    }
  }, [initialDrawerId, cabinetData]);

  const handleDrawerClick = (drawer) => {
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
              onClick={() => handleDrawerClick(drawer)}
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