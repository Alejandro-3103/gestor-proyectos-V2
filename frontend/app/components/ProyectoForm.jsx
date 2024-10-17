'use client';

import { useState, useEffect } from 'react';

export default function ProyectoForm({ proyecto, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    estado: '',
  });

  useEffect(() => {
    if (proyecto) {
      setFormData({
        ...proyecto,
        fechaInicio: proyecto.fechaInicio ? new Date(proyecto.fechaInicio).toISOString().split('T')[0] : '',
        fechaFin: proyecto.fechaFin ? new Date(proyecto.fechaFin).toISOString().split('T')[0] : '',
      });
    }
  }, [proyecto]);

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
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
        <input
          type="date"
          id="fechaInicio"
          name="fechaInicio"
          value={formData.fechaInicio}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="fechaFin" className="block text-sm font-medium text-gray-700">fecha Final</label>
        <input
          type="date"
          id="fechaFin"
          name="fechaFin"
          value={formData.fechaFin}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Guardar Proyecto
      </button>
    </form>
  );
}