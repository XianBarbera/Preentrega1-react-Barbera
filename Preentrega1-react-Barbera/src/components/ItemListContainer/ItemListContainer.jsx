const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    fonSize: "3rem",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  };

  return <div style={greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;
