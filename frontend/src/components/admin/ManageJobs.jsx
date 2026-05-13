import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageJobs = ({ jobs, fetchJobs, onViewDetails, onEdit }) => {
  const token = localStorage.getItem('adminToken');

  const toggleStatus = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/jobs/${id}`, 
        { isActive: !currentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(`Job status updated to ${!currentStatus ? 'Active' : 'Inactive'}`);
      fetchJobs();
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const deleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job and all its applications?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Job deleted successfully');
      fetchJobs();
    } catch (err) {
      toast.error('Failed to delete job');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Active Vacancies</h2>
          <p className="text-sm text-gray-500">Manage status, edit details or remove job posts.</p>
        </div>
        <button 
          onClick={() => onEdit(null)} // passing null to trigger 'post' mode in parent
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Job
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Job Details</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category & Location</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => onViewDetails(job._id)}>
                      {job.title}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5">Posted on {new Date(job.createdAt).toLocaleDateString()}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col text-sm text-gray-600">
                    <span>{job.category}</span>
                    <span className="text-gray-400 text-xs">{job.location}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => toggleStatus(job._id, job.isActive)}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                      job.isActive 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${job.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    {job.isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button 
                    onClick={() => onViewDetails(job._id)}
                    className="text-gray-400 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition-colors"
                    title="View Applications"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => onEdit(job)}
                    className="text-gray-400 hover:text-amber-600 p-1 rounded-md hover:bg-amber-50 transition-colors"
                    title="Edit Job"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => deleteJob(job._id)}
                    className="text-gray-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-colors"
                    title="Delete Job"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-gray-400">No jobs posted yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default ManageJobs;
