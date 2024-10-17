import Link from 'next/link';
import StaffTimeEntries from './components/StaffTimeEntries';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido al Gestor de Proyectos</h1>
      <Link href="/clientes">Gestionar Clientes</Link>
      <h1>Gestor de Tiempos</h1>
      <StaffTimeEntries />
    </div>
  );
}