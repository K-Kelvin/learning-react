import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router";

export default function CustomNavbar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    My Website
                </Navbar.Brand>

                <Nav className="me-auto">
                    {/* NavLink makes it easy to show active states */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/posts"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Posts
                    </NavLink>

                    {/* <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/aboutus" className="nav-link">About Us</Link> */}

                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                    {/* <Nav.Link href="/aboutus">About Us</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    );
}
