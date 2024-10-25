
export const logout = async () => {
    try {
      const response = await fetch('http://localhost:4000/staff/auth/logout', {
        method: 'POST',
        credentials: 'include', // Para asegurarse de que las cookies se envíen correctamente
      });
  
      if (response.ok) {
        console.log('Sesión cerrada exitosamente');
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = '/login'; 
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
    }
};



