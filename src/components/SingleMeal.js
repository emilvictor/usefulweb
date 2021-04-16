import React from 'react'

function SingleMeal(props) {
    const meal = props.meal
    const ingredients = Object.keys(meal).filter(key=>key.includes('strIngredient'))
    console.log(ingredients);
    return (
        <div>
            <h3>{meal.strMeal}</h3> 
           <img src={meal.strMealThumb} alt="food"/>
           <div className="ingredients">
               {ingredients.map(ingredient=><p>{meal[ingredient]}</p>)}
                </div>
        </div>
    )
}

export default SingleMeal
