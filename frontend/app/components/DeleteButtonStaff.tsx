// components/DeleteButton.tsx
'use client'

import { useState } from 'react';
import { deleteStaffAction } from '../actions/deleteStaff';

interface DeleteButtonProps {
  staffId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ staffId }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    try {
      await deleteStaffAction(staffId);
    } catch (error) {
      console.error('Error deleting staff:', error);
      setError('Failed to delete staff. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };
     
  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="text-red-600 hover:text-red-900 disabled:text-gray-400"
      >
        {isDeleting ? 'Eliminando...' : 'Eliminar'}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}; 

export default DeleteButton;