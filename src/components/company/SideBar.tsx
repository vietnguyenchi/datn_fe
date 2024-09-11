import React, { useState } from 'react';
import { FaPlus, FaSave, FaQuestionCircle, FaUserCheck, FaClipboardList, FaUser, FaBriefcase, FaCog, FaEnvelope, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Nút hamburger cho thiết bị di động */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-md z-50"
      >
        <span className="sr-only">Toggle Sidebar</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-base-200 z-40 transition-transform lg:translate-x-0 lg:relative lg:w-64 lg:flex lg:flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="h-full overflow-y-auto">
          <ul className="menu p-4 space-y-2">
            <li className="menu-title mb-4 text-xl font-semibold">
              <span>Bảng Điều Khiển Công Ty</span>
            </li>
            <li><a href="/company/dashboard" className="hover:text-primary"><FaClipboardList className="inline-block mr-2" />Tổng Quan</a></li>
            <li><a href="#my-profile" className="hover:text-primary"><FaUser className="inline-block mr-2" />Hồ Sơ Của Tôi</a></li>
            <li><a href="/company/dashboard/my-jobs" className="hover:text-primary"><FaBriefcase className="inline-block mr-2" />Công Việc Của Tôi</a></li>
            <li><a href="#post-job" className="hover:text-primary">
              <FaPlus className="inline-block mr-2" /> Đăng Tuyển Dụng
            </a></li>
            <li><a href="#saved-candidates" className="hover:text-primary">
              <FaSave className="inline-block mr-2" /> Ứng Viên Đã Lưu
            </a></li>
            <li><a href="#custom-questions" className="hover:text-primary">
              <FaQuestionCircle className="inline-block mr-2" /> Câu Hỏi Tùy Chỉnh
            </a></li>
            <li><a href="#plan-billing" className="hover:text-primary"><FaCalendarAlt className="inline-block mr-2" />Kế Hoạch & Thanh Toán</a></li>
            <li><a href="#message" className="hover:text-primary"><FaEnvelope className="inline-block mr-2" />Tin Nhắn</a></li>
            <li><a href="#verify-account" className="hover:text-primary">
              <FaUserCheck className="inline-block mr-2" /> Xác Minh Tài Khoản
            </a></li>
            <li><a href="#setting" className="hover:text-primary"><FaCog className="inline-block mr-2" />Cài Đặt</a></li>
            <li><a href="#log-out" className="hover:text-primary"><FaSignOutAlt className="inline-block mr-2" />Đăng Xuất</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
