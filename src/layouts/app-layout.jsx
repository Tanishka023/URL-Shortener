import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mat-10"></footer>
    </div>
  );
};

export default AppLayout;
