const DrawerItem = ({ drawer, onClick, isSelected }) => {
    return (
      <div 
        className={`drawer-item ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
      >
        {drawer.name}
      </div>
    );
  };
  
  export default DrawerItem; // Make sure this is present