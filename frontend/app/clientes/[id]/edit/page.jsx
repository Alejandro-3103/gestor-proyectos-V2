'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClienteForm from '../../../components/ClienteForm';
import { fetchCliente, updateCliente } from '../../../lib/apiClientes';

export default function EditClientePage({ params }) {
  const router = useRouter();
  const id = params.id;
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCliente(id).then(setCliente);
    }
  }, [id]);

  async function handleSubmit(data) {
    await updateCliente(id, data);
    router.push('/clientes');
  }

  if (!cliente) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Editar Cliente</h1>
      <ClienteForm cliente={cliente} onSubmit={handleSubmit} />
    </div>
  );
}