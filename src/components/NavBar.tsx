import { Container, Nav, Navbar, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function NavBar () {


    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={NavLink} to={'/store'}>Store</Nav.Link>

                </Nav>


                <Button style={{width: '3rem', height: '3rem'}}></Button>

            </Container>
        </Navbar>
    )
}