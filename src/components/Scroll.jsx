// ScrollToHashElement.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // On enlève le '#' pour obtenir l'id de l'élément
            const targetId = location.hash.slice(1);
            // On attend que le DOM soit mis à jour
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;