// app/login/page.tsx
'use client'; // Necesario para usar hooks como useState y useEffect en el app directory

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); // Cambiado de `any` a `string`
  const router = useRouter(); // Para redireccionar en caso de éxito

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // Limpiar cualquier error previo

    try {
      const response = await fetch('http://localhost:4000/staff/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correoElectronico: email,
          contraseña: password,
        }),
        credentials: 'include', // Esto asegura que las cookies se envíen y reciban
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la autenticación');
      }

      // Redireccionar a la página protegida o dashboard
      router.push('/protected'); // Aquí puedes cambiar la ruta de destino
    } catch (error) {
      if (error instanceof Error) { // Asegurarse de que el error es una instancia de Error
        setError(error.message || 'Error en la autenticación');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Login</h1>
        <Link href="/staff/new" className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium underline">
          Registrarse
        </Link>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
