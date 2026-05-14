import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobBoard = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/jobs`);
      setJobs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Failed to fetch jobs');
      setJobs([]);
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!formData.resume) return alert('Please upload a resume');

    setIsSubmitting(true);
    const data = new FormData();
    data.append('studentName', formData.studentName);
    data.append('studentEmail', formData.studentEmail);
    data.append('resume', formData.resume);
    data.append('jobId', selectedJob._id);

    try {
      await axios.post(`${API_URL}/api/jobs/apply`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Application submitted successfully!');
      setSelectedJob(null);
      setFormData({ studentName: '', studentEmail: '', resume: null });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-black text-blue-900 mb-1">Live Jobs</h1>
          <p className="text-gray-500 text-sm">Join our global team of IT professionals</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {(jobs || []).map(job => (
            <div
              key={job._id}
              onClick={() => setSelectedJob(job)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-5 sm:p-6 group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  {/* Title & Company */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setSelectedJob(job)}>
                      {job.title}
                    </h2>
                    <p className="text-sm font-semibold text-gray-600 mt-0.5">Biranu Consulting</p>
                  </div>

                  {/* Horizontal Stats/Details */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-gray-500">
                    {job.experience && (
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{job.experience}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <span className="font-bold mr-1 text-gray-400 uppercase text-[10px]">Salary:</span>
                      <span className="font-medium text-gray-700">{job.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-1 text-gray-400 uppercase text-[10px]">Location:</span>
                      <span className="font-medium text-gray-700">{job.location}</span>
                    </div>
                  </div>

                  {/* Description Snippet */}
                  <div className="flex items-start gap-2 pt-1">
                    <svg className="w-4 h-4 mt-1 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-500 line-clamp-1 italic">
                      <span className="font-bold text-gray-400 not-italic mr-1 uppercase text-[10px]">Description:</span>
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements/Skills */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-bold text-gray-400 uppercase text-[10px] mr-1">Skills:</span>
                    {(job.requirements || []).map((req, i) => (
                      <span key={i} className="text-[12px] text-gray-500 flex items-center after:content-['•'] after:ml-2 last:after:content-none">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="sm:pt-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          {(jobs || []).length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm w-full col-span-full border-2 border-dashed border-gray-100">
              <p className="text-gray-400 text-xl font-medium">No job vacancies currently available.</p>
              <p className="text-gray-400 text-sm mt-2">Please check back later!</p>
            </div>
          )}
        </div>        {selectedJob && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 relative">
              <button
                onClick={() => { setSelectedJob(null); setShowApplyForm(false); }}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!showApplyForm ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-black text-gray-900 mb-1.5">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {selectedJob.category || 'General'}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {selectedJob.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Salary Package</p>
                        <p className="font-bold text-gray-900 text-sm">{selectedJob.salary}</p>
                      </div>
                    </div>
                    {selectedJob.experience && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Experience</p>
                          <p className="font-bold text-gray-900 text-sm">{selectedJob.experience}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                      Job Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-[13px]">
                      {selectedJob.description}
                    </p>
                  </div>

                  {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                        <div className="w-1 h-5 bg-indigo-600 rounded-full"></div>
                        Key Requirements
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.requirements.map((req, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600 font-medium">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-8 border-t border-gray-100 flex gap-4">
                    <button
                      onClick={() => { setSelectedJob(null); setShowApplyForm(false); }}
                      className="flex-1 px-5 py-3 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setShowApplyForm(true)}
                      className="flex-[2] px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98]"
                    >
                      Proceed to Apply
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-in slide-in-from-right duration-300">
                  <div>
                    <button
                      onClick={() => setShowApplyForm(false)}
                      className="text-blue-600 text-sm font-bold flex items-center gap-2 mb-4 hover:gap-3 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to details
                    </button>
                    <h2 className="text-2xl font-black text-gray-900 mb-1.5">Apply Now</h2>
                    <p className="text-gray-500 text-xs">Submit your application for <span className="text-blue-600 font-bold">{selectedJob.title}</span></p>
                  </div>

                  <form onSubmit={handleApply} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        value={formData.studentEmail}
                        onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Resume (PDF/DOCX)</label>
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                      />
                    </div>

                    <div className="pt-6 flex gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex-1 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
