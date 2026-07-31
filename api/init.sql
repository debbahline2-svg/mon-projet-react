DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS utilisateurs;

CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    categorie VARCHAR(50) NOT NULL,
    prix_jour DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) DEFAULT NULL,
    disponible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produits (nom, categorie, prix_jour, description, disponible) VALUES
    ('PS5 - Console complète', 'PS5', 14.90, 'PS5 + 2 manettes DualSense', TRUE),
    ('Switch OLED', 'Switch', 11.00, 'Switch OLED + Joy-Con', TRUE),
    ('Xbox Elite Series 2', 'Xbox', 5.80, 'Manette Xbox Elite Series 2', TRUE),
    ('PS5 Duo', 'PS5', 14.90, 'PS5 + 2 manettes DualSense', TRUE);

CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    produit_id INT NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    prix_total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);