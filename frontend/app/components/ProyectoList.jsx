'use client';

import { useState, useEffect } from 'react';
import { fetchProyectos, deleteProyecto, fetchPersonalProyecto, fetchClientesProyecto } from '../lib/apiProyectos';
import Link from 'next/link';

function ProyectoDetails({ proyecto, onClose }) {
  const [activeTab, setActiveTab] = useState('general');
  const [personal, setPersonal] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function loadPersonalAndClientes() {
      try {
        const personalData = await fetchPersonalProyecto(proyecto.id);
        const clientesData = await fetchClientesProyecto(proyecto.id);
        setPersonal(personalData);
        setClientes(clientesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }
    loadPersonalAndClientes(); 
  }, [proyecto.id]); 
     
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{proyecto.nombre}</h3>
          <div className="mt-2 px-7 py-3">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  className={`${activeTab === 'general' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  onClick={() => setActiveTab('general')}
                >
                  General         
                </button>
                <button
                  className={`${activeTab === 'personal' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}
                  onClick={() => setActiveTab('personal')}
                >
                  Personal 
                </button>
                <button
                  className={`${activeTab === 'clientes' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}
                  onClick={() => setActiveTab('clientes')}
                >
                  Clientes
                </button>
              </nav>
            </div>
            <div className="mt-4 text-left">
              {activeTab === 'general' && (
                <div>
                  <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
                  <p><strong>Fecha de inicio:</strong> {new Date(proyecto.fechaInicio).toLocaleDateString('es-ES')}</p>
                  <p><strong>Fecha final:</strong> {proyecto.fechaFin ? new Date(proyecto.fechaFin).toLocaleDateString('es-ES') : 'No definida'}</p>
                  <p><strong>Estado:</strong> {proyecto.estado}</p>
                </div>
              )}
              {activeTab === 'personal' && (
                <ul>
                  {personal.length > 0 ? (
                    personal.map(persona => (
                      <li key={persona.id}>
                        {persona.personal.nombre || 'Nombre no disponible'} - {persona.rol || 'Rol no especificado'}
                      </li>
                    ))
                  ) : (
                    <li>No hay personal asignado</li>
                  )}
                </ul>
              )}
              {activeTab === 'clientes' && (
                <ul>
                  {clientes.length > 0 ? (
                    clientes.map(cliente => (
                      <li key={cliente.id}>{cliente.cliente.nombre || 'Nombre no disponible'} - {cliente.cliente.Empresa || 'Empresa no disponible'}</li>
                    ))
                  ) : (
                    <li>No hay clientes asignados</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProyectoList() {
  const [proyectos, setProyectos] = useState([]);
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  
  useEffect(() => {
    loadProyectos();
  }, []);

  async function loadProyectos() {
    const data = await fetchProyectos();
    setProyectos(data);
  }

  async function handleDelete(id) {
    try {
      await deleteProyecto(id);
      setProyectos(proyectos.filter(proyecto => proyecto.id !== id));
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {proyectos.map((proyecto) => (
              <tr key={proyecto.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{proyecto.nombre}</div>
                  <div className="text-sm text-gray-500 sm:hidden">{proyecto.estado}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm text-gray-900">{proyecto.estado}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex flex-col sm:flex-row sm:space-x-2">
                    <button
                      onClick={() => setSelectedProyecto(proyecto)}
                      className="text-indigo-600 hover:text-indigo-900 mb-1 sm:mb-0"
                    >
                      Ver
                    </button>
                    <Link href={`/proyectos/${proyecto.id}/edit`} className="text-green-600 hover:text-green-900 mb-1 sm:mb-0">
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(proyecto.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedProyecto && (
        <ProyectoDetails proyecto={selectedProyecto} onClose={() => setSelectedProyecto(null)} />
      )}
    </div>
  );
}