const Footer = () => {
  return (
    <footer className="bg-oceanGreen100 px-6">
      <div className="container mx-auto py-6 flex flex-col md:flex-col justify-between items-center">
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">
              Termos
            </a>
          </li>
          <li>
            <a href="#policy" className="hover:underline">
              Política
            </a>
          </li>
          <li>
            <a href="#protection" className="hover:underline">
              Proteção
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 mt-4 md:mt-0 py-8">
          {/* Ícones das redes sociais */}
          <a href="https://facebook.com" aria-label="Facebook" className="bg-gray-100 p-2 rounded-full hover:bg-blue-100">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.099 2.795.144v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="bg-gray-100 p-2 rounded-full hover:bg-blue-100">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.975 13.975 0 011.671 3.149a4.918 4.918 0 001.523 6.574A4.903 4.903 0 01.964 9.23v.062a4.92 4.92 0 003.95 4.827 4.903 4.903 0 01-2.212.084 4.923 4.923 0 004.598 3.417A9.867 9.867 0 010 21.542a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.008 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
            <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.306-3.608.975-.975 2.242-1.244 3.608-1.306 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.735 0 8.332.015 7.052.072 5.766.129 4.516.42 3.52 1.415c-.995.995-1.286 2.245-1.343 3.531C1.015 6.968 1 7.37 1 12c0 4.63.015 5.032.072 6.312.057 1.286.348 2.536 1.343 3.531.995.995 2.245 1.286 3.531 1.343C8.332 23.985 8.735 24 12 24s3.668-.015 4.948-.072c1.286-.057 2.536-.348 3.531-1.343.995-.995 1.286-2.245 1.343-3.531.057-1.28.072-1.683.072-6.312 0-4.63-.015-5.032-.072-6.312-.057-1.286-.348-2.536-1.343-3.531-.995-.995-2.245-1.286-3.531-1.343C15.668.015 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
            </svg>
          </a>
        </div>
        <p className="text-sm">© 2024 BuscaFarma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
