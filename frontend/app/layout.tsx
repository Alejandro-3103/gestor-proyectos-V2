// app/layout.tsx
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from '../context/AuthContext';
import LogoutButton from './components/LogoutButton';
import Image from 'next/image';
import Background from '../public/img/background.jpg';

export const metadata = {
  title: 'DevEnviroment',
  description: 'Gestor de proyectos',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (      
    <html lang="es">
      <body>
      <Header />
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10">
          <Image 
              src={Background} 
              alt="background image" 
              className="object-cover w-full h-full" 
              fill  
              quality={100} 
          />
        </div>
        <div className="layout">
          <AuthProvider> 
            <main className="main">{children}</main>
            <LogoutButton />   
          </AuthProvider>
        </div>
      </div>
        <Footer /> 
      </body>
    </html>
  );
} 