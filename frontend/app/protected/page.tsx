'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProtectedData {
  correoElectronico: string;
}

export default function Dashboard() {
  const [data, setData] = useState<ProtectedData | null>(null);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await fetch('http://localhost:4000/staff/auth/protected', {
          method: 'GET',
          credentials: 'include', // Para incluir cookies en la solicitud
        });

        if (!response.ok) {
          throw new Error('No autorizado');
        }

        const data: ProtectedData = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          router.push('/login'); // Redirigir si no está autorizado
        }
      }
    };

    fetchProtectedData();
  }, [router]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data ? (
        <>
          <h1>Bienvenido {data.correoElectronico}</h1> 
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

