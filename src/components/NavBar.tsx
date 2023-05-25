import { Container, Nav, Navbar, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function NavBar () {
 
    const {openCart, cartQuantity} = useShoppingCart();

    return (
        <Navbar sticky='top' className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={NavLink} to={'/store'}>Store</Nav.Link>

                </Nav>


                <Button onClick={openCart} style={{width: '3rem', height: '3rem'}}>


                    {cartQuantity}
                </Button>

            </Container>
        </Navbar>
    )
}