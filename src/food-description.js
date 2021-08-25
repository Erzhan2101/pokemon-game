import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";


const FoodDescription = () => {
    const example = useParams()
    const [meal, setMeals] = useState({})
    useEffect(() => {
        axios("https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json")
            .then(({data}) => setMeals(data.find(el => el.id === example.id)))
    }, [example.id])

    return (
        <div className='meal'>
            <img src={meal.image} alt=''/>
            <h2 className='title'><span>Name of the dish</span> : {meal.title}</h2>
            <h2><span>Price</span> : {meal.price}$</h2>
            <h3><span>Description:</span> {meal.description}</h3>
        </div>
    )

}

export default FoodDescription