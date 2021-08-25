import {useEffect, useState} from "react";
import axios from "axios";

const PokemonGame = () => {
    const [pokemons, setPokemons] = useState([])
    const [goal, setGoal] = useState({})
    const [answers, setAnswers] = useState([])
    const [message, setMessage] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(10)
    const [score, setScore] = useState(0)


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
        setFreeAttempt(10)

    }

    const comparePassword = (id) => {
        if (id === goal.id) {
            setMessage('угадал')
            startBtn()
            setScore(score + 1)
        } else if (id !== goal) {
            setMessage("не угадал")
            startBtn()
        }
        setFreeAttempt(freeAttempt - 1)
    }

    return (
        <div className='pokemon'>
            <button className='startBtn' onClick={startBtn}>Start</button>
            <div>
                <div>
                    <img className='img' src={goal?.img} alt=""/>
                </div>
                {
                    Boolean(freeAttempt) &&
                    <p>У вас осталось {freeAttempt} {freeAttempt === 1 ? "попытки" : "попытки"}</p>
                }
                <div>
                    {
                        answers.map(el => (
                            <button onClick={() => comparePassword(el.id)} key={el?.id}>{el?.name}</button>
                        ))
                    }
                </div>
                <div>{message}</div>
                <div>Score: {score}</div>
            </div>
        </div>
    )
}

export default PokemonGame