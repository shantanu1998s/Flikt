import React, { useState } from "react";

const CrudTable = () => {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({ id: "", name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    if (!inputData.name || !inputData.email) return;
    setRecords([...records, { ...inputData, id: Date.now() }]);
    setInputData({ id: "", name: "", email: "" });
  };

  const handleEditRecord = (id) => {
    const recordToEdit = records.find((record) => record.id === id);
    setInputData({ ...recordToEdit });
    setIsEditing(true);
    setEditingId(id);
  };

  const handleUpdateRecord = () => {
    if (!inputData.name || !inputData.email) return;
    setRecords(
      records.map((record) =>
        record.id === editingId ? { ...inputData, id: editingId } : record
      )
    );
    setInputData({ id: "", name: "", email: "" });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div>
      <h2 className="text-center text-xl">CRUD Operations with Table</h2>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputData.name}
          onChange={handleInputChange}
          className="px-2 py-1 border border-gray-300 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputData.email}
          onChange={handleInputChange}
          className="px-2 py-1 border border-gray-300 mr-2"
        />
        {!isEditing ? (
          <button
            onClick={handleAddRecord}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Record
          </button>
        ) : (
          <button
            onClick={handleUpdateRecord}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Update Record
          </button>
        )}
      </div>
      <div className="mt-8">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border">ID</th>
              <th className="border">Name</th>
              <th className="border">Email</th>
              <th className="border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="bg-white">
                <td className="border px-4 py-2">{record.id}</td>
                <td className="border px-4 py-2">{record.name}</td>
                <td className="border px-4 py-2">{record.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditRecord(record.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRecord(record.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTable;
