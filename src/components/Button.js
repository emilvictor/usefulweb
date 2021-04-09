const Button = (props) => {

    function fetchMeals() {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(res => props.setMeals(res.meals))
    }

    return(
        <button onClick = {fetchMeals} >Click for a meal</button>

    )
}


export default Button