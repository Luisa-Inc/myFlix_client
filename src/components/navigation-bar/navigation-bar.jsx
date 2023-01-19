import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          luisaflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && <Nav.Link href="/">Movies</Nav.Link>}
            {isAuth() && <Nav.Link href={`/users/${user}`}>Profile</Nav.Link>}
            {isAuth() && (
              <Button variant="link" onClick={onLoggedOut}>
                Logout
              </Button>
            )}
            {!isAuth() && <Nav.Link href="/">Login</Nav.Link>}
            {!isAuth() && <Nav.Link href="/register">Signup</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
