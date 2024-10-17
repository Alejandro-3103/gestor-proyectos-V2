'use client';

import { useState, useEffect } from 'react';
import { fetchClientes, deleteCliente, fetchClienteById } from '../lib/apiClientes';
import Link from 'next/link';

function ClienteDetails({ cliente, onClose }) {
  if (!cliente) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{cliente.nombre}</h3>
          <div className="mt-2 px-7 py-3 text-left">
            <p><strong>Email:</strong> {cliente.correoElectronico}</p>
            <p><strong>Empresa:</strong> {cliente.Empresa}</p>
            <p><strong>Fecha registro:</strong> {cliente.fechaRegistro}</p>
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

export default function ClienteList() {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);

  useEffect(() => {
    loadClientes();
  }, []);

  async function loadClientes() {
    const data = await fetchClientes();
    setClientes(data);
  }

  async function handleDelete(id) {
    try {
      await deleteCliente(id);
      setClientes(clientes.filter(cliente => cliente.id !== id));
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  }

  async function handleView(id) {
    try {
      const cliente = await fetchClienteById(id);
      setSelectedCliente(cliente);
    } catch (error) {
      console.error('Error al cargar los detalles del cliente:', error);
    }
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Empresa</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{cliente.nombre}</div>
                <div className="text-sm text-gray-500 sm:hidden">{cliente.correoElectronico}</div>
                <div className="text-sm text-gray-500 sm:hidden md:hidden">{cliente.Empresa}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-900">{cliente.correoElectronico}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                <div className="text-sm text-gray-900">{cliente.Empresa}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex flex-col sm:flex-row sm:space-x-2">
                  <button onClick={() => handleView(cliente.id)} className="text-indigo-600 hover:text-indigo-900 mb-1 sm:mb-0">Ver</button>
                  <Link href={`/clientes/${cliente.id}/edit`} className="text-green-600 hover:text-green-900 mb-1 sm:mb-0">Editar</Link>
                  <button onClick={() => handleDelete(cliente.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCliente && (
        <ClienteDetails cliente={selectedCliente} onClose={() => setSelectedCliente(null)} />
      )}
    </div>
  );
}