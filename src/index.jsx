import './styles/style.css';
import equipe from "./assets/img/equipe.webp";
import pain from "./assets/img/pain.webp";
import viennoiseries from "./assets/img/viennoiseries.webp";
import patisseries from "./assets/img/entremets.webp";
import sandwichs from "./assets/img/sandwichs.webp";
import boissons from "./assets/img/boissons.webp";

function Index() {
    return (
        <div className="containerindex">
            {/* Section 1 - Introduction */}
            <div id="div1accueil">
                <h1>Boulangerie Dona</h1>
                <div>
                    <p className="pdivs">
                        La boulangerie Dona est une boulangerie artisanale qui propose une large gamme de produits de
                        qualité faits maison. <br />
                        Nous vous proposons des pains, des viennoiseries, des pâtisseries et des sandwichs. <br />
                        Nous sommes ouverts du mardi au vendredi de 7h30 à 19h30. <br />
                        Le samedi et le dimanche de 7h30 à 20h00. <br />
                        Vous pouvez nous retrouver au 150 Rue Jean Moulin, 80000 Amiens. <br />
                        Vous pouvez également nous retrouver sur Instagram et Facebook. <br />
                        Nous vous souhaitons une bonne visite sur notre site. <br />
                        A bientôt à la boulangerie Dona.
                    </p>

                    <div className="divimgaccueil">
                        <img
                            className="imgaccueil"
                            src={equipe}
                            alt="photo de l'équipe"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 - Map */}
            <div id="div2accueil">
                <div>
                    <h2>Notre engagement</h2>
                    <p className="pdivs">
                        À la boulangerie Dona, nous mettons un point d'honneur à utiliser des ingrédients de qualité pour vous offrir des produits frais et savoureux chaque jour.
                        Notre équipe passionnée travaille avec savoir-faire et authenticité pour garantir des saveurs uniques et un accueil chaleureux à chacun de nos clients.
                    </p>
                </div>
                <iframe id="map"
                    title="Google Maps - Boulangerie Dona"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.076499367669!2d2.272304476167846!3d49.87976107139883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7850038fe6775%3A0x8da835ddb6739452!2sBoulangerie%20Dona!5e0!3m2!1sfr!2sfr!4v1700000000000"
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>

            {/* Section 3 - Products */}
            <div id="div3accueil">
                <a className="adiv3" href="/pains">
                    <img
                        src={pain}
                        alt="photo de pain"
                        className="imgs3accueil"
                    />
                    <div className="texteoverlayimgs">Pains</div>
                </a>
                <a className="adiv3" href="/viennoiseries">
                    <img
                        src={viennoiseries}
                        alt="photo de viennoiseries"
                        className="imgs3accueil"
                    />
                    <div className="texteoverlayimgs">Viennoiseries</div>
                </a>
                <a className="adiv3" href="/patisseries">
                    <img
                        src={patisseries}
                        alt="photo de pâtisseries"
                        className="imgs3accueil"
                    />
                    <div className="texteoverlayimgs">Pâtisseries</div>
                </a>
                <a className="adiv3" href="/sandwichs">
                    <img
                        src={sandwichs}
                        alt="photo de sandwichs"
                        className="imgs3accueil"
                    />
                    <div className="texteoverlayimgs">Sandwichs</div>
                </a>
                <a className="adiv3" href="/boissons">
                    <img
                        src={boissons}
                        alt="photo de boissons"
                        className="imgs3accueil"
                    />
                    <div className="texteoverlayimgs">Boissons</div>
                </a>
            </div>

            {/* Section 4 - Customer Reviews */}
            <div id="div4accueil">
                <h2>Les avis clients</h2>
                <div>
                    <p id="pdiv4">
                        Boulangerie Dona
                    </p>
                    <hr />
                </div>

                <div className="divcarousel">
                    <div className="carousel">
                        <input type="radio" id="carousel-1" name="carousel" defaultChecked />
                        <input type="radio" id="carousel-2" name="carousel" />
                        <input type="radio" id="carousel-3" name="carousel" />
                        <input type="radio" id="carousel-4" name="carousel" />

                        <div className="slide slide-1">
                            <p>Une boulangerie pâtisserie récemment ouverte qui mérite le détour 👍<br />
                                une envie de goûter à tous les pains 🍞 et toutes les pâtisseries, <br />
                                les éclairs au chocolat sont un délice. <br />Et en
                                plus, avec un accueil souriant😃</p>
                        </div>
                        <div className="slide slide-2">
                            <p>Une excellente boulangerie qui propose des viennoiseries bien feuilletées,<br />
                                une des meilleures brioches feuilletées que l’on ait testées (et on en a goûté pas mal
                                !),<br />
                                de très bons desserts et des pains spéciaux et classiques super bons. <br />
                                Le tout avec un accueil toujours agréable. Bref, je recommande à 100% !</p>
                        </div>
                        <div className="slide slide-3">
                            <p>Les viennoiseries sont une tuerie, les pains au chocolat même le surlendemain sont encore
                                moelleux et avec un super goût en plus d'être fait maison. <br />
                                Super accueil et les prix ne sont pas exorbitant comme dans certaines autres boulangeries.
                                <br />
                                Quand vous rentrez il y a une vue directe sur l'atelier de préparation et le personnel est
                                super souriant
                            </p>
                        </div>
                        <div className="slide slide-4">
                            <p>Très très bonne boulangerie, cela manquait dans le quartier.
                                Que ce soit les cookies, les pâtisseries, les viennoiseries, la foccaccia, les pains etc
                                tout est raffiné et excellent. Sans parler de l’accueil doux et sympathique.
                                Mérite beaucoup !</p>
                        </div>

                        <label htmlFor="carousel-4" className="control control-1 prev"><span>&#10554;</span></label>
                        <label htmlFor="carousel-2" className="control control-1 next"><span>&#10554;</span></label>
                        <label htmlFor="carousel-1" className="control control-2 prev"><span>&#10554;</span></label>
                        <label htmlFor="carousel-3" className="control control-2 next"><span>&#10554;</span></label>
                        <label htmlFor="carousel-2" className="control control-3 prev"><span>&#10554;</span></label>
                        <label htmlFor="carousel-4" className="control control-3 next"><span>&#10554;</span></label>
                        <label htmlFor="carousel-3" className="control control-4 prev"><span>&#10554;</span></label>
                        <label htmlFor="carousel-1" className="control control-4 next"><span>&#10554;</span></label>

                        <div className="navigation">
                            <label htmlFor="carousel-1" className="radio-btn radio-btn-1"></label>
                            <label htmlFor="carousel-2" className="radio-btn radio-btn-2"></label>
                            <label htmlFor="carousel-3" className="radio-btn radio-btn-3"></label>
                            <label htmlFor="carousel-4" className="radio-btn radio-btn-4"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
