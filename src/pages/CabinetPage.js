import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CabinetView from '../components/CabinetView';

const CabinetPage = () => {
  const { cabinetId } = useParams();
  const [searchParams] = useSearchParams();
  const [cabinetData, setCabinetData] = useState(null);

  useEffect(() => {
    const mockData = {
      tool: {
        id: 'tool',
        name: 'Tool Cabinet',
        image: '/assets/tool-cabinet-open.jpg',
        drawers: [
          {
            id: '01',
            name: 'Drawer 01',
            items: ['Hammer', 'Screwdrivers', 'Pliers'],
            position: { top: 20, left: 5, width: 18, height: 25 }
          },
          {
            id: '02',
            name: 'Drawer 02',
            items: ['Wrenches', 'Tape measure', 'Level'],
            position: { top: 18, left: 27, width: 18, height: 27 }
          },
          {
            id: '03',
            name: 'Drawer 03',
            items: ['Power drill', 'Saw', 'Sandpaper'],
            position: { top: 45, left: 5, width: 90, height: 10 }
          },
          {
            id: '04',
            name: 'Drawer 04',
            items: ['Power drill', 'Saw', 'Sandpaper'],
            position: { top: 60, left: 5, width: 90, height: 10 }
          },
          {
            id: '05',
            name: 'Drawer 05',
            items: ['Power drill', 'Saw', 'Sandpaper'],
            position: { top: 75, left: 5, width: 90, height: 10 }
          },
          {
            id: '06',
            name: 'Drawer 06',
            items: ['Power drill', 'Saw', 'Sandpaper'],
            position: { top: 90, left: 5, width: 90, height: 10 }
          }
        ]
      }
    };

    const data = mockData[cabinetId];
    setCabinetData(data);
  }, [cabinetId]);

  if (!cabinetData) return <div>Loading...</div>;

  return (
    <div className="cabinet-page">
      <h1>{cabinetData.name}</h1>
      <CabinetView 
        cabinetData={cabinetData}
        initialDrawerId={searchParams.get('drawer')} 
      />
    </div>
  );
};

export default CabinetPage;