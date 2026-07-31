import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 12h4m-2-2v4M15 11h.01M18 13h.01M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5Z" />
                </svg>
                GAMERENT
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/catalogue">Catalogue</Link></li>
                    <li><Link to="/tarifs">Tarifs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <button className="btn-connexion">Connexion</button>
        </header>
    );
}

export default Header;