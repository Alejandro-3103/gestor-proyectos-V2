'use client';

import React from 'react';
import { logout } from '../lib/apiAuth';

const LogoutButton = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
