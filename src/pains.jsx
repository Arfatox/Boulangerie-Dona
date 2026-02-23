import './styles/style.css';
import baguette from "./assets/img/pain.webp";
import chistera from "./assets/img/chistera.webp"
import painBoule from "./assets/img/pain_boule.webp"
import painDesGaults from "./assets/img/pain_des_gaults.webp"
import tourDeMeule from "./assets/img/tour_de_meule.webp"
import painDeMie from "./assets/img/pain_de_mie.webp"
import painDeMieComplet from "./assets/img/pain_de_mie_complet.webp"
import brunDePlaisirComplet from "./assets/img/brun_de_plaisir_complet.webp"
import tourDeMainAuxFruits from "./assets/img/tour_de_main_aux_fruits.webp"
import ScrollToHashElement from './components/Scroll.jsx';

function Pains() {

    return (
        <div className="container">
            <ScrollToHashElement />
            <div className="divautres" id="baguette">
                <div>
                    <p className="titre">La Baguette</p>
                    <p>
                        La baguette française traditionnelle, avec sa croûte dorée et croustillante, renferme une mie légère et alvéolée.
                        Idéale pour accompagner tous vos repas, du petit-déjeuner au dîner.
                    </p>
                </div>
                <img className="imgautres" src={baguette} alt="photo de baguette" />
            </div>

            <div className="divautres" id="PainBoule">
                <div>
                    <p className="titre">Le pain boule</p>
                    <p>
                        Ce pain rustique en forme de boule possède une croûte épaisse et une mie moelleuse.
                        Il se conserve longtemps et s’adapte parfaitement aux fromages et aux plats en sauce.
                    </p>
                </div>
                <img className="imgautres" src={painBoule} alt="photo de pain boule" />
            </div>

            <div className="divautres" id="painDesGaults">
                <div>
                    <p className="titre">Le pain des gaults</p>
                    <p>
                        Le pain des Gaults est un pain rustique typé à la croûte légèrement épaisse et à l'ami de couleur brune irrégulièrement alvéolé.
                        Élaboré avec du levain, on obtient des saveurs et des arômes très développés.
                        Sa croûte légèrement épaisse, sa taille et le levain favorisent une longue conservation
                    </p>
                </div>
                <img className="imgautres" src={painDesGaults} alt="photo de pain des gaults" />
            </div>

            <div className="divautres" id="tourDeMeule">
                <div>
                    <p className="titre">La tour de meule</p>
                    <p>
                        La mouture sur meule de Pierre est la technique ancestrale du meunier.
                        La farine de blé moulue conserve ainsi les minéraux, les fibres et les vitamines. Elle permet d'obtenir un pain à grande valeur nutritive.
                        Sa croûte est fine, sa texture moelleuse et sa mie de couleur crème
                    </p>
                </div>
                <img className="imgautres" src={tourDeMeule} alt="photo de tour de meule" />
            </div>

            <div className="divautres" id="chistera">
                <div>
                    <p className="titre">La chistera</p>
                    <p>
                        La chistera est un pain à la mie noire agrémentée de graines apprécié avec des mets salés et aux saveurs prononcées.
                        Ce pain a un atout visuel qui valorisera les plats. Côté nutrition, il est riche en fibres et côté goût, bien accompagné,
                        il équilibre les saveurs en bouche
                    </p>
                </div>
                <img className="imgautres" src={chistera} alt="photo de chistera" />
            </div>

            <div className="divautres" id="painDeMie">
                <div>
                    <p className="titre">Le pain de mie</p>
                    <p>
                        Le pain de mie artisanal est fabriqué sur levain naturel, sans additif et sans conservateur. Sa mie est tendre et moelleuse, et sa cuisson en moule lui offre une bonne conservation                    </p>
                </div>
                <img className="imgautres" src={painDeMie} alt="photo de pain de mie" />
            </div>

            <div className="divautres" id="painDeMieComplet">
                <div>
                    <p className="titre">Le pain de mie complet</p>
                    <p>
                        Le pain complet artisanal est fabriqué avec un levain de lait qui offre de la légèreté et de la souplesse.
                        Le son de blé apporte de nombreux éléments nutritifs, notamment les fibres alimentaires recommandées dans un régime alimentaire sain
                    </p>
                </div>
                <img className="imgautres" src={painDeMieComplet} alt="photo de pain de mie complet" />
            </div>

            <div className="divautres" id="brunDePlaisirComplet">
                <div>
                    <p className="titre">Le brun de plaisir complet</p>
                    <p>
                        Un pain complet savoureux, alliant le goût authentique des céréales à une texture légère.
                        Idéal pour accompagner des plats sains ou à déguster simplement avec du beurre.
                    </p>
                </div>
                <img className="imgautres" src={brunDePlaisirComplet} alt="photo de brun de plaisir complet" />
            </div>

            <div className="divautres" id="tourDeMainAuxFruits">
                <div>
                    <p className="titre">Le tour de main aux fruits</p>
                    <p>
                        Retrouvez l'authenticité du blé moulu sur meule de Pierre, l'intensité du seigle et l'originalité de l'épeautre, un riche en goût et en fruits secs, en fibres et en sucre lent.
                        Ce pain apporte de fortes valeurs nutritionnelles pour l'équilibre alimentaire
                    </p>
                </div>
                <img className="imgautres" src={tourDeMainAuxFruits} alt="photo de pain aux fruits" />
            </div>
        </div>
    );
};

export default Pains;
