import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddServices = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    image: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value ,image: e.target.files[0] });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    closeModal(); 
  };

  return (
    <div className="fixed inset-0 bg-[#000000b8] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-5 px-2 py-2 bg-[#ce621a] rounded-xl text-lg cursor-pointer"
        >
          <RxCross2 className="font-bold text-white "/>
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Service</h2>

       
        <form className="space-y-4">
          
         
          <div>
            <label className="block text-md font-semibold">Service Name</label>
            <input
              type="text"
              name="serviceName"
            //   value=""
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Enter service name"
            />
          </div>

       
          <div>
            <label className="block text-md font-semibold">Service Description</label>
            <textarea
              name="description"
            //   value=""
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Enter service description"
            />
          </div>

          <div>
            <label className="block text-md font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="px-6 py-2 bg-[#ce621a] text-white rounded-lg cursor-pointer text-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
