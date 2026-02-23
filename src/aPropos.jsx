import './styles/style.css';

function APropos() {

    return (
        <div className="container">
            <h1 className="mleft">À propos</h1>

            <p>
                Tout les produits qui sont affichés sur le site ne sont pas disponibles tout le temps, il est possible que certains produits ne soient pas disponibles certains jours. <br />
                Il y a aussi des produits d'évenements spéciaux qui ne sont pas disponibles sur le site, mais le sont sur place (Saint Valentin, Noël... ).
            </p>

            <h2 style={{ marginTop: 30 }}>Nous Contacter</h2>
            <p>Une question, une commande spéciale ou juste envie de nous dire bonjour ?</p>
            <p>📞 <strong>Par téléphone :</strong> <a href="tel:+33751400329">07 51 40 03 29</a></p>
            <p>📩 <strong>Par email :</strong> <a href="mailto:contact@boulangeriedona.fr" >contact@boulangeriedona.fr</a></p>
            <p>Nous serons ravis de vous répondre ! 😊</p>

            <h3>📍 Nous rendre visite</h3>
            <p>Notre boulangerie est située à Amiens sud :</p>
            <p><strong>Adresse :</strong> 150 rue Jean Moulin, 80000 Amiens</p>
            <p>📍   <a href="https://www.google.com/maps/place/Boulangerie+Dona/@49.879761,2.2748792,17z/data=!3m1!4b1!4m6!3m5!1s0x47e7850038fe6775:0x8da835ddb6739452!8m2!3d49.879761!4d2.2748792!16s%2Fg%2F11wqqth2lx?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D&output=embed&pb=!1m18"
                target="_blank"
                rel="noopener noreferrer"
                id="googlemaps"
                style={{ fontWeight: 'bold' }}>
                Voir sur Google Maps
            </a></p>

            <iframe
                title="Google Maps - Boulangerie Dona"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.076499367669!2d2.272304476167846!3d49.87976107139883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7850038fe6775%3A0x8da835ddb6739452!2sBoulangerie%20Dona!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: '10px', marginTop: '10px' }}
                allowFullScreen=""
                loading="lazy">
            </iframe>

            <p style={{ marginTop: "5rem" }}>
                Ce site a été réalisé dans le cadre d'un stage par Eyma Doher étudiante en BUT Informatique à l'IUT d'Amiens.
            </p>

        </div>
    );
}

export default APropos;
