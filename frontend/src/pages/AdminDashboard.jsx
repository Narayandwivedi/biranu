import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import ManageJobs from '../components/admin/ManageJobs';
import PostJob from '../components/admin/PostJob';
import JobDetails from '../components/admin/JobDetails';
import VacancyWiseList from '../components/admin/VacancyWiseList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('manage');
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchJobs();
    }
  }, [token]);

  // Close sidebar on navigation on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeTab]);

  const fetchJobs = async () => {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.get(`${API_URL}/api/admin/jobs`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setJobs([]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleViewDetails = (jobId) => {
    setSelectedJobId(jobId);
    setActiveTab('details');
  };

  const handleOpenModal = (job = null) => {
    setEditingJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingJob(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'manage':
        return (
          <ManageJobs 
            jobs={jobs} 
            fetchJobs={fetchJobs} 
            onViewDetails={handleViewDetails}
            onEdit={handleOpenModal}
          />
        );
      case 'vacancies':
        return (
          <VacancyWiseList 
            jobs={jobs} 
            onViewDetails={handleViewDetails} 
          />
        );
      case 'details':
        return (
          <JobDetails 
            jobId={selectedJobId} 
            onBack={() => setActiveTab('manage')} 
          />
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
                {activeTab === 'manage' ? 'Manage Job Listings' : activeTab === 'vacancies' ? 'Vacancy Wise Posts' : 'Job Details'}
              </h1>
              <p className="text-gray-500 text-[10px] sm:text-sm">Welcome back, Admin!</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base">
              A
            </div>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* Modal for Add/Edit Job */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100] animate-in fade-in duration-200">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">
            <PostJob 
              jobToEdit={editingJob}
              onCancel={handleCloseModal}
              onSuccess={() => {
                fetchJobs();
                handleCloseModal();
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
