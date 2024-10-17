"use client";
import React, { useState, useEffect } from 'react';
import { fetchStaffs } from '../lib/apiStaff';
import { fetchProyectos } from '../lib/apiProyectos';
import { asignarStaffAProyecto, removeStaffFromProyecto, getStaffForProyecto } from '../lib/apiPersonallProyecto';

interface Personal {
  id: number;
  nombre: string;
  correoElectronico: string;
  posicion: string;
  fechaContratacion: string;
}

interface Proyecto {
  id: number;
  nombre: string;
}

interface PersonalProyecto {
  id: number;
  personalId: number;
  proyectoId: number;
  fechaAsignacion: string;
  rol: string;
  personal: Personal;
}

const StaffProyectoForm = () => {
  const [staff, setStaff] = useState<Personal[]>([]);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<string>('');
  const [selectedProyecto, setSelectedProyecto] = useState<string>('');
  const [rol, setRol] = useState<string>('');
  const [staffAsignado, setStaffAsignado] = useState<PersonalProyecto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [staffData, proyectosData] = await Promise.all([fetchStaffs(), fetchProyectos()]);
        setStaff(staffData);
        setProyectos(proyectosData);
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (selectedProyecto) {
      setIsLoading(true);
      getStaffForProyecto(Number(selectedProyecto))
        .then(data => {
          console.log('Staff asignado:', data); // For debugging
          setStaffAsignado(data);
        })
        .catch(error => console.error('Error fetching staff for proyecto:', error))
        .finally(() => setIsLoading(false));
    }
  }, [selectedProyecto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedStaff || !selectedProyecto || !rol) {
      alert('Por favor, complete todos los campos');
      return;
    }
    setIsLoading(true);
    try {
      console.log('Asignando staff:', selectedStaff, 'a proyecto:', selectedProyecto, 'con rol:', rol);
      await asignarStaffAProyecto(Number(selectedStaff), Number(selectedProyecto), rol);
      alert('Staff asignado al proyecto exitosamente');
      const updatedStaff = await getStaffForProyecto(Number(selectedProyecto));
      setStaffAsignado(updatedStaff);
      setSelectedStaff('');
      setRol('');
    } catch (error) {
      console.error('Error al asignar staff al proyecto:', error);
      alert('Error al asignar staff al proyecto');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveStaff = async (personalProyectoId: number) => {
    setIsLoading(true);
    try {
      // Optimistic update
      setStaffAsignado(prevStaff => prevStaff.filter(staff => staff.id !== personalProyectoId));
  
      await removeStaffFromProyecto(personalProyectoId);
      alert('Staff removido del proyecto exitosamente');
  
      // Fetch updated staff list to ensure consistency
      const updatedStaff = await getStaffForProyecto(Number(selectedProyecto));
      setStaffAsignado(updatedStaff);
    } catch (error) {
      console.error('Error al remover staff del proyecto:', error);
      // Revert optimistic update on error
      const updatedStaff = await getStaffForProyecto(Number(selectedProyecto));
      setStaffAsignado(updatedStaff);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedStaff}
          onChange={(e) => {
            console.log('Staff seleccionado:', e.target.value);
            setSelectedStaff(e.target.value);
          }}
        >
          <option value="">Seleccione un miembro del staff</option>
          {staff.map((s) => (
            <option key={s.id} value={s.id.toString()}>
              {s.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedProyecto}
          onChange={(e) => {
            console.log('Proyecto seleccionado:', e.target.value);
            setSelectedProyecto(e.target.value);
          }}
        >
          <option value="">Seleccione un proyecto</option>
          {proyectos.map((proyecto) => (
            <option key={proyecto.id} value={proyecto.id.toString()}>
              {proyecto.nombre || 'Proyecto sin nombre'}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          placeholder="Rol en el proyecto"
        />
        <button type="submit">Asignar Staff a Proyecto</button>
      </form>

      {selectedProyecto && (
        <div>
          <h3>Staff asignado al proyecto:</h3>
          <ul>
            {staffAsignado.map((personalProyecto) => (
              <li key={personalProyecto.id}>
                {personalProyecto.personal && personalProyecto.personal.nombre 
                  ? personalProyecto.personal.nombre 
                  : 'Nombre no disponible'} - Rol: {personalProyecto.rol || 'No especificado'}
                <button onClick={() => handleRemoveStaff(personalProyecto.id)}>
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

export default StaffProyectoForm;