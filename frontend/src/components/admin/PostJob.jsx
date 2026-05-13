import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PostJob = ({ jobToEdit, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    salary: '',
    location: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        title: jobToEdit.title,
        description: jobToEdit.description,
        category: jobToEdit.category,
        salary: jobToEdit.salary,
        location: jobToEdit.location,
        requirements: jobToEdit.requirements.join(', ')
      });
    }
  }, [jobToEdit]);

  const handleSubmit = async (e) => {
    const API_URL = import.meta.env.VITE_API_URL;
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (jobToEdit) {
        await axios.put(`${API_URL}/api/admin/jobs/${jobToEdit._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Job updated successfully!');
      } else {
        await axios.post(`${API_URL}/api/admin/jobs`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Job posted successfully!');
      }
      onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save job');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full p-2.5 bg-blue-50/50 border-2 border-blue-100 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold text-gray-700 text-sm";

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-white">{jobToEdit ? 'Update Vacancy' : 'Create New Vacancy'}</h2>
          <p className="text-blue-100 text-[10px] font-medium uppercase tracking-widest">Global Talent Portal</p>
        </div>
        {onCancel && (
          <button onClick={onCancel} className="bg-white/10 hover:bg-white/20 p-1.5 rounded-lg text-white transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
              Job Title <span className="text-red-400 font-medium lowercase italic text-[10px]">Required</span>
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="e.g. Frontend Developer"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
              Category <span className="text-gray-400 font-medium lowercase italic text-[10px]">Optional</span>
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="e.g. Engineering"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
              Salary <span className="text-red-400 font-medium lowercase italic text-[10px]">Required</span>
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="e.g. ₹12L - ₹18L"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
              Location <span className="text-red-400 font-medium lowercase italic text-[10px]">Required</span>
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="e.g. Remote"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
            Requirements <span className="text-gray-400 font-medium lowercase italic text-[10px]">Optional</span>
          </label>
          <input
            type="text"
            className={inputClasses}
            placeholder="React, Node.js..."
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-gray-500 ml-1 uppercase tracking-wider flex justify-between">
            Description <span className="text-red-400 font-medium lowercase italic text-[10px]">Required</span>
          </label>
          <textarea
            className={`${inputClasses} h-32 resize-none`}
            placeholder="Detailed job description..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="pt-4 flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-sm text-gray-500 font-bold hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Saving...' : jobToEdit ? 'Update' : 'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
