import React from "react";
import {Card,CardBody,CardText,CardTitle,CardImg, Button} from "reactstrap"

const CartItem=({photo,addCartItems})=>{
    return (
        <Card className="mb-2 mt-1">
            <CardImg 
            top
            height="250"
            width="100%"
            src={photo.tinyImage}
            />
            <CardBody className="text-center">
                <CardTitle>{photo.photoName}</CardTitle>
                <CardText className="secondary">Price: RS{photo.photoPrice}</CardText>
                <Button
                color="success"
                onClick={()=>addCartItems(photo)}
                >Add to cart</Button>
            </CardBody>
        </Card>
    )
}
export default CartItem;