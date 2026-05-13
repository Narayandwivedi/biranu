import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobDetails = ({ jobId, onBack }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.get(`${API_URL}/api/admin/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data);
    } catch (err) {
      toast.error('Failed to fetch details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading details...</div>;
  if (!data) return <div className="p-8 text-center text-red-500">Job not found</div>;

  const { job, applications } = data;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <button onClick={onBack} className="text-gray-500 hover:text-blue-600 flex items-center text-sm font-medium transition-colors">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex justify-between items-start border-b border-gray-50 pb-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
            <p className="text-gray-500">{job.category} • {job.location} • {job.salary}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {job.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="prose prose-sm max-w-none text-gray-600">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Description</h3>
          <p className="whitespace-pre-wrap">{job.description}</p>
          
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mt-4 mb-2">Requirements</h3>
          <ul className="list-disc list-inside space-y-1">
            {(job.requirements || []).map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Applications ({applications.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase">
                <th className="px-6 py-3 font-semibold">Student</th>
                <th className="px-6 py-3 font-semibold">Contact</th>
                <th className="px-6 py-3 font-semibold">Resume</th>
                <th className="px-6 py-3 font-semibold">Applied On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(applications || []).map(app => (
                <tr key={app._id} className="text-sm text-gray-600 hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{app.studentName}</td>
                  <td className="px-6 py-4">{app.studentEmail}</td>
                  <td className="px-6 py-4">
                    <a 
                      href={`${import.meta.env.VITE_API_URL}/${app.resumeUrl.replace(/\\/g, '/')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center font-medium"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      View Resume
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-400 italic">No applications received yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
