import React, { useEffect } from 'react'
import {useState} from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistAction } from '../Action/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restuarantlist() {
    //to hold the value
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to getb all restaurent information from 
    // restaurent.json

    // const getRestaurants=async(    )=>{
    //   await  fetch('/restaurants.json')
    //   .then((data)=>{
    //     data.json()
    //     .then((result)=>{
    //         // console.log(result);
    //         setRestaurants(result.restaurants)

    //     })
    //     // console.log(data);
    //   })
    // }
const dispatch=useDispatch()
const result=useSelector(state=>state.restaurantReducer)
console.log(result);
const {restaurantList}=result
    // console.log(allRestaurants);
    useEffect(()=>{
        // getRestaurants()
        dispatch(RestaurantlistAction())
      },[])

  return (
    <Row>
    
      {
        restaurantList.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Restaurantcards restaurant={item}/>
          </Col>
          // <h4>{item.name}</h4>
        ))
      }
    
    </Row>
  )
}

export default Restuarantlist