import './styles/style.css';
import Croissants from "./assets/img/croissants.webp";
import PainsAuChocolat from "./assets/img/pains_au_chocolat.webp";
import PainsAuxRaisins from "./assets/img/pain_aux_raisins.webp";
import PainsSuisse from "./assets/img/pains_suisse.webp";
import ScrollToHashElement from './components/Scroll.jsx';

function Viennoiseries() {

    return (
        <div className="container">
            <ScrollToHashElement />
            <div className="divautres">
                <div>
                    <p className="titre">Croissants</p>
                    <p>
                        Le croissant est une viennoiserie emblématique de la pâtisserie française, reconnaissable à sa forme de lune et
                        à sa pâte feuilletée croustillante. Beurré et doré à souhait, il est idéal pour un petit-déjeuner gourmand ou une pause sucrée.
                    </p>
                </div>
                <img className="imgautres" src={Croissants} alt="photo de croissants" style={{ transform: "rotate(320deg)" }} />
            </div>

            <div className="divautres" id="PainsAuChocolat">
                <div>
                    <p className="titre">Pains au chocolat</p>
                    <p>
                        Le pain au chocolat est une viennoiserie composée de pâte feuilletée
                        renfermant deux barres de chocolat fondant. C'est un incontournable des petits-déjeuners et goûters français.
                    </p>
                </div>
                <img className="imgautres" src={PainsAuChocolat} alt="photo de pains au chocolat" />
            </div>

            <div className="divautres" id="PainsAuxRaisins">
                <div>
                    <p className="titre">Pains aux raisins</p>
                    <p>
                        Le pain aux raisins est une délicieuse viennoiserie en forme d'escargot, préparée avec une pâte levée feuilletée
                        et garnie d'une crème pâtissière onctueuse ainsi que de raisins secs juteux. Un vrai régal pour les amateurs de douceur.
                    </p>
                </div>
                <img className="imgautres" src={PainsAuxRaisins} alt="photo de pains aux raisins" />
            </div>

            <div className="divautres" id="PainsSuisse">
                <div>
                    <p className="titre">Pains suisse</p>
                    <p>
                        Le pain suisse, aussi appelé brioche suisse, est une viennoiserie rectangulaire garnie d'une crème pâtissière
                        vanillée et de pépites de chocolat. Moelleux et gourmand, il séduit les amateurs de textures fondantes et de saveurs sucrées.
                    </p>
                </div>
                <img className="imgautres" src={PainsSuisse} alt="photo de pains suisses" style={{ transform: "rotate(310deg)" }} />
            </div>
        </div>
    );
};

export default Viennoiseries;
