import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const ShowImgs = ({ src, id, alt, footerRef, ...rest }) => {
    const imgRef = useRef(null);
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation(); // Hook pour obtenir l'emplacement actuel (URL)

    const checkVisibility = useCallback(() => {
        if (!imgRef.current || !footerRef?.current) return;

        // Obtenir les dimensions et positions actuelles
        const imgRect = imgRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();

        // Vérifier si le haut de l'image est en dessous du bas du footer
        const isImageBelowFooter = imgRect.bottom > footerRect.bottom;

        // Mettre à jour l'état uniquement si nécessaire
        setIsHidden(isImageBelowFooter);
    }, [footerRef]);

    // Exécuter checkVisibility lors du changement de page ou du redimensionnement
    useEffect(() => {
        // Vérifier la visibilité initiale après un court délai
        const timer = setTimeout(checkVisibility, 100);

        // Écouter l'événement de redimensionnement
        window.addEventListener('resize', checkVisibility);

        // Nettoyer les écouteurs et le timer
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [checkVisibility]);

    // Exécuter checkVisibility lors du changement de page
    useEffect(() => {
        checkVisibility();
    }, [location.pathname, checkVisibility]); // Déclenché lorsque l'URL change

    return (
        <img
            src={src}
            ref={imgRef}
            id={id}
            alt={alt}
            draggable="false"
            style={{
                display: isHidden ? 'none' : 'block',
                position: 'absolute',
            }}
            {...rest}
        />
    );
};

export default ShowImgs;