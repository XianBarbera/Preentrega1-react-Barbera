import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CardWidgetComponent/CardWidgetComponent";

const NavBarComponent = () => {
  const imgStyle = {
    maxWidth: "50px",
    height: "auto",
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="./public/images/bana.jpg.jpg" alt="Logo" style={imgStyle} />
        <Navbar.Brand href="#home" style={{ color: "red" }}>
          Japi Beer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ipa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Roja</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;
