import { Outlet } from "react-router-dom";
import Footer from "../components/company/Footer";
import Header from "../components/company/Header";

const CompanyLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CompanyLayout;
