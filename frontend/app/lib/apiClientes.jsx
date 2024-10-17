const API_URL = 'http://localhost:4000'; // Ajusta esto a la URL de tu backend

export async function fetchClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
}

export async function fetchCliente(id) {
    try {
      const res = await fetch(`${API_URL}/clientes/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching cliente:", error);
      throw error;
    }
  }

export async function createCliente(data) {
  const res = await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateCliente(id, data) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCliente(id) {
    const response = await fetch(`${API_URL}/clientes/${id}`, {
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

export async function fetchClienteById(id) {
    const response = await fetch(`${API_URL}/clientes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cliente');
    }
    return response.json();
}