import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function BasicExample() {
    let location = useLocation();
    useEffect(() => {
        //console.log(location)
    }, [location]);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'fixed', width: '100vw'}}>
            <Container>
                <Navbar.Brand to="/"><Link className={`nav-link ${location.pathname === "/" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/">TEST SCRIPTS FOR INTERVIEW</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                      

                        <Link className={`nav-link ${location.pathname === "/lazyload" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/lazyload">Lazy Loading</Link>

                        <Link className={`nav-link ${location.pathname === "/photospagination" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/photospagination">Photos Pagination</Link>

                        <Link className={`nav-link ${location.pathname === "/customhooks" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/customhooks">Custom Hooks</Link>

                        <Link className={`nav-link ${location.pathname === "/useRef" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/useRef">UseRef</Link>

                        <Link className={`nav-link ${location.pathname === "/interviewQ&A" ? "active p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" : ""}`} aria-current="page" to="/interviewQ&A">InterviewQuestions</Link>

                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;