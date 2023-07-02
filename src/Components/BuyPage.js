import React,{useState,useEffect} from "react";
import axios from "axios";

import { faker } from '@faker-js/faker';
import {Container,Col,Row} from "reactstrap"
import CartItem from "./CartItem";

const API_KEY="RUh2PvhbswOFrR73aGp3Zf0Co7k8DHdoX10KFye8a5HmMr0BvaRS0FTC"
const url="https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

// const localURL="https://api.jsonserve.com/C9rlAj";

const BuyPage=({addCartItems})=>{
    const[photos,setPhotos]=useState([])

    const fetchPhotos= async ()=>{
        const {data}= await axios.get(url,{
         headers:{
            Authorization:API_KEY
         }
        })
        const {photos}=data;
       
        const allPhotos=photos.map(photo=>(
            {
                photoId:faker.string.uuid(),
                tinyImage:photo.src.tiny,
                smallImage:photo.src.medium,
                photoName:faker.word.sample(), //React functions cannot be used as React children
                photoPrice:faker.commerce.price(),
            }
        ))
        setPhotos(allPhotos)
        // console.log(allPhotos);
    }
    // const fetchPhotos= async ()=>{
    //     const {data}= await axios.get(localURL)
    //     const {photos}=data;
    //     console.log(photos);
    // };

    useEffect(()=>{
        fetchPhotos();
    },[])

return (
    <Container fluid>
        <h1 className="text-center text-success">Add Page</h1>
        <Row>
            {photos.map(photo=>(
                <Col md={4} key={photo.photoId}>
                   <CartItem photo={photo} addCartItems={addCartItems}/>
                </Col>
            ))}
        </Row>
    </Container>
)
}

export default BuyPage;