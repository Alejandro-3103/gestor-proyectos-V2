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

const ClienteProyectoForm: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<string>('');
  const [selectedProyecto, setSelectedProyecto] = useState<string>('');
  const [clientesAsignados, setClientesAsignados] = useState<Cliente[]>([]);

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
          // Handle the error appropriately (e.g., show an error message to the user)
        });
    }
  }, [selectedProyecto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await asignarClienteAProyecto(Number(selectedCliente), Number(selectedProyecto));
      alert('Cliente asignado al proyecto exitosamente');
      // Refresh the list of assigned clients
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
      getClientesForProyecto(Number(selectedProyecto)).then(setClientesAsignados);
    } catch (error) {
      console.error('Error al remover cliente del proyecto:', error);
      alert('Error al remover cliente del proyecto');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedCliente}
          onChange={(e) => setSelectedCliente(e.target.value)}
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
        >
          <option value="">Seleccione un proyecto</option>
          {proyectos.map((proyecto) => (
            <option key={proyecto.id} value={proyecto.id.toString()}>
              {proyecto.nombre}
            </option>
          ))}
        </select>
        <button type="submit">Asignar Cliente a Proyecto</button>
      </form>

      {selectedProyecto && (
        <div>
          <h3>Clientes asignados al proyecto:</h3>
          <ul>
            {clientesAsignados.map((cliente) => (
              <li key={cliente.id}>
                {cliente.nombre}
                <button onClick={() => handleRemoveCliente(cliente.id)}>
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