import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddSlot from "./AddSlot";
import TablePagination from "@mui/material/TablePagination";

const slotsData = [
  {
    id: 1,
    days: "2",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    price: "50",
  },
  {
    id: 2,
    days: "4",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    price: "60",
  },
];

const Slot = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleEdit = (id) => {
    navigate(`/slot/edit/${id}`);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Slots </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#ce621a] px-3 py-2 rounded-lg text-white font-semibold cursor-pointer">
            Add Slot
          </button>
        </div>

       <div className="border-gray-300">
       <table className="min-w-full bg-white border rounded-lg shadow-md mt-5">
          <thead className="text-center justify-center items-center">
            <tr className="bg-gray-200  text-center justify-center">
              <th className="py-2 px-4 border">Sr No</th>
              <th className="py-2 px-4 border">Days</th>
              <th className="py-2 px-4 border">Start Time</th>
              <th className="py-2 px-4 border">End Time</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {slotsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((slot, index) => (
              <tr key={slot.id} className="border hover:bg-gray-100 text-sm justify-center">
                <td className="py-2 px-4 border text-center">{index + 1}</td>
                <td className="py-2 px-4 border text-center">{slot.days}</td>
                <td className="py-2 px-4 border text-center">{slot.startTime}</td>
                <td className="py-2 px-4 border text-center">{slot.endTime}</td>
                <td className="py-2 px-4 border text-center">{slot.price}</td>
                <td className="py-2 px-4 flex space-x-3 justify-center">
                  <button className="text-gray-700 hover:text-blue-700 cursor-pointer">
                    <FaEye />
                  </button>
                  <button onClick={() => handleEdit(slot.id)} className="text-gray-700 cursor-pointer hover:text-yellow-700">
                    <FaEdit />
                  </button>
                  <button className="text-gray-700 hover:text-red-700 cursor-pointer">
                    <FaTrash />
                  </button>
                  {/* <button className="text-gray-700 hover:text-black cursor-pointer">
                    <FaArrowRight />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TablePagination
          component="div"
          count={slotsData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
       </div>
        
      </div>
      {isModalOpen && <AddSlot closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Slot;
