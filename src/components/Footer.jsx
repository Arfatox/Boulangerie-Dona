import { useEffect } from 'react';
import React from 'react';
import logoFacebook from '@/assets/img/facebook.webp';
import logoInstagram from '@/assets/img/instagram.webp';

const Footer = React.forwardRef((props, ref) => {
    useEffect(() => {
        const anneeCopyright = document.getElementsByClassName("annee")[0];
        if (anneeCopyright) {
            anneeCopyright.textContent = new Date().getFullYear().toString();
        }
    }, []);

    return (
        <footer ref={ref} {...props}>
            <div className="maindivfooter">
                <div className="divsfooter">
                    <h3>Contact</h3>
                    <p>150 Rue Jean Moulin<br />80000 Amiens</p>
                    <p>07 51 40 03 29</p>
                </div>
                <div className="divsfooter">
                    <h3>Horaires</h3>
                    <p>
                        Mardi au vendredi : 7h30 - 19h30<br />
                        Samedi & dimanche : 7h30 - 20h00
                    </p>
                </div>
                <div className="divsfooter">
                    <h3>Réseaux sociaux</h3>
                    <div id="divlogosfooter">
                        <a href="https://www.instagram.com/dona_boulangerie/" className="alogosfooter" target="_blank" rel="noopener noreferrer">
                            <img src={logoInstagram} alt="instagram" className="logosfooter" />
                        </a>
                        <a href="https://www.facebook.com/people/DONA-Boulangerie-Pâtisserie/61567174140875/" className="alogosfooter" target="_blank" rel="noopener noreferrer">
                            <img src={logoFacebook} alt="facebook" className="logosfooter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="divsfooter" id="copyright">
                <div>
                    <div id="div1">
                        <p>Copyright ©<wbr />&nbsp;</p>
                        <p className="annee"></p>
                    </div>
                    <div id="div2">
                        <p><wbr />&nbsp;Boulangerie Dona.</p>
                        <p><wbr />&nbsp;Tout droits réservés.&nbsp;</p>
                    </div>
                </div>
                <div id="div3">
                    <p><wbr />| <a href="/mentions-legales">Mentions légales</a> | <a href="/aPropos">À propos</a> |</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
