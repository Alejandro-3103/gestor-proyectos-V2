'use client';

import { useRouter } from 'next/navigation';
import ProyectoForm from '../../components/ProyectoForm';
import { createProyecto } from '../../lib/apiProyectos';

export default function NewProyectoPage() {
  const router = useRouter();

  async function handleSubmit(data) {
    try {
      await createProyecto(data);
      router.push('/proyectos');
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  }

  return (
    <div>
      <h1>Crear Nuevo Proyecto</h1>
      <ProyectoForm onSubmit={handleSubmit} />
    </div>
  );
}