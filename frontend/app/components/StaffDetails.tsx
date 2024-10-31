// StaffDetails.tsx
'use client';
import React, { useState } from 'react';
import { fetchStaffAssignments, Assignment } from '../lib/apiPersonallProyecto';

interface StaffDetailsProps {
  staff: { id: number; nombre: string; correoElectronico: string; posicion: string; fechaContratacion: string };
}

const StaffDetails: React.FC<StaffDetailsProps> = ({ staff }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    fetchAssignments();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const fetchAssignments = async () => {
    try {
      const data = await fetchStaffAssignments(staff.id);
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-blue-600 hover:text-blue-900">
        Ver Detalles
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 md:p-0">
          {/* Reduciendo el ancho máximo del modal */}
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            {/* Header del modal */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800">{staff.nombre}</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Información general del personal */}
            <div className="p-4 space-y-2">
              <p>
                <strong>Email:</strong> {staff.correoElectronico}
              </p>
              <p>
                <strong>Posición:</strong> {staff.posicion}
              </p>
              <p>
                <strong>Fecha de Contratación:</strong> {new Date(staff.fechaContratacion).toLocaleDateString()}
              </p>
            </div>

            {/* Asignaciones */}
            <div className="p-4 space-y-4">
              <h3 className="text-md font-semibold text-gray-800">Asignaciones</h3>
              {loading ? (
                <p>Cargando asignaciones...</p>
              ) : assignments.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {assignments.map((assignment) => (
                    <li key={assignment.proyectoId} className="py-3">
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-gray-800">
                          Proyecto: {assignment.proyecto.nombre}
                        </p>
                        <div className="flex flex-col sm:space-y-1">
                          <p className="text-sm text-gray-500">
                            <strong>Tarea:</strong> {assignment.rol}
                          </p>
                          <p className="text-sm text-gray-500">
                            <strong>Fecha Asignación:</strong>{' '}
                            {new Date(assignment.fechaAsignacion).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            <strong>Estado:</strong> {assignment.proyecto.estado}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay asignaciones para este miembro del staff.</p>
              )}
            </div>

            {/* Footer del modal */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={handleClose}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition duration-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetails;

