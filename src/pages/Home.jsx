import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <section className="hero">
                <span className="hero-badge">LOCATION MATÉRIEL GAMING</span>
                <h1>Louez. Partagez. Jouez. Le multi à petit prix.</h1>
                <p className="hero-sub">Manettes, casques, consoles : louez à la soirée ou au mois.</p>
                <Link to="/catalogue"><button className="btn-primary">Louer un équipement</button></Link>
            </section>

            <section className="offres-section">
                <h2>Découvrez nos meilleures offres</h2>
                <div className="offres-container">
                    <div className="offre-card">
                        <h3>L'Offre Duo</h3>
                        <ul><li>2 Manettes</li><li>2 Jeux au choix</li></ul>
                        <button className="btn-offre">Choisir ce pack</button>
                    </div>
                    <div className="offre-card">
                        <h3>L'Offre Soirée</h3>
                        <ul><li>4 Manettes</li><li>3 Jeux</li></ul>
                        <button className="btn-offre">Lancer la soirée</button>
                    </div>
                    <div className="offre-card">
                        <h3>L'Offre Solo</h3>
                        <ul><li>1 Manette + Casque</li><li>1 Jeu au choix</li></ul>
                        <button className="btn-offre">Commencer l'aventure</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;