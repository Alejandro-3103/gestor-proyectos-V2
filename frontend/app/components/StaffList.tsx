'use client';

import { useState, useEffect } from 'react';
import { deleteStaff, fetchStaffById, fetchStaffs } from '../lib/apiStaff';
import Link from 'next/link';

// Definimos el tipo para Cliente
interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  contraseña: string;
  posicion: string;
  fechaContratacion: string;
}

// Props para StaffDetails
interface StaffDetailsProps {
  staff: Staff | null;
  onClose: () => void;
}

function StaffDetails({ staff, onClose }: StaffDetailsProps) {
  if (!staff) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{staff.nombre}</h3>
          <div className="mt-2 px-7 py-3 text-left">
            <p><strong>Email:</strong> {staff.correoElectronico}</p>
            <p><strong>Contraseña:</strong>********</p>
            <p><strong>posicion:</strong> {staff.posicion}</p>
            <p><strong>Fecha Contrato:</strong> {staff.fechaContratacion}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal StaffList
export default function StaffList() {
  const [staffs, setStaff] = useState<Staff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  useEffect(() => {
    loadStaff();
  }, []);

  async function loadStaff() {
    const data: Staff[] = await fetchStaffs();
    setStaff(data);
  }

  async function handleDelete(id: number) {
    try {
      await deleteStaff(id);
      setStaff(staffs.filter((staff: { id: number; }) => staff.id !== id));
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  }

  async function handleView(id: number) {
    try {
      const staff: Staff = await fetchStaffById(id);
      setSelectedStaff(staff);
    } catch (error) {
      console.error('Error al cargar los detalles del staff:', error);
    }
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Posicion</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {staffs.map((staff) => (
            <tr key={staff.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{staff.nombre}</div>
                <div className="text-sm text-gray-500 sm:hidden">{staff.correoElectronico}</div>
                <div className="text-sm text-gray-500 sm:hidden md:hidden">{staff.posicion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-900">{staff.correoElectronico}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                <div className="text-sm text-gray-900">{staff.posicion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex flex-col sm:flex-row sm:space-x-2">
                  <button onClick={() => handleView(staff.id)} className="text-indigo-600 hover:text-indigo-900 mb-1 sm:mb-0">Ver</button>
                  <Link href={`/staff/${staff.id}/edit`} className="text-green-600 hover:text-green-900 mb-1 sm:mb-0">Editar</Link>
                  <button onClick={() => handleDelete(staff.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStaff && (
        <StaffDetails staff={selectedStaff} onClose={() => setSelectedStaff(null)} />
      )}
    </div>
  );
}
