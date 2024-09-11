import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/company/SideBar';

const DashBoard = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
