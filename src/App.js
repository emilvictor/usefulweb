import Header from './components/Header'
import Button from './components/Button'
import {useState} from "react";
import Meals from './components/Meals'
import "./App.css";

function App() {
  const [meals, setMeals] = useState([])

  return (
    <div className='container'>
      <Header/>
      <Button setMeals = {setMeals}/>
      <Meals meals = {meals} />

    </div>
  );
}

export default App;
