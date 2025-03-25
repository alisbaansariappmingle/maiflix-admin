import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className="w-60 h-screen  bg-[#c95203e8] overflow-y-auto  font-semibold text-white text-md flex flex-col p-4 shadow-lg  [&::-webkit-scrollbar]:hidden">

      {/* <h2 className="text-2xl font-bold texwt-center mb-6">Maiflix</h2> */}

      <nav className="flex flex-col gap-4 ">
        <Link to="/" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <MdDashboard />
          Dashboard
        </Link>
        <Link to="/services" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <GrServices />
          Services
        </Link>
        <Link to="/users" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <TbBrandBooking />
          Bookings
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <FaUsers />
          User
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <HiUsers />
          Employee
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <IoMdNotifications />
          Notifications
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
          <GrTransaction />
          Transactions
        </Link>
        <Link to="/analytics" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg"> <SiGoogleanalytics/>
        Analytics</Link>
        <Link to="/support" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
        <MdOutlineSupportAgent/>
        Support</Link>
        <Link to="/settings" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
        <IoSettings/>
        Settings</Link>
        <Link to="/logout" className="flex items-center gap-3 p-3 hover:bg-white hover:text-black rounded-lg">
       < IoMdLogOut/>
       Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
