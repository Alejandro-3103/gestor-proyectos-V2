'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Opciones del menú con sus respectivos enlaces
  const menuOptions = [
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Staff', href: '/staff' },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Asignaciones', href: '/asignaciones' }
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image 
              src="https://cdn-icons-png.flaticon.com/512/6884/6884480.png" 
              width={24} 
              height={24} 
              className="mr-3 h-6 w-auto sm:h-9" 
              alt="Logo" 
            />
            <span className="text-xl font-semibold dark:text-white">DevEnvironment</span>
          </a>         
          {/* Menú Normal (Centrado) */}
          <div className="hidden lg:flex lg:flex-grow justify-center">
            <ul className="flex space-x-8">
              {menuOptions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="block py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300 dark:text-gray-400 dark:hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Botón del menú móvil */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Menú Responsive (centrado) */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
          <ul className="flex flex-col items-center mt-4 space-y-4 bg-gray-800 py-4">
            {menuOptions.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-700 transition-colors duration-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
