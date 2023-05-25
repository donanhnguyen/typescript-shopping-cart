import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";


type StoreItemProps = {
    id: number,
    name: string,
    imgUrl: string,
    price: number
}


export function StoreItem ({id, price, name, imgUrl}: StoreItemProps) {

    const {getItemQuantity, increaseCart, decreaseCart, removeFromCart} = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <Card>
            <Card.Img variant='top' src={imgUrl} height='200px' width='420px' style={{objectFit: 'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className="fs-2">{name}</span>
                    <span className="ms-2">${price}</span>

                </Card.Title>

                <div className="mt-auto">
                    { quantity === 0 ?
                      <Button onClick={()=> increaseCart(id)} className="w-100">+ Add to Cart</Button>
                      : 
                      <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap: '.5rem'}}>
                            <Button onClick={()=> decreaseCart(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity} </span>
                                in cart
                            </div>
                            
                            <Button onClick={()=> increaseCart(id)}>+</Button>
                        </div>
                            <Button onClick={()=> removeFromCart(id)} variant='danger'>Remove</Button>
                      </div>
                    }
                </div>

            </Card.Body>

        </Card>
    )

}