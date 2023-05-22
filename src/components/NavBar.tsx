import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function NavBar () {


    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={NavLink} to={'/store'}>Store</Nav.Link>

                </Nav>

            </Container>
        </Navbar>
    )
}