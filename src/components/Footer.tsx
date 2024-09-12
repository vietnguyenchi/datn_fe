import {
	BriefcaseBusiness,
	Facebook,
	Instagram,
	Twitter,
	Youtube,
} from 'lucide-react';

const Footer = () => {
	return (
		<div className="bg-[#18191c]">
			<div className="container py-1g max-w-[1320px] mx-auto py-12 h-fit grid grid-cols-6 text-[#9199a3]">
				<div className="col-span-2">
					<div className="logo flex items-center gap-2">
						<BriefcaseBusiness size={40} color="#0a65cc" />
						<h1 className="text-2xl font-medium text-[#0a65cc]">
							JobSeeker
						</h1>
					</div>
					<p className="text-xl">
						Call Now: <span className="text-white">319-555-0115</span>
					</p>
					<p className="max-w-[70%]">
						Discover tailored opportunities for job seekers and top talent
						for employers
					</p>
				</div>
				<div className="col-span-1">
					<ul>
						<li className="text-xl mb-4 text-white">Company</li>
						<li className="text-lg mb-4">About</li>
						<li className="text-lg mb-4">Contact</li>
						<li className="text-lg mb-4">Pricing</li>
						<li className="text-lg mb-4">Privacy Policy</li>
						<li className="text-lg mb-4">Blog</li>
					</ul>
				</div>
				<div className="col-span-1">
					<ul>
						<li className="text-xl mb-4 text-white">Candidate</li>
						<li className="text-lg mb-4">Browse Jobs</li>
						<li className="text-lg mb-4">Browse Candidates</li>
						<li className="text-lg mb-4">Candidate Dashboard</li>
						<li className="text-lg mb-4">Saved Jobs</li>
					</ul>
				</div>
				<div className="col-span-1">
					<ul>
						<li className="text-xl mb-4 text-white">Employer</li>
						<li className="text-lg mb-4">Post a Job</li>
						<li className="text-lg mb-4">Browse Companies</li>
						<li className="text-lg mb-4">Company Dashboard</li>
						<li className="text-lg mb-4">Application</li>
					</ul>
				</div>
				<div className="col-span-1">
					<ul>
						<li className="text-xl mb-4 text-white">Support</li>
						<li className="text-lg mb-4">FAQ</li>
						<li className="text-lg mb-4">Privacy & Policy</li>
						<li className="text-lg mb-4">Terms & Conditions</li>
						<li className="text-lg mb-4">Refund Policy</li>
					</ul>
				</div>
			</div>
			<hr className="bg-slate-800" />
			<div className="container py-6 max-w-[1320px] mx-auto h-fit">
				<div className="flex justify-between">
					<p className="text-[#767f8c]">
						© JobSeeker 2024 | All Rights Reserved
					</p>
					<div className="flex items-center">
						<Facebook className="ms-5" size={24} color="#767f8c" />
						<Instagram className="ms-5" size={24} color="#767f8c" />
						<Youtube className="ms-5" size={24} color="#767f8c" />
						<Twitter className="ms-5" size={24} color="#767f8c" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
