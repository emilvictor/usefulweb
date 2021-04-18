import React from 'react'
import SingleMeal from './SingleMeal'
import "./Meals.css"

function Meals(props) {
    //console.log(props.meals);
    return (
        <div className = "meals-container">
             {props.meals.map((meal,idx) => 
             <SingleMeal meal = {meal} key = {idx} />
            )} 
        </div>
    )
}

export default Meals
