import './styles/style.css';
import eclairAuChocolat from "./assets/img/eclair_chocolat.webp";
import eclairALaVanille from "./assets/img/eclair_vanille.webp"
import eclairAuCafe from "./assets/img/eclair_cafe.webp"
import cheesecakePistache from "./assets/img/cheesecake_pistache.webp"
import chouquettes from "./assets/img/chouquettes.webp"
import flan from "./assets/img/flan.webp"
import parisBrest from "./assets/img/paris_brest.webp"
import tarteAuChocolat from "./assets/img/tarte_au_chocolat.webp"
import tarteAuCaramel from "./assets/img/tarte_au_caramel.webp"
import tarteAuCitronMeringuee from "./assets/img/tarte_au_citron_meringuee.webp"
import entremets from "./assets/img/entremets.webp"
import ScrollToHashElement from './components/Scroll.jsx';

function Patisseries() {

    return (
        <div className="container">
            <ScrollToHashElement />
            <div className="divautres">
                <div>
                    <p className="titre">Éclair au chocolat</p>
                    <p>
                        Un délicieux éclair garni d'une crème pâtissière au chocolat riche et onctueuse, réalisée avec du chocolat noir de qualité. La pâte à choux est légère et dorée, offrant un contraste parfait avec le glaçage brillant et fondant qui le recouvre.
                    </p>
                </div>
                <img className="imgautres" src={eclairAuChocolat} alt="Éclair au chocolat" />
            </div>

            <div className="divautres" id="eclairALaVanille">
                <div>
                    <p className="titre">Éclair à la vanille</p>
                    <p>
                        Une pâte à choux délicatement dorée, fourrée d'une crème pâtissière à la vanille de Madagascar. Son glaçage fondant ajoute une touche sucrée parfaite, rehaussant la douceur et l’arôme intense de la vanille.
                    </p>
                </div>
                <img className="imgautres" src={eclairALaVanille} alt="Éclair à la vanille" />
            </div>

            <div className="divautres" id="eclairAuCafe">
                <div>
                    <p className="titre">Éclair au café</p>
                    <p>
                        Un grand classique pour les amateurs de café. Sa crème pâtissière au café est intensément parfumée et équilibrée, tandis que le glaçage au café apporte une finition élégante et une touche de gourmandise supplémentaire.
                    </p>
                </div>
                <img className="imgautres" src={eclairAuCafe} alt="Éclair au café" />
            </div>

            <div className="divautres" id="tarteAuChocolat">
                <div>
                    <p className="titre">Tarte au chocolat & noisette</p>
                    <p>
                        Une pâte croustillante garnie d’une ganache veloutée au chocolat noir intense, enrichie d’une délicate touche de noisette grillée. Un soupçon de fleur de sel rehausse l’ensemble, créant une explosion de saveurs en bouche.
                    </p>
                </div>
                <img className="imgautres" src={tarteAuChocolat} alt="Tarte au chocolat & noisette" />
            </div>

            <div className="divautres" id="tarteAuCaramel">
                <div>
                    <p className="titre">Tarte au caramel & vanille</p>
                    <p>
                        Une tarte gourmande composée d’une pâte sablée croustillante, garnie d’un caramel au beurre salé fondant et parfumé. Une subtile touche de vanille vient adoucir le tout, apportant une douceur délicate et une belle complexité aromatique.
                    </p>
                </div>
                <img className="imgautres" src={tarteAuCaramel} alt="Tarte au caramel & vanille" />
            </div>

            <div className="divautres" id="tarteAuCitronMeringuee">
                <div>
                    <p className="titre">Tarte au citron meringuée</p>
                    <p>
                        Une alliance parfaite entre l’acidité d’une crème au citron maison et la douceur d’une meringue légère, dorée à la perfection. Le tout sur une pâte sablée délicieusement croquante.
                    </p>
                </div>
                <img className="imgautres" src={tarteAuCitronMeringuee} alt="Tarte au citron meringuée" />
            </div>

            <div className="divautres" id="cheesecakePistache">
                <div>
                    <p className="titre">Cheesecake pistache</p>
                    <p>
                        Un cheesecake ultra-crémeux au goût subtil et raffiné de pistache. Il repose sur un fond biscuité croustillant et est sublimé par une généreuse garniture de pistaches concassées pour une touche croquante et gourmande.
                    </p>
                </div>
                <img className="imgautres" src={cheesecakePistache} alt="Cheesecake pistache" />
            </div>

            <div className="divautres" id="chouquettes">
                <div>
                    <p className="titre">Chouquettes</p>
                    <p>
                        De petites bouchées de pâte à choux aérées et légères, saupoudrées de sucre perlé qui caramélise légèrement à la cuisson. Elles sont irrésistibles aussi bien nature qu’accompagnées d’une boisson chaude.
                    </p>
                </div>
                <img className="imgautres" src={chouquettes} alt="Chouquettes" />
            </div>

            <div className="divautres" id="flan">
                <div>
                    <p className="titre">Flan</p>
                    <p>
                        Une pâtisserie classique à la texture fondante, composée d’une pâte croustillante garnie d’un appareil crémeux à la vanille. Son goût délicatement sucré et sa cuisson maîtrisée en font un dessert intemporel et réconfortant.
                    </p>
                </div>
                <img className="imgautres" src={flan} alt="Flan" />
            </div>

            <div className="divautres" id="parisBrest">
                <div>
                    <p className="titre">Paris-Brest</p>
                    <p>
                        Un dessert emblématique composé d’un lit de pâte à choux garnie d’une crème pralinée onctueuse et parsemée d’amandes effilées torréfiées. Son goût délicatement noisetté en fait une pâtisserie incontournable.
                    </p>
                </div>
                <img className="imgautres" src={parisBrest} alt="Paris-Brest" />
            </div>

            <div className="divautres" id="entremets">
                <div>
                    <p className="titre">Entremets</p>
                    <p>
                        Un dessert raffiné aux multiples textures et saveurs, souvent composé de mousses légères, de biscuits moelleux et d’un glaçage miroir élégant. Chaque bouchée est une explosion de gourmandise.
                    </p>
                </div>
                <img className="imgautres" src={entremets} alt="Entremets" />
            </div>
        </div>
    );
};

export default Patisseries;
