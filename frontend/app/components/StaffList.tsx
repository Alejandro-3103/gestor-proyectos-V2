// app/components/StaffList.tsx
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { fetchStaffs } from '../lib/apiStaff';
import StaffDetails from './StaffDetails'; // Mantén la importación
import DeleteButton from './DeleteButtonStaff';

interface Proyecto {
  id: number;
  nombre: string;
}

interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  posicion: string;
  fechaContratacion: string;
  proyectos?: Proyecto[]; // Agregar proyectos si los necesitas
}

export default async function StaffList() {
  noStore();
  const staffs: Staff[] = await fetchStaffs();

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Posición</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {staffs.map((staff: Staff) => (
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
                  <div className="flex flex-col items-center sm:flex-row sm:space-x-2">
                    <Link href={`/staff/${staff.id}/edit`} className="text-green-600 hover:text-green-900 mb-1 sm:mb-0">
                      Editar
                    </Link>
                    <DeleteButton staffId={staff.id} />
                    <StaffDetails staff={staff} /> {/* Pasa el staff como prop */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

