const API_URL = 'http://localhost:4000'; // Ajusta esto a la URL de tu backend

export async function fetchProyectos() {
  const res = await fetch(`${API_URL}/proyectos`);
  return res.json();
}

export async function fetchProyecto(id) {
    try {
      const res = await fetch(`${API_URL}/proyectos/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching proyecto:", error);
      throw error;
    }
  }

export async function createProyecto(data) {
  const res = await fetch(`${API_URL}/proyectos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProyecto(id, data) {
  const res = await fetch(`${API_URL}/proyectos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteProyecto(id) {
    const response = await fetch(`${API_URL}/proyectos/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    // Añade este bloque para manejar respuestas vacías
    const text = await response.text();
    if (!text) {
      return {}; // Retorna un objeto vacío si no hay contenido
    }
  
    return JSON.parse(text); // Parsea el texto a JSON si hay contenido
}

// In apiProyectos.js
export async function fetchPersonalProyecto(proyectoId) {
    const response = await fetch(`${API_URL}/proyectos/${proyectoId}/personal`);
    if (!response.ok) {
      throw new Error('Failed to fetch personal');
    }
    return response.json();
  }
  
  export async function fetchClientesProyecto(proyectoId) {
    const response = await fetch(`${API_URL}/proyectos/${proyectoId}/clientes`);
    if (!response.ok) {
      throw new Error('Failed to fetch clientes');
    }
    return response.json();
  }