import React from 'react'
import { useState, useEffect } from "react"

import { useParams } from 'react-router-dom'

function Viewrest() {
    const params = useParams()
    console.log(params.id);
        //to hold the value
        const [allRestaurants, setRestaurants] = useState([])
        //function to call API to getb all restaurent information from 
        // restaurent.json
    
        const getRestaurants = async () => {
            await fetch('/restaurants.json')
                .then((data) => 
                    data.json()
                        
                    // console.log(data);
                ).then((result) => {
                    // console.log(result);
                    setRestaurants(result.restaurants)
    
                })
        }
    
        useEffect(() => {
            getRestaurants()
        }, [])
        console.log(allRestaurants);

        const view=allRestaurants.find(item=>item.id==params.id)
        console.log(view);
       

    return (
    <div>Viewrest</div>
  )
}

export default Viewrest