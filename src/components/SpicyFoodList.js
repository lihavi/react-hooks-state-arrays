import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
    
}
    console.log(newFood);
  }
  function handleLiClick(id){
    
    const newFoodArray = foods.map((food)=>{
      if(food.id===id){
        return {
          ...food, heatLevel: food.heatLevel +1
        }
      }else{
        return food
      }
    })

    setFoods(newFoodArray)
  }


  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  const [filterBy, setFilterBy] = useState("All");


  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }


  return (
    <div>

 <select name="filter">
     <option value="All">All</option>
     <option value="American">American</option>
     <option value="Sichuan">Sichuan</option>
     <option value="Thai">Thai</option>
     <option value="Mexican">Mexican</option>
</select>
     
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );


export default SpicyFoodList;
