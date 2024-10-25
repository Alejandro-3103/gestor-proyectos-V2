// app/login/page.tsx
'use client'; // Necesario para usar hooks como useState y useEffect en el app directory

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
