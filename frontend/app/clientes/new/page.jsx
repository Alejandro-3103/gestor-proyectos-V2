'use client';

import { useRouter } from 'next/navigation';
import ClienteForm from '../../components/ClienteForm';
import { createCliente } from '../../lib/apiClientes';

export default function NewClientePage() {
  const router = useRouter();

  async function handleSubmit(data) {
    try {
      await createCliente(data);
      router.push('/clientes');
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  }

  return (
    <div>
      <h1>Crear Nuevo Cliente</h1>
      <ClienteForm onSubmit={handleSubmit} />
    </div>
  );
}