import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CabinetView from '../components/CabinetView';

const CabinetPage = () => {
  const { cabinetId } = useParams();
  const [searchParams] = useSearchParams();
  const [cabinetData, setCabinetData] = useState(null);
  const [initiallySelectedDrawer, setInitiallySelectedDrawer] = useState(null);

  useEffect(() => {
    // Mock data with precise drawer positions
    const mockData = {
      tool: {
        id: 'tool',
        name: 'Tool Cabinet',
        image: '/assets/tool-cabinet-open.jpg',
        drawers: [
          {
            id: 'top',
            name: 'Top Drawer',
            items: ['Hammer', 'Screwdrivers', 'Pliers'],
            position: { 
              top: 15, 
              left: 5, 
              width: 90, 
              height: 20 
            }
          },
          {
            id: 'middle',
            name: 'Middle Drawer',
            items: ['Wrenches', 'Tape measure', 'Level'],
            position: { 
              top: 40, 
              left: 5, 
              width: 90, 
              height: 20 
            }
          },
          {
            id: 'bottom',
            name: 'Bottom Drawer',
            items: ['Power drill', 'Saw', 'Sandpaper'],
            position: { 
              top: 65, 
              left: 5, 
              width: 90, 
              height: 20 
            }
          }
        ]
      },
      // Add other cabinets as needed
      paint: {
        id: 'paint',
        name: 'Paint Cabinet',
        image: '/assets/paint-cabinet.jpg',
        drawers: [
          // ... drawer definitions
        ]
      }
    };

    const data = mockData[cabinetId];
    setCabinetData(data);

    // Handle drawer deep linking from URL
    const drawerId = searchParams.get('drawer');
    if (drawerId && data) {
      const drawer = data.drawers.find(d => d.id === drawerId);
      if (drawer) {
        setInitiallySelectedDrawer(drawer);
      }
    }
  }, [cabinetId, searchParams]);

  if (!cabinetData) {
    return <div className="loading">Loading cabinet...</div>;
  }

  return (
    <div className="cabinet-page">
      <h1>{cabinetData.name}</h1>
      <CabinetView 
        cabinetData={cabinetData} 
        initiallySelectedDrawer={initiallySelectedDrawer}
      />
    </div>
  );
};

export default CabinetPage;