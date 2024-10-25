const API_URL = 'http://localhost:4000'; // Ajusta esto a la URL de tu backend

interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  contraseña: string;
  posicion: string;
  fechaContratacion: string;
}


export async function fetchStaffs() {
  const res = await fetch(`${API_URL}/staff`);
  return res.json();
}

export async function fetchStaff(id: number): Promise<Staff>{
    try {
      const res = await fetch(`${API_URL}/staff/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching staff:", error);
      throw error;
    }
  }

export async function createStaff(data: Staff) {
  const res = await fetch(`${API_URL}/staff`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateStaff(id: number, data: Staff): Promise<Staff> {
  const res = await fetch(`${API_URL}/staff/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteStaff(id: number) {
    const response = await fetch(`${API_URL}/staff/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const text = await response.text();
    if (!text) {
      return {}; 
    }
  
    return JSON.parse(text); 
}

export async function fetchStaffById(id: number) {
    const response = await fetch(`${API_URL}/staff/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch staff');
    }
    return response.json();
}