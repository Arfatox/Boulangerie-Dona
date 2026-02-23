import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Menu from '../assets/img/menu.webp';
import Fermer from '../assets/img/fermer.webp';
import logo from "/src/assets/img/Logo_rond.webp";

function Header() {
    const [sidebarPosition, setSidebarPosition] = useState('-185px');
    const [lastClickedMenuIndex, setLastClickedMenuIndex] = useState(null); // Pour suivre le dernier menu cliqué
    const location = useLocation(); // Pour écouter les changements de route

    // Réinitialisation lors du changement de route
    useEffect(() => {
        setLastClickedMenuIndex(null);
        setSidebarPosition('-185px');
    }, [location]);

    const handleOpenSidebar = () => {
        setSidebarPosition('0px');
    };

    const handleCloseSidebar = () => {
        setSidebarPosition('-185px');
    };

    const handleMouseEnter = (index) => {
        const submenu = document.getElementsByClassName('ulsousmenunavbar')[index];
        if (submenu instanceof HTMLElement) {
            submenu.classList.add('active');
        }
    };

    const handleMouseLeave = (index) => {
        const submenu = document.getElementsByClassName('ulsousmenunavbar')[index];
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove('active');
        }
    };

    const toggleSousMenu = (menuIndex, event) => {
        event.preventDefault(); // Empêcher la navigation

        // Fermer tous les sous-menus avant d'en ouvrir un
        const allSousMenus = document.querySelectorAll('.sousmenu');
        allSousMenus.forEach(submenu => {
            submenu.style.display = 'none'; // Cache tous les sous-menus
            submenu.classList.remove('open'); // Retire la classe 'open'
        });

        // Sélectionne le menu actuel
        const menus = document.querySelectorAll('.menuderoulant');
        const selectedMenu = menus[menuIndex];

        if (!selectedMenu) return; // Si le menu n'existe pas, rien ne se passe

        const sousmenus = selectedMenu.querySelectorAll('.sousmenu');

        sousmenus.forEach(submenu => {
            if (!submenu.classList.contains('open')) {
                // Afficher le sous-menu
                submenu.style.display = 'block';
                setTimeout(() => {
                    submenu.classList.add('open');
                }, 10); // Ajoute la classe 'open' avec un léger délai pour l'animation
            }
        });

        // Mémorise le dernier menu cliqué pour gérer la fermeture
        setLastClickedMenuIndex(menuIndex);
    };

    const handleToggleNestedMenu = (e) => {
        e.preventDefault();

        // Fermer tous les sous-menus avant d'en ouvrir un nouveau
        const allNestedMenus = document.querySelectorAll('.nested-menu');
        allNestedMenus.forEach(menu => {
            if (menu !== e.currentTarget.nextElementSibling) {
                menu.style.display = 'none'; // Cache tous les sous-menus sauf celui cliqué
                menu.classList.remove('open'); // Retire la classe 'open'
            }
        });

        // Gestion du menu imbriqué
        const nestedMenu = e.currentTarget.nextElementSibling;

        if (nestedMenu) {
            if (nestedMenu.classList.contains('open')) {
                nestedMenu.style.display = 'none';
                setTimeout(() => {
                    nestedMenu.classList.remove('open');
                }, 400);
            } else {
                nestedMenu.style.display = 'block';
                setTimeout(() => {
                    nestedMenu.classList.add('open');
                }, 10);
            }
        }
    };

    const handleLinkClick = (menuIndex, event) => {
        if (lastClickedMenuIndex === menuIndex) {
            // Si le menu est déjà ouvert, le fermer
            handleLinkClose();
            setLastClickedMenuIndex(null);
        } else {
            event.preventDefault();
            toggleSousMenu(menuIndex, event); // Ouvre le nouveau menu
            setLastClickedMenuIndex(menuIndex); // Mémorise le menu ouvert
        }
    };

    const handleLinkClose = () => {
        const sousmenus = document.querySelectorAll('.sousmenu');
        sousmenus.forEach((submenu) => {
            submenu.style.display = 'none';
            submenu.classList.remove('open');
        });

        const nestedMenus = document.querySelectorAll('.nested-menu');
        nestedMenus.forEach((menu) => {
            menu.style.display = 'none';
            menu.classList.remove('open');
        });

        setSidebarPosition('-185px'); // Ferme la sidebar
        setLastClickedMenuIndex(null); // Réinitialise l'index du menu cliqué
    };


    return (
        <header>
            <div className="header">
                <ul id="ulmenunavbar">
                    <li id="limenunavbar" onClick={handleOpenSidebar}>
                        <img src={Menu} id="menunavbar" alt="menu déroulant" draggable="false" />
                    </li>
                    <li>
                        <Link to="/" className="linknav" id="accueil">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <p>–</p>
                    </li>
                    {/* Menu Pains */}
                    <li
                        className="popover"
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                    >
                        <Link to="/pains" className="linknav">
                            Pains
                        </Link>
                        <ul className="ulsousmenunavbar">
                            {/* Subsection: Classiques */}
                            <li className="sousmenunavbar">
                                <span>Classiques</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/pains#baguette" className="linknav">
                                            Baguette
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painBoule" className="linknav">
                                            Pain boule
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painDesGaults" className="linknav">
                                            Pain des gaults
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#tourDeMeule" className="linknav">
                                            Tour de meule
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#chistera" className="linknav">
                                            Chistera
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Mie */}
                            <li className="sousmenunavbar">
                                <span>Mie</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/pains#painDeMie" className="linknav">
                                            Pain de mie
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painDeMieComplet" className="linknav">
                                            Pain de mie complet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#brunDePlaisirComplet" className="linknav">
                                            Brun de plaisir complet
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Spéciaux */}
                            <li className="sousmenunavbar nopaddingbottom">
                                <span>Spéciaux</span>
                                <ul className="nested-sousmenu">
                                    <li className="nopaddingbottom">
                                        <Link to="/pains#tourDeMainAuxFruits" className="linknav">
                                            Tour de main aux fruits
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>–</p>
                    </li>
                    {/* Menu Viennoiseries */}
                    <li
                        className="popover"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                    >
                        <Link to="/viennoiseries" className="linknav">
                            Viennoiseries
                        </Link>
                        <ul className="ulsousmenunavbar sousmenuautre">
                            <span>Classiques</span>
                            <li className="sousmenunavbar">
                                <Link to="/viennoiseries#Croissants" className="linknav">
                                    Croissants
                                </Link>
                            </li>
                            <li className="sousmenunavbar">
                                <Link to="/viennoiseries#PainsAuChocolat" className="linknav">
                                    Pains au chocolat
                                </Link>
                            </li>
                            <li className="sousmenunavbar">
                                <Link to="/viennoiseries#PainsAuxRaisins" className="linknav">
                                    Pains aux raisins
                                </Link>
                            </li>
                            <li className="sousmenunavbar nopaddingbottom">
                                <Link to="/viennoiseries#PainsSuisse" className="linknav">
                                    Pains suisse
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li id="lipmenunavbar">
                        <p id="pmenunavbar">Boulangerie Dona</p>
                    </li>
                    <li>
                        <p>–</p>
                    </li>
                    {/* Menu Pâtisseries */}
                    <li
                        className="popover"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                    >
                        <Link to="/patisseries" className="linknav">
                            Pâtisseries
                        </Link>
                        <ul className="ulsousmenunavbar">
                            {/* Sous-menu: Éclairs */}
                            <li className="sousmenunavbar">
                                <span>Éclairs</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/patisseries#eclairAuChocolat" className="linknav">
                                            Éclair au chocolat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#eclairALaVanille" className="linknav">
                                            Éclair à la vanille
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#eclairAuCafe" className="linknav">
                                            Éclair au café
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Sous-menu: Tartes */}
                            <li className="sousmenunavbar">
                                <span>Tartes</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/patisseries#tarteAuChocolat" className="linknav">
                                            Tarte au chocolat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#tarteAuCaramel" className="linknav">
                                            Tarte au caramel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#tarteAuCitronMeringuee" className="linknav">
                                            Tarte au citron meringuée
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Sous-menu: Autres */}
                            <li className="sousmenunavbar nopaddingbottom">
                                <span>Autres</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/patisseries#cheesecakePistache" className="linknav">
                                            Cheesecake à la pistache
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#chouquettes" className="linknav">
                                            Chouquettes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#flan" className="linknav">
                                            Flan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#parisBrest" className="linknav">
                                            Paris-Brest
                                        </Link>
                                    </li>
                                    <li className="nopaddingbottom">
                                        <Link to="/patisseries#entremets" className="linknav">
                                            Entremets
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>–</p>
                    </li>
                    {/* Menu Sandwichs */}
                    <li
                        className="popover"
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave(3)}
                    >
                        <Link to="/sandwichs" className="linknav">
                            Sandwichs
                        </Link>
                        <ul className="ulsousmenunavbar">
                            {/* Subsection: Classiques */}
                            <li className="sousmenunavbar">
                                <span>Classiques</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/sandwichs#SandwichJambon" className="linknav">
                                            Sandwich au jambon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sandwichs#SandwichThon" className="linknav">
                                            Sandwich au thon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sandwichs#SandwichPoulet" className="linknav">
                                            Sandwich au poulet
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Spécialités */}
                            <li className="sousmenunavbar nopaddingbottom">
                                <span>Spécialités</span>
                                <ul className="nested-sousmenu">
                                    <li className="nopaddingbottom">
                                        <Link to="/sandwichs#SandwichPouletPane" className="linknav">
                                            Poulet pané
                                        </Link>
                                    </li>
                                    <li className="nopaddingbottom">
                                        <Link to="/sandwichs#SandwichPouletCurry" className="linknav">
                                            Poulet au curry
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>–</p>
                    </li>
                    {/* Menu Boissons */}
                    <li
                        className="popover"
                        onMouseEnter={() => handleMouseEnter(4)}
                        onMouseLeave={() => handleMouseLeave(4)}
                    >
                        <Link to="/boissons" className="linknav">
                            Boissons
                        </Link>
                        <ul className="ulsousmenunavbar">
                            {/* Subsection: Boissons plates */}
                            <li className="sousmenunavbar">
                                <span>Boissons plates</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/boissons#Cristaline" className="linknav">
                                            Cristaline
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#OasisTropical" className="linknav">
                                            Oasis tropical
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Lipton" className="linknav">
                                            Lipton
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Boissons gazeuses */}
                            <li className="sousmenunavbar">
                                <span>Boissons gazeuses</span>
                                <ul className="nested-sousmenu">
                                    <li>
                                        <Link to="/boissons#CocaCola" className="linknav">
                                            Coca Cola
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#CocaColaZero" className="linknav">
                                            Coca Cola zero
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Fanta" className="linknav">
                                            Fanta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#FantaCitron" className="linknav">
                                            Fanta citron
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Schweppes" className="linknav">
                                            Schweppes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#SanPellegrino" className="linknav">
                                            San Pellegrino
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Boissons énergisantes */}
                            <li className="sousmenunavbar nopaddingbottom">
                                <span>Boissons énergisantes</span>
                                <ul className="nested-sousmenu">
                                    <li className="nopaddingbottom">
                                        <Link to="/boissons#RedBull" className="linknav">
                                            RedBull
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <Link to="/" id="alogonavbar">
                    <img src={logo} alt="logo" className="logonavbar" />
                </Link>
            </div>

            {/* Sidebar Navigation */}
            <nav className="side-slide" style={{ left: sidebarPosition }}>
                <ul id="ulmenuderoulant">
                    <li id="lifermersidemenu">
                        <img
                            src={Fermer}
                            id="fermersidemenu"
                            alt="fermer"
                            draggable="false"
                            onClick={handleCloseSidebar}
                        />
                    </li>
                    <li>
                        <Link to="/" className="linknav" onClick={handleLinkClose}>
                            Accueil
                        </Link>
                    </li>
                    {/* Sidebar: Pains (divided into subsections) */}
                    <li className="menuderoulant">
                        <Link to="/pains" className="linknav" onClick={(e) => handleLinkClick(0, e)}>
                            Pains
                        </Link>
                        <ul>
                            {/* Subsection: Classiques */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Classiques
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/pains#baguette" className="linknav" onClick={handleLinkClose}>
                                            Baguette
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painBoule" className="linknav" onClick={handleLinkClose}>
                                            Pain boule
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painDesGaults" className="linknav" onClick={handleLinkClose}>
                                            Pain des gaults
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#tourDeMeule" className="linknav" onClick={handleLinkClose}>
                                            Tour de meule
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#chistera" className="linknav" onClick={handleLinkClose}>
                                            Chistera
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Mie */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Mie
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/pains#painDeMie" className="linknav" onClick={handleLinkClose}>
                                            Pain de mie
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#painDeMieComplet" className="linknav" onClick={handleLinkClose}>
                                            Pain de mie complet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pains#brunDePlaisirComplet" className="linknav" onClick={handleLinkClose}>
                                            Brun de plaisir complet
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Subsection: Spéciaux */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Spéciaux
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/pains#tourDeMainAuxFruits" className="linknav" onClick={handleLinkClose}>
                                            Tour de main aux fruits
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Sidebar: Viennoiseries */}
                    <li className="menuderoulant">
                        <Link to="/viennoiseries" className="linknav" onClick={(e) => handleLinkClick(1, e)}>
                            Viennoiseries
                        </Link>
                        <ul>
                            <li className="sousmenu">
                                <Link to="/viennoiseries#Croissants" className="linknav" onClick={handleLinkClose}>
                                    Croissants
                                </Link>
                            </li>
                            <li className="sousmenu">
                                <Link to="/viennoiseries#PainsAuChocolat" className="linknav" onClick={handleLinkClose}>
                                    Pains au chocolat
                                </Link>
                            </li>
                            <li className="sousmenu">
                                <Link to="/viennoiseries#PainsAuxRaisins" className="linknav" onClick={handleLinkClose}>
                                    Pains aux raisins
                                </Link>
                            </li>
                            <li className="sousmenu">
                                <Link to="/viennoiseries#PainsSuisse" className="linknav" onClick={handleLinkClose}>
                                    Pains suisse
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* Sidebar: Pâtisseries */}
                    <li className="menuderoulant">
                        <Link to="/patisseries" className="linknav" onClick={(e) => handleLinkClick(2, e)}>
                            Pâtisseries
                        </Link>
                        <ul>
                            {/* Sous-menu: Éclairs */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Éclairs
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/patisseries#eclairAuChocolat" className="linknav" onClick={handleLinkClose}>
                                            Éclair au chocolat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#eclairALaVanille" className="linknav" onClick={handleLinkClose}>
                                            Éclair à la vanille
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#eclairAuCafe" className="linknav" onClick={handleLinkClose}>
                                            Éclair au café
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Sous-menu: Tartes */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Tartes
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/patisseries#tarteAuChocolat" className="linknav" onClick={handleLinkClose}>
                                            Tarte au chocolat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#tarteAuCaramel" className="linknav" onClick={handleLinkClose}>
                                            Tarte au caramel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#tarteAuCitronMeringuee" className="linknav" onClick={handleLinkClose}>
                                            Tarte au citron meringuée
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Sous-menu: Autres */}
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Autres
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/patisseries#cheesecakePistache" className="linknav" onClick={handleLinkClose}>
                                            Cheesecake à la pistache
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#chouquettes" className="linknav" onClick={handleLinkClose}>
                                            Chouquettes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#flan" className="linknav" onClick={handleLinkClose}>
                                            Flan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#parisBrest" className="linknav" onClick={handleLinkClose}>
                                            Paris-Brest
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/patisseries#entremets" className="linknav" onClick={handleLinkClose}>
                                            Entremets
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Sidebar: Sandwichs */}
                    <li className="menuderoulant">
                        <Link to="/sandwichs" className="linknav" onClick={(e) => handleLinkClick(3, e)}>
                            Sandwichs
                        </Link>
                        <ul>
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Sandwichs classiques
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/sandwichs#SandwichJambon" className="linknav" onClick={handleLinkClose}>
                                            Sandwich au jambon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sandwichs#SandwichThon" className="linknav" onClick={handleLinkClose}>
                                            Sandwich au thon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sandwichs#SandwichPoulet" className="linknav" onClick={handleLinkClose}>
                                            Sandwich au poulet
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Spécialités
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/sandwichs#PouletPane" className="linknav" onClick={handleLinkClose}>
                                            Poulet pané
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sandwichs#PouletCurry" className="linknav" onClick={handleLinkClose}>
                                            Poulet au curry
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Sidebar: Boissons */}
                    <li className="menuderoulant">
                        <Link to="/boissons" className="linknav" onClick={(e) => handleLinkClick(4, e)}>
                            Boissons
                        </Link>
                        <ul>
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Boissons plates
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/boissons#Cristaline" className="linknav" onClick={handleLinkClose}>
                                            Cristaline
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#OasisTropical" className="linknav" onClick={handleLinkClose}>
                                            Oasis tropical
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Lipton" className="linknav" onClick={handleLinkClose}>
                                            Lipton
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Boissons gazeuses
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/boissons#CocaCola" className="linknav" onClick={handleLinkClose}>
                                            Coca Cola
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#CocaColaZero" className="linknav" onClick={handleLinkClose}>
                                            Coca Cola zero
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Fanta" className="linknav" onClick={handleLinkClose}>
                                            Fanta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#FantaCitron" className="linknav" onClick={handleLinkClose}>
                                            Fanta citron
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#Schweppes" className="linknav" onClick={handleLinkClose}>
                                            Schweppes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/boissons#SanPellegrino" className="linknav" onClick={handleLinkClose}>
                                            San Pellegrino
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sousmenu">
                                <span onClick={handleToggleNestedMenu} style={{ cursor: 'pointer' }}>
                                    Boissons énergisantes
                                </span>
                                <ul className="nested-menu" style={{ display: 'none' }}>
                                    <li>
                                        <Link to="/boissons#RedBull" className="linknav" onClick={handleLinkClose}>
                                            RedBull
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li></li>
                </ul>
            </nav >
        </header >
    );
}

export default Header;
