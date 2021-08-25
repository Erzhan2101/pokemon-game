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
        <div className='menu'>
            {
                menu.map(el => (

                    <div className='menu-desc'>
                        {/*<Link to='/food/id'>{el.title}</Link>*/}
                        {/*<Link to='/food/id'><img src={el.image} alt=''/></Link>*/}
                        <Link to='meal/id'>
                            <h2 to={`/food/${el.id}`} key={el.id}>{el.title}</h2>
                            <img src={el.image} alt=''/>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu