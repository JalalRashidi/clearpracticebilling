'use client';
import api from '@/libs/api';
import React, { useEffect } from 'react';

const Page = () => {
  const [contact, setContact] = React.useState<any>(null);
  const [selectedMsg, setSelectedMsg] = React.useState<any>(null);

  async function getContact() {
    try {
      const res = await api.get('v1/contact/admin/all');
      setContact(res.data);
    } catch (error: any) {
      if (error.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/admin-panel/login';
      }
    }
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/admin-panel/login';
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Contact Messages
        </h2>

        {contact && contact.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-sm text-gray-500">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Message</th>
                </tr>
              </thead>

              <tbody>
                {contact.map((msg: any) => (
                  <tr
                    key={msg._id}
                    onClick={() => setSelectedMsg(msg)}
                    className="border-t cursor-pointer hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium">{msg?.name}</td>
                    <td className="p-3">{msg?.email}</td>
                    <td className="p-3">{msg?.phone}</td>
                    <td className="p-3">{msg?.subject}</td>
                    <td className="p-3 max-w-xs truncate">
                      {msg?.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No contact messages available.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedMsg && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedMsg(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Message Details
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Name:</span> {selectedMsg.name}</p>
              <p><span className="font-semibold">Email:</span> {selectedMsg.email}</p>
              <p><span className="font-semibold">Phone:</span> {selectedMsg.phone}</p>
              <p><span className="font-semibold">Subject:</span> {selectedMsg.subject}</p>

              <div>
                <span className="font-semibold">Message:</span>
                <p className="mt-1 bg-gray-100 p-3 rounded-lg whitespace-pre-line">
                  {selectedMsg.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;