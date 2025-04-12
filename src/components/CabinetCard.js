const CabinetCard = ({ name, image, onClick }) => {
    return (
      <div className="cabinet-card" onClick={onClick}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </div>
    );
  };
  
  export default CabinetCard; // Make sure this is present