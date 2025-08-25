import React, { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    
    const {food_list} = useContext(storeContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>TOP FOOD ITEMS YOU</h2>
        <div className="food-display-list">
            {food_list.map((item, key) => {
                if(category==="All" || category===item.category)
                {
                    return <FoodItem key={key} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>

    </div>
  )
}

export default FoodDisplay