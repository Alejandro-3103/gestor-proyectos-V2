'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">DevEnviroment</Link>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/staff">Staff</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li><Link href="/clientes">Clientes</Link></li>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">
            Crear Proyecto
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="/staff">Staff</Link></li>
            <li><Link href="/proyectos">Proyectos</Link></li>
            <li><Link href="/clientes">Clientes</Link></li>
            <li>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                Crear Proyecto
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
