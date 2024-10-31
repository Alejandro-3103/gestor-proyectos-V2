// app/staff/new/page.tsx
"use client";

import StaffForm from '../../components/StaffForm';
import { createStaff } from '../../lib/apiStaff';

interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  contraseña: string;
  posicion: string;
  fechaContratacion: string;
}

export default function NewStaffPage() {
  async function handleSubmit(data: Staff) {
    try {
        await createStaff(data);
        window.location.href = '/staff'; // Redirección en el cliente
    } catch (error) {
        console.error('Error creating staff:', error);
    }
  }
  return (
    <div> 
      <h1>Crear Nuevo Staff</h1>
      <StaffForm onSubmit={handleSubmit} />
    </div>
  );
}   
