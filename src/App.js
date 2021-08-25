import PokemonGame from "./PokemonGame";
import Menu from "./Menu";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <div>
          {/*<PokemonGame />*/}
            <BrowserRouter>

                <Route ><Menu /></Route>
            </BrowserRouter>

        </div>
    );
}

export default App;

