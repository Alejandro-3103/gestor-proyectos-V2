'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProyectoForm from '../../../components/ProyectoForm';
import { fetchProyecto, updateProyecto } from '../../../lib/apiProyectos';

export default function EditProyectoPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProyecto(id).then(setProyecto);
    }
  }, [id]);

  async function handleSubmit(data) {
    await updateProyecto(id, data);
    router.push('/proyectos');
  }

  if (!proyecto) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Editar Proyecto</h1>
      <ProyectoForm proyecto={proyecto} onSubmit={handleSubmit} />
    </div>
  );
}