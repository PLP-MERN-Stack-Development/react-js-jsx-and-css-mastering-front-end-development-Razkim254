import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">MyApp</Link>
      <div className="space-x-4">
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </div>
    </nav>
  );
}
