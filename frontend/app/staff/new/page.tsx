'use client';

import { useRouter } from 'next/navigation';
import StaffForm from '../../components/StaffForm';
import { createStaff } from '../../lib/apiStaff';

interface Staff {
    id: number;
    nombre: string;
    correoElectronico: string;
    posicion: string;
    fechaContratacion: string;
}

export default function NewStaffPage() {
  const router = useRouter();

  async function handleSubmit(data: Staff) {
    try {
      await createStaff(data);
      router.push('/staff');
    } catch (error) {
      console.error('Error al crear el miembro del staff', error);
    }
  }

  return (
    <div>
      <h1>Crear Nuevo Proyecto</h1>
      <StaffForm onSubmit={handleSubmit} />
    </div>
  );
}