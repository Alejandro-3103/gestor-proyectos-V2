import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-white text-lg font-semibold mb-2">DevEnviroment</h2>
            <p className="text-sm">Soluciones innovadoras para la gestión de proyectos</p>
          </div>
          
          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Síguenos</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Contacto</h2>
            <p className="text-sm flex items-center justify-center">
              <MdEmail className="w-4 h-4 mr-1" />
              info@devEnviroment.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 text-xs text-center">
          <p>&copy; {new Date().getFullYear()} DevEnviroment. Todos los derechos reservados.</p>
          <p className="mt-1">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacidad</a> | 
            <a href="/terms-of-service" className="hover:text-white transition-colors duration-300 ml-2">Términos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}