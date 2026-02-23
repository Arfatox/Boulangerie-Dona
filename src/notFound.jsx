import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';

function NotFound({ availableHeight }) {
    useEffect(() => {
        // Disable scrolling when this page is active
        document.body.style.overflow = 'hidden';

        // Cleanup: Enable scrolling when leaving the page
        return () => {
            document.body.style.overflow = ''; // Resets to default behavior
        };
    }, []);

    return (
        <div className="divnotfound" style={{ height: availableHeight }}>
            <h1>Page Non Trouvée</h1>
            <h3>On dirait que tu t'es perdu, retourne à la <Link to="../">page d'accueil</Link></h3>
        </div>
    );
}

export default NotFound;