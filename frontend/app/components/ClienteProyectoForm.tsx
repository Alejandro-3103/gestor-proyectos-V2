"use client";
import React, { useState, useEffect } from 'react';
import { fetchClientes } from '../lib/apiClientes';
import { fetchProyectos } from '../lib/apiProyectos';
import { asignarClienteAProyecto, removeClienteFromProyecto, getClientesForProyecto } from '../lib/apiClienteProyecto';

interface Cliente {
  id: number;
  nombre: string;
}

interface Proyecto {
  id: number;
  nombre: string;
}

interface ClienteProyecto {
  id: number;
  clienteId: number;
  proyectoId: number;
  fechaAsignacion: string;
  cliente: Cliente;
}

const ClienteProyectoForm: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<string>('');
  const [selectedProyecto, setSelectedProyecto] = useState<string>('');
  const [clientesAsignados, setClientesAsignados] = useState<ClienteProyecto[]>([]);

  useEffect(() => {
    fetchClientes().then(setClientes);
    fetchProyectos().then(setProyectos);
  }, []);

  useEffect(() => {
    if (selectedProyecto) {
      getClientesForProyecto(Number(selectedProyecto))
        .then(setClientesAsignados)
        .catch(error => {
          console.error('Error fetching clients for project:', error);
        });
    }
  }, [selectedProyecto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await asignarClienteAProyecto(Number(selectedCliente), Number(selectedProyecto));
      alert('Cliente asignado al proyecto exitosamente');
      const updatedClientes = await getClientesForProyecto(Number(selectedProyecto));
      setClientesAsignados(updatedClientes);
    } catch (error) {
      console.error('Error al asignar cliente al proyecto:', error);
    }
  };

  const handleRemoveCliente = async (clienteId: number) => {
    try {
      await removeClienteFromProyecto(clienteId, Number(selectedProyecto));
      alert('Cliente removido del proyecto exitosamente');
      const updatedClientes = await getClientesForProyecto(Number(selectedProyecto));
      setClientesAsignados(updatedClientes);
    } catch (error) {
      console.error('Error al remover cliente del proyecto:', error);
      alert('Error al remover cliente del proyecto');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={selectedCliente}
          onChange={(e) => setSelectedCliente(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccione un cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id.toString()}>
              {cliente.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedProyecto}
          onChange={(e) => setSelectedProyecto(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccione un proyecto</option>
          {proyectos.map((proyecto) => (
            <option key={proyecto.id} value={proyecto.id.toString()}>
              {proyecto.nombre}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Asignar Cliente a Proyecto
        </button>
      </form>

      {selectedProyecto && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Clientes asignados al proyecto:</h3>
          <ul className="list-disc pl-4">
            {clientesAsignados.map((clienteProyecto) => (
              <li key={clienteProyecto.id}>
                {clienteProyecto.cliente?.nombre || 'Nombre no disponible'}
                <button
                  onClick={() => handleRemoveCliente(clienteProyecto.clienteId)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClienteProyectoForm;
