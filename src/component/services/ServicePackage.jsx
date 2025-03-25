import React from "react";
import { FaEye, FaEdit, FaTrash, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddPackages from "./AddPackages";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description: "Create modern and responsive websites.",
    image: "https://via.placeholder.com/50",
    packages: 3,
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "Professional designs for branding & marketing.",
    image: "https://via.placeholder.com/50",
    packages: 2,
  },
];

const ServicePackage = () => {
  const navigate = useNavigate(); 
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlot = () => {
    navigate("/slot"); 
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto flex flex-wrap">
        <h2 className="text-xl font-bold">Package Details</h2>
        <button 
        onClick={() => setIsModalOpen(true)}
        className="ml-auto bg-[#ce621a] px-3 py-2 rounded-lg text-white font-semibold cursor-pointer">
          Add Packages
        </button>

        <table className="min-w-full bg-white border rounded-lg shadow-md mt-5 border-gray-300">
          <thead>
            <tr className="bg-gray-200 ">
              <th className="py-2 px-4 border">Sr No</th>
              <th className="py-2 px-4 border">Package Name</th>
              <th className="py-2 px-4 border">Package Description</th>
              <th className="py-2 px-4 border">No. Of Slots</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={service.id} className="border hover:bg-gray-100 text-sm">
                <td className="py-2 px-4 border text-center">{index + 1}</td>
                <td className="py-2 px-4 border text-center">{service.name}</td>
                <td className="py-2 px-4 border text-center">{service.description}</td>
                <td className="py-2 px-4 text-center border">{service.packages}</td>
                <td className="py-2 px-4 flex space-x-3 justify-center">
                  <button className="text-gray-700 hover:text-blue-700 cursor-pointer">
                    <FaEye />
                  </button>
                  <button className="text-gray-700 hover:text-yellow-700 cursor-pointer">
                    <FaEdit />
                  </button>
                  <button className="text-gray-700 hover:text-red-700 cursor-pointer">
                    <FaTrash />
                  </button>
                  <button onClick={handleSlot} className="text-gray-700 hover:text-black cursor-pointer">
                    <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <AddPackages closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ServicePackage;
