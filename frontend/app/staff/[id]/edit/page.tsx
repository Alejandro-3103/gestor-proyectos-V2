'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import StaffForm from '../../../components/StaffForm';
import { fetchStaff, updateStaff } from '../../../lib/apiStaff';

interface Staff {
    id: number;
    nombre: string;
    correoElectronico: string;
    contraseña: string;
    posicion: string;
    fechaContratacion: string;
}

interface Params {
  id: string;
}

export default function EditStaffPage({ params }: { params: Params }) {
  const router = useRouter();
  const id = parseInt(params.id, 10);
  const [staff, setStaff] = useState<Staff | null>(null);

  useEffect(() => {
    if (id) {
      fetchStaff(id).then(setStaff);
    }
  }, [id]);

  async function handleSubmit(data: Staff) {
    await updateStaff(id, data);
    router.push('/staff');
  }

  if (!staff) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Editar Staff</h1>
      <StaffForm staff={staff} onSubmit={handleSubmit} />
    </div>
  );
}