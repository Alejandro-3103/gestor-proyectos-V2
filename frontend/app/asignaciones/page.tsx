import React from 'react';
import ClienteProyectoForm from '../components/ClienteProyectoForm';
import StaffProyectoForm from '../components/StaffProyectoForm';

const ProjectAssignments = async () => {

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Asignaciones de Proyectos</h1>     
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Asignar Cliente a Proyecto</h2>
        <ClienteProyectoForm />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Asignar Staff a Proyecto</h2>
        <StaffProyectoForm />
      </section>
    </div>
  );
};

export default ProjectAssignments;    