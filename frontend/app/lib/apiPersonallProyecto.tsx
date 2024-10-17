const API_URL = 'http://localhost:4000'; // Adjust this to your backend URL

export const getStaffForProyecto = async (proyectoId: number) => {
    const response = await fetch(`${API_URL}/personal-proyecto/personal/${proyectoId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };
  
  export const asignarStaffAProyecto = async (staffId: number, proyectoId: number, rol: string) => {
    console.log('Enviando petición con:', { staffId, proyectoId, rol });
    const response = await fetch(`${API_URL}/personal-proyecto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ personalId: staffId, proyectoId, rol }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error al asignar staff: ${errorData.message}`);
    }
  
    return response.json();
  };

  export const removeStaffFromProyecto = async (personalProyectoId: number) => {
    try {
      const response = await fetch(`${API_URL}/personal-proyecto/${personalProyectoId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
      }
  
      // Check if the response has content before parsing
      const text = await response.text();
      return text ? JSON.parse(text) : null;
    } catch (error) {
      console.error('Error removing staff from project:', error);
      throw error;
    }
  };
