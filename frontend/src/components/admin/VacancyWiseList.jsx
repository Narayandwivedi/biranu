import React from 'react';

const VacancyWiseList = ({ jobs, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div 
          key={job._id} 
          onClick={() => onViewDetails(job._id)}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {job.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{job.category} • {job.location}</p>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-50">
            <span className="text-xs font-semibold text-gray-400">View Applications</span>
            <div className="flex items-center text-blue-600 font-bold text-sm">
              Explore
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      ))}
      {jobs.length === 0 && (
        <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-400 font-medium">No job vacancies found.</p>
        </div>
      )}
    </div>
  );
};

export default VacancyWiseList;
