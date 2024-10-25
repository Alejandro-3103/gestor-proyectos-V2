'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Crear el contexto
const AuthContext = createContext<{ isAuthenticated: boolean }>({
  isAuthenticated: false,
});

// Proveedor de autenticación
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificar la autenticación al cargar el contexto
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:4000/staff/auth/protected', {
          method: 'GET',
          credentials: 'include', // Enviar cookies para verificar el token
        });

        if (!response.ok) {
          throw new Error('Acceso no autorizado');
        }

        setIsAuthenticated(true); // Autenticado
      } catch (error) {
        setIsAuthenticated(false); // No autenticado
        router.push('/login'); // Redirigir al login si no está autenticado
      }
    };

    checkAuth();
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
