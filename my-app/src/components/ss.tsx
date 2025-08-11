import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Settings, Plus } from 'lucide-react';

// Sample data for charts
const trafficData = [
  { month: 'Jan 00', websiteBlog: 45, socialMedia: 32 },
  { month: 'Q2 Jan', websiteBlog: 52, socialMedia: 38 },
  { month: 'Q3 Jan', websiteBlog: 40, socialMedia: 45 },
  { month: 'Q4 Jan', websiteBlog: 68, socialMedia: 52 },
  { month: 'Q5 Jan', websiteBlog: 25, socialMedia: 72 },
  { month: 'Q6 Jan', websiteBlog: 20, socialMedia: 38 },
  { month: 'Q7 Jan', websiteBlog: 35, socialMedia: 52 },
  { month: 'Q8 Jan', websiteBlog: 75, socialMedia: 42 },
  { month: 'Q9 Jan', websiteBlog: 32, socialMedia: 28 },
  { month: '10 Jan', websiteBlog: 18, socialMedia: 34 },
  { month: '11 Jan', websiteBlog: 15, socialMedia: 28 },
  { month: '12 Jan', websiteBlog: 12, socialMedia: 24 }
];

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (section: string) => {
    setOpenDropdown((prev) => (prev === section ? "" : section));
  };

  const handleNavClick = (path: string) => {
    console.log('Navigate to:', path);
    // You can replace this with your routing logic
  };

  return (
    <aside className="w-64 bg-green-600 text-white h-screen p-5 fixed top-0 left-0 overflow-y-auto">
      <h2 className="text-2xl mb-8 text-center font-bold text-white">
        MediVerse
      </h2>
      <nav className="flex flex-col gap-2">
        <button 
          onClick={() => handleNavClick('/')}
          className="text-white p-3 text-left cursor-pointer text-base w-full transition-colors duration-200 no-underline hover:bg-green-700 rounded"
        >
          Home
        </button>

        <div className="flex flex-col">
          <button
            className="text-white p-3 text-left cursor-pointer text-base w-full transition-colors duration-200 no-underline hover:bg-green-700 rounded flex items-center gap-2"
            onClick={() => toggleDropdown("Medical Reimbursement")}
          >
            <Plus className="w-4 h-4" />
            Medical Reimbursement
          </button>
          {openDropdown === "Medical Reimbursement" && (
            <div className="flex flex-col ml-5 mt-1">
              <button 
                onClick={() => handleNavClick('/upload')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Upload Prescription
              </button>
              <button 
                onClick={() => handleNavClick('/reimbursement/with')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Reimbursement with Prescription
              </button>
              <button 
                onClick={() => handleNavClick('/reimbursement/without')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Reimbursement without Prescription
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <button 
            onClick={() => handleNavClick('/update/dependent')}
            className="text-white p-3 text-left cursor-pointer text-base w-full transition-colors duration-200 no-underline hover:bg-green-700 rounded"
          >
            Update Dependent Details
          </button>
        </div>

        <div className="flex flex-col">
          <button
            className="text-white p-3 text-left cursor-pointer text-base w-full transition-colors duration-200 no-underline hover:bg-green-700 rounded flex items-center gap-2"
            onClick={() => toggleDropdown("Validation")}
          >
            <Settings className="w-4 h-4" />
            Validation
          </button>
          {openDropdown === "Validation" && (
            <div className="flex flex-col ml-5 mt-1">
              <button 
                onClick={() => handleNavClick('/approve')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Approve Employee medical Reimbursement Claim
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <button
            className="text-white p-3 text-left cursor-pointer text-base w-full transition-colors duration-200 no-underline hover:bg-green-700 rounded flex items-center gap-2"
            onClick={() => toggleDropdown("Reports")}
          >
            <Settings className="w-4 h-4" />
            Reports
          </button>
          {openDropdown === "Reports" && (
            <div className="flex flex-col ml-5 mt-1">
              <button 
                onClick={() => handleNavClick('/dependent')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Employee Dependent Status
              </button>
              <button 
                onClick={() => handleNavClick('/PresStatus')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Prescription Status
              </button>
              <button 
                onClick={() => handleNavClick('/ReimburseStatus')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Medical Reimbursement Status
              </button>
              <button 
                onClick={() => handleNavClick('/ReimburseReport')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Reimbursement Report
              </button>
              <button 
                onClick={() => handleNavClick('/reimburs/report/nopres')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Medical Reimbursement report without prescription
              </button>
              <button 
                onClick={() => handleNavClick('/HospitalList')}
                className="text-white py-2 px-3 text-base no-underline rounded transition-colors duration-200 hover:bg-green-700 text-left"
              >
                Hospital List
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

const Dashboard = () => {
  return (
    <div className="ml-64 bg-gray-50 p-6 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Minimal Dashboard</h1>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span>🏠</span>
              <span className="mx-2">/</span>
              <span>Dashboards</span>
              <span className="mx-2">/</span>
              <span>Minimal Dashboard Example</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
              <option>Select period...</option>
            </select>
          </div>
        </div>
        
        {/* Info Alert */}
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                This dashboard example was created using only the available elements and components, no additional SCSS was written!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* New Accounts */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">NEW ACCOUNTS</h3>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">68</span>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">234</span>
            <span className="text-sm text-gray-500 ml-1">%</span>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">TOTAL EXPENSES</h3>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-semibold">82</span>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">71</span>
            <span className="text-sm text-gray-500 ml-1">%</span>
          </div>
        </div>

        {/* Company Value */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">COMPANY VALUE</h3>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">72</span>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">1,45M</span>
          </div>
        </div>

        {/* New Employees */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">NEW EMPLOYEES</h3>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold">81</span>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">34</span>
            <span className="text-sm text-gray-500 ml-1">hires</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Traffic Sources Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Traffic Sources</h3>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
              Actions
            </button>
          </div>
          <div className="h-80 relative">
            {/* Custom Bar Chart */}
            <div className="h-full flex items-end justify-between px-4 pb-8 pt-4 border-l border-b border-gray-200">
              {trafficData.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                  <div className="flex flex-col items-center space-y-1">
                    {/* Website Blog Bar */}
                    <div 
                      className="w-6 bg-blue-500 rounded-t"
                      style={{ height: `${data.websiteBlog * 3}px` }}
                    ></div>
                    {/* Social Media Bar */}
                    <div 
                      className="w-6 bg-green-500 rounded-t"
                      style={{ height: `${data.socialMedia * 3}px` }}
                    ></div>
                  </div>
                  {/* Month Label */}
                  <span className="text-xs text-gray-600 transform rotate-45 origin-left mt-2">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4 pr-2">
              {[800, 700, 600, 500, 400, 300, 200, 100, 0].map((value) => (
                <span key={value} className="text-xs text-gray-400">{value}</span>
              ))}
            </div>
            
            {/* Green line with circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <polyline
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                points="40,60 80,80 120,70 160,50 200,40 240,70 280,50 320,65 360,85 400,80 440,90 480,100"
              />
              {[40,80,120,160,200,240,280,320,360,400,440,480].map((x, i) => (
                <circle key={i} cx={x} cy={60 + i*5} r="4" fill="#10B981" />
              ))}
            </svg>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Website Blog</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Social Media</span>
            </div>
          </div>
        </div>

        {/* Income Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Income</h3>
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center h-64">
            <div className="relative">
              {/* Custom Donut Chart */}
              <svg width="160" height="160" className="transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  stroke="#E5E7EB"
                  strokeWidth="20"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  stroke="#10B981"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.75} ${2 * Math.PI * 60 * 0.25}`}
                  strokeLinecap="round"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  stroke="#3B82F6"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.25} ${2 * Math.PI * 60 * 0.75}`}
                  strokeDashoffset={`-${2 * Math.PI * 60 * 0.75}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-sm text-gray-500">Percent</span>
                <span className="text-2xl font-bold text-gray-900">75</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-yellow-500">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
            <span className="text-sm text-gray-500 mt-1 block">Spendings Target</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Financial Metrics */}
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="text-sm text-gray-500 mb-2">Income</h4>
            <p className="text-xl font-bold text-gray-900">$ 5,456</p>
            <p className="text-sm text-green-600">+14%</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="text-sm text-gray-500 mb-2">Expenses</h4>
            <p className="text-xl font-bold text-gray-900">$ 4,764</p>
            <p className="text-sm text-red-600">↗ 8%</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="text-sm text-gray-500 mb-2">Spendings</h4>
            <p className="text-xl font-bold text-gray-900">$ 1.5M</p>
            <p className="text-sm text-green-600">↓ 15%</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="text-sm text-gray-500 mb-2">Totals</h4>
            <p className="text-xl font-bold text-gray-900">$ 31,564</p>
            <p className="text-sm text-green-600">+76%</p>
          </div>
        </div>

        {/* View Details */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">View Details</span>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Target Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Target Section</h3>
          <button className="text-blue-600 text-sm font-medium">View Details</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-red-600">71%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '71%' }}></div>
            </div>
            <span className="text-sm text-gray-500">Income Target</span>
          </div>
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-green-600">54%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '54%' }}></div>
            </div>
            <span className="text-sm text-gray-500">Expenses Target</span>
          </div>
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-yellow-600">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
            <span className="text-sm text-gray-500">Spendings Target</span>
          </div>
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-blue-600">89%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
            <span className="text-sm text-gray-500">Totals Target</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MainLayout;