import {useEffect, useState} from "react";
import axios from "axios";

const PokemonGame = () => {
    const [pokemons, setPokemons] = useState([])
    const [goal, setGoal] = useState({})
    const [answers, setAnswers] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then(({data}) => setPokemons(data.pokemon))
    }, [])

    const randomGenerator = () => {
        return Math.round((Math.random() * 151) + 1)
    }

    const startBtn = () => {
        const random = randomGenerator()
        setGoal(pokemons.find(item => item.id === random))
        const number = [random, randomGenerator(), randomGenerator(), randomGenerator()]
        setAnswers(number.map(num => {
            return pokemons.find(poke => poke.id === num)
        }))
    }

    const comparePassword = (id) => {
        if (id === goal.id) {
            setMessage('угадал')
        }else if(id !== goal){
            setMessage("не угадал")
        }
    }

    return (
        <div>
            <button onClick={startBtn}>Start</button>
            <div>
                <img src={goal.img} alt=""/>
            </div >
            <div className='random-btn'>
                {
                    answers.map(el => (
                        <button onClick={() => comparePassword(el.id)}>{el.name}</button>
                    ))
                }
            </div>

            <div>{message}</div>
        </div>
    )
}

export default PokemonGame