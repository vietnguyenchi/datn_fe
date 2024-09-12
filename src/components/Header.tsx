import {
	BriefcaseBusiness,
	ChevronDown,
	PhoneCall,
	Search,
} from 'lucide-react';

const Header = () => {
	return (
		<>
			<div className="container max-w-[1320px] mx-auto h-fit text-gray-500 font-normal my-2 flex items-center">
				<ul className="flex items-center gap-10">
					<li className="hover:text-[#0a65cc]">Home</li>
					<li className="hover:text-[#0a65cc]">Find Jobs</li>
					<li className="hover:text-[#0a65cc]">Candidate</li>
					<li className="hover:text-[#0a65cc]">Companies</li>
					<li className="hover:text-[#0a65cc]">Blog</li>
					<li className="hover:text-[#0a65cc]">Pricing</li>
					<li className="hover:text-[#0a65cc]">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn m-0 btn-sm bg-white hover:bg-white shadow-none border-none text-gray-500 font-medium flex items-center gap-2 hover:text-[#0a65cc]"
							>
								Extra Pages
								<ChevronDown size={20} />
							</div>
							<ul
								tabIndex={0}
								className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
							>
								<li>
									<a>Private Policy</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="phone flex items-center gap-2 ms-auto text-[#000]">
					<PhoneCall size={20} />
					<p>01 234 567 890</p>
				</div>
			</div>
			<div className="bg-[#0a65cc]">
				<div className="container max-w-[1320px] h-fit py-5 mx-auto flex items-center">
					<div className="logo flex items-center gap-2">
						<BriefcaseBusiness size={40} color="#fff" />
						<h1 className="text-2xl font-medium text-white">JobSeeker</h1>
					</div>
					<label
						data-theme="retro"
						className="input input-bordered flex items-center bg-white ms-10"
					>
						<select className="select border-none outline-none focus:outline-none bg-white text-gray-700">
							<option value="job">Jobs</option>
							<option value="company">Companies</option>
							<option value="candidate">Candidates</option>
						</select>
						<div className="divider divider-horizontal h-[60%] my-auto mx-0 w-[1px] bg-gray-50 me-3"></div>
						<Search size={20} color="#0a65cc" className="me-2" />
						<input
							id="search-input"
							type="text"
							className="grow border-none outline-none focus:outline-none focus:border-none w-[25vw]"
							placeholder="Job Title or Keyword"
						/>
					</label>

					<div className="buttons flex items-center gap-2 ms-auto">
						<button className="btn btn-outline text-[#fff] hover:bg-[#fff] hover:text-[#0a65cc] hover:border-[#fff] text-lg px-10 rounded-[4px] tracking-wider">
							Login
						</button>
						<button className="btn btn-active bg-[#fff] text-[#0a65cc] text-lg px-10	 rounded-[4px] tracking-wider">
							Register
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
