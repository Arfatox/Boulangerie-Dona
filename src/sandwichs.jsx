import './styles/style.css';
import Placeholder from "./assets/img/Placeholder.webp";
import SandwichThon from "./assets/img/sandwich_thon.webp";
import SandwichPouletEmince from "./assets/img/sandwich_poulet_emince.webp";
import SandwichPouletCurry from "./assets/img/sandwich_poulet_curry.webp";
import SandwichPouletPane from "./assets/img/sandwich_poulet_pane.webp";
import Burger from "./assets/img/burger.webp";
import ScrollToHashElement from './components/Scroll.jsx';

function Sandwichs() {

    return (
        <div className="container">
            <ScrollToHashElement />
            <div className="divsdwboiss">
                <div>
                    <p className="titre">Sandwichs</p>
                    <p>
                        Ces sandwichs sont préparés avec des ingrédients frais, comprenant de la salade croquante et une vinaigrette légère qui rehausse les saveurs.
                        Idéals pour une pause rapide et savoureuse, ils conviennent aussi bien pour un déjeuner sur le pouce que pour un pique-nique gourmand.
                        <br />En cas de risques d'allergies ou d'intolérances alimentaires, veuillez demander des informations supplémentaires sur place afin d'assurer votre sécurité.
                    </p>
                </div>
            </div>

            <div className="containerimgssdwboiss">
                <div className="divsdwboiss" id="SandwichThon">
                    <p>Sandwichs au thon</p>
                    <img className="imgssdwboiss" src={SandwichThon} alt="photo de sandwich au thon" />
                </div>

                <div className="divsdwboiss" id="SandwichPoulet">
                    <p>Sandwichs au poulet</p>
                    <img className="imgssdwboiss" src={SandwichPouletEmince} alt="photo de sandwich au poulet" />
                </div>

                <div className="divsdwboiss" id="SandwichPouletPane">
                    <p>Sandwich au poulet pané</p>
                    <img className="imgssdwboiss" src={Placeholder} alt="photo de sandwich au poulet pané" />
                </div>

                <div className="divsdwboiss" id="SandwichPouletCurry">
                    <p>Sandwich poulet au curry</p>
                    <img className="imgssdwboiss" src={SandwichPouletCurry} alt="photo de sandwich au poulet au curry" />
                </div>

                <div className="divsdwboiss" id="SandwichJambon">
                    <p>Sandwich au jambon</p>
                    <img className="imgssdwboiss" src={Placeholder} alt="photo de sandwich au jambon" />
                </div>
            </div>

            <p id="burger">
                Il existe aussi des sandwich avec les memes ingrédients mais en version burger.
            </p>

            <div className="containerimgssdwboiss">
                <div className="divsdwboiss" id="SandwichThon">
                    <p>Sandwichs burger</p>
                    <img className="imgssdwboiss" src={Burger} alt="photo de sandwich au thon" />
                </div>
            </div>

        </div>

    );
};

export default Sandwichs;
