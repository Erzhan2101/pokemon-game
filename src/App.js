// import PokemonGame from "./PokemonGame";
import Menu from "./Menu";
import {BrowserRouter, Route} from "react-router-dom";
import FoodDescription from "./food-description";

function App() {
    return (
        <div>
            {/*<PokemonGame />*/}
            <BrowserRouter>
                <Route exact path='/meals'><Menu/></Route>
                <Route path='/meal/:id'><FoodDescription/></Route>
            </BrowserRouter>

        </div>
    );
}

export default App;

