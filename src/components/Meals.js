import React from 'react'
import SingleMeal from './SingleMeal'

function Meals(props) {
    return (
        <div>
            {props.meals.map(meal => {
            <SingleMeal/>
            })}
        </div>
    )
}

export default Meals
