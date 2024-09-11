import React, { useState } from 'react';
import { MdFilterList } from 'react-icons/md';
import { MoreHorizontal } from 'react-feather';
import { FiEdit, FiCopy, FiEye, FiXCircle } from 'react-icons/fi';
import { BsFillMegaphoneFill } from 'react-icons/bs';

const jobs = [
  { title: 'Frontend Developer', type: 'Thực Tập', timeRemaining: 'Còn 2d 4h', status: 'Đang Hoạt Động', applications: 2 },
  { title: 'React Developer', type: 'Bán Thời Gian', timeRemaining: 'Còn 19h 22m', status: 'Đã Hết Hạn', applications: 3 },
  { title: 'UI/UX Designer', type: 'Hợp Đồng', timeRemaining: 'Còn 1d 4h', status: 'Đang Hoạt Động', applications: 1 },
  // Thêm các công việc khác ở đây
];

function MyJobs() {
  const [statusFilter, setStatusFilter] = useState('Tất Cả');
  const [applyOnFilter, setApplyOnFilter] = useState('Tất Cả');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isApplyOnDropdownOpen, setIsApplyOnDropdownOpen] = useState(false);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus = statusFilter === 'Tất Cả' || job.status === statusFilter;
    const matchesApplyOn = applyOnFilter === 'Tất Cả';
    return matchesStatus && matchesApplyOn;
  });

  const handleStatusClick = (e) => {
    e.stopPropagation();
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const handleApplyOnClick = (e) => {
    e.stopPropagation();
    setIsApplyOnDropdownOpen(!isApplyOnDropdownOpen);
  };

  const handleMoreActionsClick = (index, e) => {
    e.stopPropagation();
    setSelectedJobIndex(index === selectedJobIndex ? null : index);
  };

  // Hàm xử lý trạng thái công việc
  const handleToggleStatus = (index) => {
    const updatedJobs = [...filteredJobs];
    const currentStatus = updatedJobs[index].status;
    updatedJobs[index].status = currentStatus === 'Đang Hoạt Động' ? 'Đã Hết Hạn' : 'Đang Hoạt Động';
    setSelectedJobIndex(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Công Việc Của Tôi (103)</h1>

      {/* Bộ lọc */}
      <div className="flex items-center gap-4 mb-6">
        {/* Lọc Trạng Thái Công Việc */}
        <div className="relative">
          <button
            onClick={handleStatusClick}
            className="px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2 hover:bg-gray-300 transition-colors"
          >
            <MdFilterList className="text-gray-600" />
            <span className="text-gray-600">Trạng Thái Công Việc: {statusFilter}</span>
          </button>
          {isStatusDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-48 z-30">
              {['Tất Cả', 'Đang Hoạt Động', 'Đang Chờ', 'Đã Hết Hạn'].map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setIsStatusDropdownOpen(false); // Đóng dropdown sau khi chọn
                  }}
                  className={`block px-4 py-2 text-left w-full ${statusFilter === status ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 transition-colors`}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Lọc Kênh Ứng Tuyển */}
        <div className="relative">
          <button
            onClick={handleApplyOnClick}
            className="px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2 hover:bg-gray-300 transition-colors"
          >
            <MdFilterList className="text-gray-600" />
            <span className="text-gray-600">Kênh Ứng Tuyển: {applyOnFilter}</span>
          </button>
          {isApplyOnDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-48 z-30">
              {['Tất Cả', 'App', 'Email', 'Custom URL'].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setApplyOnFilter(option);
                    setIsApplyOnDropdownOpen(false); // Đóng dropdown sau khi chọn
                  }}
                  className={`block px-4 py-2 text-left w-full ${applyOnFilter === option ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 transition-colors`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bảng Công Việc */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">Công Việc</th>
              <th className="p-3 text-left">Trạng Thái</th>
              <th className="p-3 text-left">Ứng Viên</th>
              <th className="p-3 text-left">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
              >
                <td className="p-4 border-b border-gray-300">
                  <p className="font-semibold text-gray-800">{job.title}</p>
                  <p className="text-gray-600">{job.type} | {job.timeRemaining}</p>
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-800">{job.status}</td>
                <td className="p-4 border-b border-gray-300 text-gray-800">{job.applications} Ứng Viên</td>
                <td className="p-4 border-b border-gray-300 flex items-center space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Xem Ứng Viên
                  </button>
                  <div className="relative">
                    <button
                      onClick={(e) => handleMoreActionsClick(index, e)}
                      className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none transition-colors"
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </button>
                    {selectedJobIndex === index && (
                      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <a
                            href="#"
                            className=" px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <FiEye className="h-5 w-5 text-gray-600" />
                            <span>Xem chi tiết</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleToggleStatus(index)}
                            className=" px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            {job.status === 'Đang Hoạt Động' ? (
                              <>
                                <FiXCircle className="h-5 w-5 text-gray-600" />
                                <span>Đánh dấu đã hết hạn</span>
                              </>
                            ) : (
                              <>
                                <FiEye className="h-5 w-5 text-gray-600" />
                                <span>Kích hoạt lại</span>
                              </>
                            )}
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className=" px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <FiEdit className="h-5 w-5 text-gray-600" />
                            <span>Chỉnh sửa</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className=" px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <BsFillMegaphoneFill className="h-5 w-5 text-gray-600" />
                            <span>Quảng bá</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className=" px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <FiCopy className="h-5 w-5 text-gray-600" />
                            <span>Nhân bản</span>
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

export default MyJobs;
