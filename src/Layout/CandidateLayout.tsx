import { Outlet } from "react-router-dom";
import Footer from "../components/company/Footer";
import Header from "../components/company/Header";

const CandidateLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CandidateLayout;
