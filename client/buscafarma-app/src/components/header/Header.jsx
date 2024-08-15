const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 h-16 bg-gray-100">
      <div className="text-xl font-bold text-gray-800">Minha Logo</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-800 hover:text-blue-600">Início</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-600">Sobre</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
