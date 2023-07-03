import React from "react";
import { Container,ListGroup,ListGroupItem,Button,Card,CardHeader,CardBody,CardFooter,Row,Col } from "reactstrap";

//conditional rendering
//For signUp and signIn show appropriate buttons.

const Cart=({cartItem,removeItem,buyNow})=>{
    let amount=0;
    cartItem.forEach(element => {
        amount=parseFloat(amount)+parseFloat(element.photoPrice)
    });
 return (
    <Container fluid>
        <h1 className="text-success">Your Cart</h1>
        <ListGroup>
            {cartItem.map(item=>(
                <ListGroupItem key={item.photoId}>
                    <Row>
                        <Col>
                            <img height="80" src={item.tinyImage}/>
                        </Col>
                        <Col className="text-center">
                            <div className="text-primary">
                                {item.photoName}
                            </div>
                            <span>{item.photoPrice}</span>
                            <Button color="danger"
                            onClick={()=>removeItem(item)}>Remove</Button>
                        </Col>
                    </Row>
                </ListGroupItem>              
            ))}
        </ListGroup>
        {cartItem.length>=1?(
            <Card className="text-center mt-3">
                <CardHeader>
                    Grand total
                </CardHeader>
                <CardBody>
                Your amount for {cartItem.length} products is {amount}
                </CardBody>
                <CardFooter>
                    <Button 
                    color="success"
                    onClick={buyNow}>Purchase</Button>
                </CardFooter>
            </Card>
        ):(
            <h1 className="text-warning">Cart is Empty</h1>
        )}
    </Container>
 )
}
export default Cart;