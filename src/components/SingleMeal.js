import React from 'react'
import "./SingleMeal.css";

function SingleMeal(props) {
    const meal = props.meal
    let ingredients = Object.keys(meal).filter(key=>key.includes('strIngredient'));
    ingredients = ingredients.filter(ingredient => meal[ingredient] !== "");
    return (
        <div className = "single-meal">
            <h2>{meal.strMeal}</h2> 
           <img src={meal.strMealThumb} alt="food"/>
            <div className="ingredients">
                <h2>Ingredients</h2>
               {ingredients.map((ingredient, idx)=><p key={idx}>{meal[ingredient]}</p>)}
            </div> 
        </div>
    )
}

export default SingleMeal
