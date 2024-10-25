import AuthRedirect from './components/AuthRedirect';

export default function Home() {
  return (
      <div>
        <AuthRedirect />
        <h1>Dashboard</h1>
        <p>¡Bienvenido al Dashboard, solo accesible para usuarios autenticados!</p>
      </div>
  );
}