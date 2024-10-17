'use client';

import { useState, useEffect } from 'react';
import { getUsers, getTimeEntries } from '../lib/clockifyApi';

export default function StaffTimeEntries() {
  const [users, setUsers] = useState([]);
  const [timeEntries, setTimeEntries] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await getUsers();
        console.log('Users data:', usersData);
        setUsers(usersData);

        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        for (const user of usersData) {
          try {
            const entries = await getTimeEntries(user.id, oneWeekAgo.toISOString(), now.toISOString());
            console.log(`Time entries for ${user.name}:`, entries);
            setTimeEntries(prev => ({...prev, [user.id]: entries}));
          } catch (err) {
            console.error(`Error fetching time entries for ${user.name}:`, err);
          }
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tiempos del Personal</h2>
      {users.map(user => (
        <div key={user.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg">{user.name}</h3>
          {timeEntries[user.id] && timeEntries[user.id].length > 0 ? (
            <ul className="mt-2 space-y-2">
              {timeEntries[user.id].map(entry => (
                <li key={entry.id} className="text-sm">
                  {new Date(entry.timeInterval.start).toLocaleString()} - 
                  {new Date(entry.timeInterval.end).toLocaleString()}: 
                  {entry.description || 'Sin descripción'}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay entradas de tiempo para este usuario.</p>
          )}
        </div>
      ))}
    </div>
  );
}