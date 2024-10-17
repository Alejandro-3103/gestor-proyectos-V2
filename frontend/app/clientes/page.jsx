import ClienteList from '../components/ClienteList';
import Link from 'next/link';

export default function ClientesPage() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Clientes</h2>
          <Link href="/clientes/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Nuevo Cliente
          </Link>
        </div>
        <ClienteList />
      </div>
    );
  }