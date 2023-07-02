import React,{useState} from "react";
import { ToastContainer,toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import { Container,Row,Col } from "reactstrap";

import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {
const[cartItem,setCartItem]=useState([])
const addCartItems=(item)=>{
    const isAlreadyAdded=cartItem.findIndex(e=>{
      return e.photoId===item.photoId
    })
    if(isAlreadyAdded !== -1){
      toast("Item is already added",{
        type:"error"
      })
    }
    
      setCartItem([...cartItem,item])
    
    
}

const buyNow=()=>{
  setCartItem([])
  toast("Purchase sucessfull",{
    type:"success"
  })
}

const removeItem=(item)=>{
  setCartItem(cartItem.filter(cItem=>cItem.photoId !==item.photoId))
}
return(
<Container fluid>
  <ToastContainer/>
  <Row>
    <Col md="8">
      <BuyPage addCartItems={addCartItems}/>
    </Col>

    <Col md="4">
      <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/>
    </Col>
  </Row>
</Container>
  
)
}

export default App;
