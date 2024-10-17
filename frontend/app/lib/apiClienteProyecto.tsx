const API_URL = 'http://localhost:4000'; // Adjust this to your backend URL

export const asignarClienteAProyecto = async (clienteId: number, proyectoId: number) => {
  try {
    console.log('Sending request with:', { clienteId, proyectoId });
    const response = await fetch(`${API_URL}/cliente-proyecto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clienteId, proyectoId }),
    });

    const data = await response.json();
    console.log('Response data:', data);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(data)}`);
    }

    return data;
  } catch (error) {
    console.error('Error in asignarClienteAProyecto:', error);
    throw error;
  }
};

export async function removeClienteFromProyecto(clienteId: number, proyectoId: number) {
  try {
    const response = await fetch(`${API_URL}/cliente-proyecto`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clienteId, proyectoId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (error) {
    console.error("Error removing client from project:", error);
    throw error;
  }
}

export const getClientesForProyecto = async (proyectoId: number) => {
  const response = await fetch(`${API_URL}/cliente-proyecto/proyecto/${proyectoId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};