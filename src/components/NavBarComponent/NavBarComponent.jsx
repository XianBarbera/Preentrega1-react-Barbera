import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CardWidgetComponent/CardWidgetComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  const imgStyle = {
    maxWidth: "50px",
    height: "auto",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="./public/images/bana.jpg.jpg" alt="Logo" style={imgStyle} />
        <Navbar.Brand>
          <Link to={"/"}>tienda</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;
