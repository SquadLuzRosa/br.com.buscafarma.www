import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Ajuda</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;