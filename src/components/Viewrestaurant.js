import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';

function Viewrestaurant() {
    const params = useParams()
    console.log("paramsid",params);
    const [a,setA]=useState([])
//     //to hold the value
    const [allRestaurants, setAllRestaurants] = useState([])
//     //function to call API to getb all restaurent information from 
//     // restaurent.json

    const getRestaurants = async () => {
        await fetch('/restaurants.json')
            .then((data) => 
                data.json()
                    
                // console.log(data);
            ).then((result) => {
                // console.log("resultttttt",result.restaurants);
                setAllRestaurants(result.restaurants)
           
            })

    }

        const Viewrestaurants=allRestaurants.find(item=>item.id==params.id)
console.log(Viewrestaurants);
 
    useEffect(() => {
        getRestaurants()

    }, [])
//     console.log(allRestaurants);

//     //

    return (

<>
    {
    Viewrestaurants?(
            <Row>
                 <Col>
                 <Image src={Viewrestaurants.photograph} fluid/>
                 </Col>
                 <Col>
                 <p>ID:{Viewrestaurants.id}</p>
                 <h1>Name:{Viewrestaurants.name}</h1>
                 <h5>Neighbourhood:{Viewrestaurants.neighbourhood}</h5>
                 <h5>address:{Viewrestaurants.address}</h5>
                 <h5>cuisine_type:{Viewrestaurants.cuisine_type}</h5>

                 <Restoperation operate={Viewrestaurants.operating_hours} />

                 </Col>
            </Row>
    ):'null'

    }
</>


    )


}

export default Viewrestaurant