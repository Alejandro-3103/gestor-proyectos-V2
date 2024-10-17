import React from 'react';
import ClienteProyectoForm from '../components/ClienteProyectoForm';
import StaffProyectoForm from '../components/StaffProyectoForm';

const ProjectAssignments = () => {
  return (
    <div>
      <p>Project Assignments</p>
      <p>Assign Client to Project</p>
      <ClienteProyectoForm />
      <p>Assign Staff to Project</p>
      <StaffProyectoForm />
    </div>
  );
};

export default ProjectAssignments;