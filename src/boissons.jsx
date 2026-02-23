import './styles/style.css';
import Cristaline from "./assets/img/cristaline.webp";
{/*import OasisTropical from "./assets/img/oasis_tropical.webp";*/ }
import Lipton from "./assets/img/lipton.webp";
import CocaCola from "./assets/img/coca.webp";
import CocaColaZero from "./assets/img/coca_zero.webp";
import Fanta from "./assets/img/fanta.webp";
import FantaCitron from "./assets/img/fanta_citron.webp";
import Schweppes from "./assets/img/schweppes.webp";
import SanPellegrino from "./assets/img/san_pellegrino.webp";
import RedBull from "./assets/img/redbull.webp";
import Placeholder from "./assets/img/Placeholder.webp";
import ScrollToHashElement from './components/Scroll.jsx';

function Viennoiseries() {

    return (
        <div className="container">
            <ScrollToHashElement />
            <div className="divsdwboiss">
                <div>
                    <p className="titre">Boissons plates</p>
                </div>
            </div>

            <div className="containerimgssdwboiss">
                <div className="divsdwboiss" id="Cristaline">
                    <p>Cristaline</p>
                    <img className="imgssdwboiss" src={Cristaline} alt="photo de cristaline" />
                </div>

                <div className="divsdwboiss" id="OasisTropical">
                    <p>Oasis tropical</p>
                    <img className="imgssdwboiss" src={Placeholder} alt="photo de oasis tropical" />
                </div>

                <div className="divsdwboiss" id="Lipton">
                    <p>Lipton</p>
                    <img className="imgssdwboiss" src={Lipton} alt="photo de lipton" />
                </div>
            </div>


            <div className="divsdwboiss">
                <div>
                    <p className="titre">Boissons gazeuses</p>
                </div>
            </div>

            <div className="containerimgssdwboiss">
                <div className="divsdwboiss" id="CocaCola">
                    <p>Coca Cola</p>
                    <img className="imgssdwboiss" src={CocaCola} alt="photo de Coca Cola" />
                </div>

                <div className="divsdwboiss" id="CocaColaZero">
                    <p>Coca Cola Zero</p>
                    <img className="imgssdwboiss" src={CocaColaZero} alt="photo de Coca Cola Zero" />
                </div>

                <div className="divsdwboiss" id="Fanta">
                    <p>Fanta</p>
                    <img className="imgssdwboiss" src={Fanta} alt="photo de Fanta" />
                </div>

                <div className="divsdwboiss" id="FantaCitron">
                    <p>Fanta citron</p>
                    <img className="imgssdwboiss" src={FantaCitron} alt="photo de Fanta" />
                </div>

                <div className="divsdwboiss" id="Schweppes">
                    <p>Schweppes</p>
                    <img className="imgssdwboiss" src={Schweppes} alt="photo de Schweppes" />
                </div>

                <div className="divsdwboiss" id="SanPellegrino">
                    <p>San Pellegrino</p>
                    <img className="imgssdwboiss" src={SanPellegrino} alt="photo de Perrier" />
                </div>
            </div>

            <div className="divsdwboiss">
                <div>
                    <p className="titre">Boissons énergisantes</p>
                </div>
            </div>

            <div className="containerimgssdwboiss">
                <div className="divsdwboiss" id="RedBull">
                    <p>RedBull</p>
                    <img className="imgssdwboiss" src={RedBull} alt="photo de Redbull" />
                </div>
            </div>

        </div >
    );
};
export default Viennoiseries;
