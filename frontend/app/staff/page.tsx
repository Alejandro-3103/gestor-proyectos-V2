import StaffList from '../components/StaffList';
import Link from 'next/link';

export default function StaffPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-gray-800">Staff</h2>
        <Link
          href="/staff/new"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Nuevo Staff
        </Link>
      </div>
      <StaffList />
    </div>
  );
}
