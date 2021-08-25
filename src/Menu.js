import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json')
            .then(({data}) => setMenu(data))
    }, [])

    return (
        <div>
            <h1>Menu</h1>
            <div className='menu'>
                {
                    menu.map(el => (
                        <div className='menu-desc' key={el.id}>
                            <Link to={`/meal/${el.id}`}>
                                <h2 className='title-menu'>{el.title}</h2>
                                <img src={el.image} alt=''/>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Menu