// app/layout.tsx

import './globals.css';  // Estilos globales, si tienes alguno
import Header from './components/Header';  // Importamos el Header
import Footer from './components/Footer';  // Importamos el Footer
import { AuthProvider } from '../context/AuthContext';
import LogoutButton from './components/LogoutButton';

export const metadata = {
  title: 'Gestor de Proyectos',
  description: 'Aplicación de gestor de proyectos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="layout">
        <AuthProvider>
          <Header  /> {/* Header */}
            <main className="main">{children}</main> {/* El contenido de cada página */}
            <LogoutButton />
          <Footer /> {/* Footer */}
        </AuthProvider>
      </body>
    </html>
  );
}
