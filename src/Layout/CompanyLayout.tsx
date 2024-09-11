import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/company/Footer';
import Header from '../components/company/Header';

const CompanyLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default CompanyLayout;
