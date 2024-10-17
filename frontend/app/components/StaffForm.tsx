'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  posicion: string;
  fechaContratacion: string;
}

interface StaffFormProps {
  staff?: Staff;
  onSubmit: (formData: Staff) => void;
}

const StaffForm: React.FC<StaffFormProps> = ({ staff, onSubmit }) => {
  const [formData, setFormData] = useState<Staff>({
    id: 0,
    nombre: '',
    correoElectronico: '',
    posicion: '',
    fechaContratacion: '',
  });

  useEffect(() => {
    if (staff) {
      // Formatear la fecha antes de establecerla en el estado
      const formattedStaff = {
        ...staff,
        fechaContratacion: formatDate(staff.fechaContratacion)
      };
      setFormData(formattedStaff);
    }
  }, [staff]);

  // Función para formatear la fecha
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input
          type="text"
          id="correoElectronico"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="posicion" className="block text-sm font-medium text-gray-700">Posición</label>
        <input
          type="text"
          id="posicion"
          name="posicion"
          value={formData.posicion}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="fechaContratacion" className="block text-sm font-medium text-gray-700">Fecha de Contratacion</label>
        <input
          type="date"
          id="fechaContratacion"
          name="fechaContratacion"
          value={formData.fechaContratacion}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Guardar Cliente
      </button>
    </form>
  );
}

export default StaffForm;