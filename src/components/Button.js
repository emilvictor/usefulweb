const Button = (props) => {

    function fetchMeals() {
        fetch('www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => props.setMeals(res.meals))
    }

    return(
        <button className='btn' onClick = {fetchMeals} >Click for a meal</button>

    )
}


export default Button