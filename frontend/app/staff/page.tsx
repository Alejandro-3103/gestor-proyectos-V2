import StaffList from '../components/StaffList';
import Link from 'next/link';

export default function StaffPage() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Staff</h2>
          <Link href="/staff/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Nuevo Staff
          </Link>
        </div>
        <StaffList />
      </div>
    );
  }