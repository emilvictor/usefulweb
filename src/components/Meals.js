import React from 'react'
import SingleMeal from './SingleMeal'

function Meals(props) {
    console.log(props.meals);
    return (
        <div>
            {props.meals.map((meal,idx) => 
             <SingleMeal meal = {meal} key = {idx} />
            )}
        </div>
    )
}

export default Meals
