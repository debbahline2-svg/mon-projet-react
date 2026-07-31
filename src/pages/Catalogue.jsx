import { useEffect, useState } from 'react';

function Catalogue() {
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/produits')
            .then((res) => res.json())
            .then((data) => {
                setProduits(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur de fetch :", err);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container">
            <h2 className="section-title">Notre catalogue</h2>

            {loading ? (
                <p>Chargement des produits...</p>
            ) : (
                <div className="produits-container">
                    {produits.map((p) => (
                        <div key={p.id} className="carte-produit">
                            <div className="image-placeholder"></div>

                            <div className="carte-contenu">
                                <div className="carte-header">
                                    <span className="categorie-badge">{p.categorie}</span>
                                    {p.disponible ? (
                                        <span className="dispo-badge">Dispo</span>
                                    ) : (
                                        <span className="dispo-badge indispo">Indisponible</span>
                                    )}
                                </div>

                                <h3>{p.nom}</h3>
                                <p className="description">{p.description}</p>
                                <div className="prix">{p.prix_jour}€ <span className="prix-unite">/jour</span></div>

                                <button className="btn-reserver">Réserver</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Catalogue;