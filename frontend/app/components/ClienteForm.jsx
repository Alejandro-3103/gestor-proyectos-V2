'use client';

import { useState, useEffect } from 'react';

export default function ClienteForm({ cliente, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correoElectronico: '',
    Empresa: '',
    fechaRegistro: '',
  });

  useEffect(() => {
    if (cliente) {
      setFormData(cliente);
    }
  }, [cliente]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
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
        <label htmlFor="Empresa" className="block text-sm font-medium text-gray-700">Empresa</label>
        <input
          type="text"
          id="Empresa"
          name="Empresa"
          value={formData.Empresa}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="fechaRegistro" className="block text-sm font-medium text-gray-700">Fecha de Registro</label>
        <input
          type="date"
          id="fechaRegistro"
          name="fechaRegistro"
          value={formData.fechaRegistro}
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