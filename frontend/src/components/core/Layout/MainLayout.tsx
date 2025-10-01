import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-800">Lista Inteiros</h1>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Lista Inteiros. All rights reserved.</p>
      </footer>
    </div>
  );
};
