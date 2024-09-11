import React, { useState } from 'react';
import { MoreHorizontal, X } from 'react-feather';
import { MdWork, MdHourglassEmpty } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import { FaCreditCard } from 'react-icons/fa';
import { FiShare2, FiEye, FiFlag } from 'react-icons/fi';

function Overview() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [jobs, setJobs] = useState([
    { jobTitle: 'React Developer', status: 'Đang Hoạt Động', applications: '4 Ứng Tuyển', timeRemaining: 'Còn 5d 4h' },
    { jobTitle: 'Vue Developer', status: 'Đang Hoạt Động', applications: '2 Ứng Tuyển', timeRemaining: 'Còn 3d 1h' },
    { jobTitle: 'Angular Developer', status: 'Đang Hoạt Động', applications: '5 Ứng Tuyển', timeRemaining: 'Còn 1d 12h' },
  ]);

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const handleToggleStatus = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = updatedJobs[index].status === 'Đang Hoạt Động' ? 'Đã Hết Hạn' : 'Đang Hoạt Động';
    setJobs(updatedJobs);
    setIsDropdownOpen(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Tổng Quan</h1>
      <p className="text-lg text-gray-600">
        Dưới đây là các hoạt động hàng ngày và cơ hội nghề nghiệp của bạn
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[200px] text-center transition-transform transform hover:scale-105">
          <MdWork className="text-4xl mb-2 text-blue-600" />
          <h2 className="text-3xl font-semibold text-gray-800">70</h2>
          <p className="text-lg text-gray-600">Việc làm đang mở</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[200px] text-center transition-transform transform hover:scale-105">
          <AiOutlineSave className="text-4xl mb-2 text-green-600" />
          <h2 className="text-3xl font-semibold text-gray-800">5</h2>
          <p className="text-lg text-gray-600">Ứng viên đã lưu</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[200px] text-center transition-transform transform hover:scale-105">
          <MdHourglassEmpty className="text-4xl mb-2 text-yellow-600" />
          <h2 className="text-3xl font-semibold text-gray-800">1</h2>
          <p className="text-lg text-gray-600">Việc làm đang chờ</p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
        <div className="text-lg font-semibold mb-4 flex items-center">
          <FaCreditCard className="text-2xl text-blue-600 mr-2" />
          Kế Hoạch Giá Cả - Tính Năng Còn Lại
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors">
            <div className="text-primary text-2xl font-semibold">20</div>
            <div className="text-gray-600">Việc làm đang hoạt động</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors">
            <div className="text-secondary text-2xl font-semibold">1</div>
            <div className="text-gray-600">Việc làm nổi bật</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors">
            <div className="text-accent text-2xl font-semibold">7</div>
            <div className="text-gray-600">Việc làm nổi trội</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors">
            <div className="text-info text-2xl font-semibold">20</div>
            <div className="text-gray-600">Lượt xem hồ sơ</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Nâng cấp gói
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Việc Làm Gần Đây</h2>
        <table className="table-auto w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">Công Việc</th>
              <th className="p-3 text-left">Trạng Thái</th>
              <th className="p-3 text-left">Số Lượng Ứng Tuyển</th>
              <th className="p-3 text-left">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
              >
                <td className="p-4 border-b border-gray-300">
                  <p className="font-semibold text-gray-800">{job.jobTitle}</p>
                  <p className="text-gray-600">Thực Tập | {job.timeRemaining}</p>
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-800">{job.status}</td>
                <td className="p-4 border-b border-gray-300 text-gray-800">{job.applications}</td>
                <td className="p-4 border-b border-gray-300 flex items-center space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Xem Ứng Viên
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none transition-colors"
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </button>
                    {isDropdownOpen === index && (
                      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <a
                            href="#"
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <FiShare2 className="h-5 w-5 text-gray-600" />
                            <span>Quảng Bá Công Việc</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <FiEye className="h-5 w-5 text-gray-600" />
                            <span>Xem Chi Tiết</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleToggleStatus(index)}
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            {jobs[index].status === 'Đang Hoạt Động' ? (
                              <>
                                <FiFlag className="h-5 w-5 text-gray-600" />
                                <span>Cho Hết Hạn</span>
                              </>
                            ) : (
                              <>
                                <FiEye className="h-5 w-5 text-gray-600" />
                                <span>Kích Hoạt Lại</span>
                              </>
                            )}
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Overview;
