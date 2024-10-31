// app/lib/apiStaff.tsx
const getApiUrl = 'http://backend:4000';

interface Staff {
  id: number;
  nombre: string;
  correoElectronico: string;
  contraseña: string;
  posicion: string;
  fechaContratacion: string;
}

export async function fetchStaffs() {
  const API_URL = getApiUrl;
  try {
    console.log('Fetching from:', `${API_URL}/staff`);
    const response = await fetch(`${API_URL}/staff`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching staff data:', error);
    return [];
  }
}

export async function fetchStaffsLocalhost() {
  const API_URL = 'http://localhost:4000';
  try {
    console.log('Fetching from:', `${API_URL}/staff`);
    const response = await fetch(`${API_URL}/staff`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching staff data:', error);
    return [];
  }
}

export async function fetchStaff(id: number): Promise<Staff> {
  try {
    console.log(`Fetching staff with id: ${id}`);
    const res = await fetch(`http://localhost:4000/staff/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log('Fetched staff data:', data);
    return data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
}

export async function createStaff(data: Staff) {
  const res = await fetch(`http://localhost:4000/staff`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateStaff(id: number, data: Staff): Promise<Staff> {
  const res = await fetch(`http://localhost:4000/staff/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteStaff(id: number) {
  const API_URL = getApiUrl;
  try {
    console.log(`Deleting staff with id: ${id}`);
    console.log(`API URL: ${API_URL}`);
    const response = await fetch(`${API_URL}/staff/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log('Delete response:', result);
    return result;
  } catch (error) {
    console.error('Error in deleteStaff:', error);
    throw error;
  }
}

export async function fetchStaffById(id: number) {
  const API_URL = getApiUrl;
    const response = await fetch(`${API_URL}/staff/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch staff');
    }
    return response.json();
}