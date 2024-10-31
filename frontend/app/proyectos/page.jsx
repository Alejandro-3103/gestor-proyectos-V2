import ProyectoList from '../components/ProyectoList';
import Link from 'next/link';

  export default function ProyectosPage() {
    return (
      <div className="space-y-6">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <Link href="/proyectos/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Nuevo Proyecto
          </Link>
        </div>
        <ProyectoList /> 
      </div>
    );
  }