import React,{useState} from "react";
import { ToastContainer,toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import BuyPage from "./Components/BuyPage";

function App() {
const[cartItem,setCartItem]=useState([])
const addCartItems=(item)=>{
    const isAlreadyAdded=cartItem.findIndex(e=>{
      return e.id===item.id
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
  setCartItem(cartItem.filter(cItem=>cItem.id !==item.id))
}
return(
 <div className="App">
  <BuyPage addCartItems={addCartItems}/>
 </div>
  
)
}

export default App;
