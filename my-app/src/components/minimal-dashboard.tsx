import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Sample data for charts
const trafficData = [
  { month: "Jan", websiteBlog: 450, socialMedia: 320 },
  { month: "Feb", websiteBlog: 520, socialMedia: 380 },
  { month: "Mar", websiteBlog: 400, socialMedia: 450 },
  { month: "Apr", websiteBlog: 680, socialMedia: 520 },
  { month: "May", websiteBlog: 250, socialMedia: 720 },
  { month: "Jun", websiteBlog: 200, socialMedia: 380 },
  { month: "Jul", websiteBlog: 350, socialMedia: 520 },
  { month: "Aug", websiteBlog: 750, socialMedia: 420 },
  { month: "Sep", websiteBlog: 320, socialMedia: 280 },
  { month: "Oct", websiteBlog: 180, socialMedia: 340 },
  { month: "Nov", websiteBlog: 150, socialMedia: 280 },
  { month: "Dec", websiteBlog: 120, socialMedia: 240 },
];

const pieData = [
  { name: "Completed", value: 75, color: "#10B981" },
  { name: "Remaining", value: 25, color: "#E5E7EB" },
];

const Dashboard = () => {
  return (
    <div className="ml-64 min-h-screen bg-gray-50">
      {/* Main Content Container */}
      <div className="p-8 max-w-full">
        {/* Header */}
        <div className="mb-8 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome to MediVerse Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Total Claims */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">NEW ACCOUNTS</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">234</span>
                  <span className="text-sm text-gray-500 ml-2">%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">↑</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
            </div>
          </div>
          
          {/* Total Expenses */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">TOTAL EXPENSES</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">71</span>
                  <span className="text-sm text-gray-500 ml-2">%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">↓</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{width: '71%'}}></div>
            </div>
          </div>
          
          {/* Company Value */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">COMPANY VALUE</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">$1.45M</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">72</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>
          
          {/* New Employees */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">NEW EMPLOYEES</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">+34</span>
                  <span className="text-sm text-gray-500 ml-2">hires</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">81</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '81%'}}></div>
            </div>
          </div>
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Traffic Sources Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Traffic Sources</h3>
              <button className="px-4 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600">
                Actions
              </button>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <Bar dataKey="websiteBlog" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Line 
                    type="monotone" 
                    dataKey="socialMedia" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Income Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Income</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </div>
            <div className="h-48 flex items-center justify-center">
              <div className="relative">
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">75</div>
                    <div className="text-sm text-gray-500">Percent</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-yellow-500 font-medium">32%</span>
                <span className="text-gray-500">Spendings Target</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-2">
              <span className="text-sm text-gray-500">Income</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">$5,456</span>
              <span className="text-green-500 text-sm font-medium">+14%</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-2">
              <span className="text-sm text-gray-500">Expenses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">$4,764</span>
              <span className="text-red-500 text-sm font-medium">↑ 8%</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-2">
              <span className="text-sm text-gray-500">Spendings</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">$1.5M</span>
              <span className="text-green-500 text-sm font-medium">↓ 15%</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-2">
              <span className="text-sm text-gray-500">Totals</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">$31,564</span>
              <span className="text-yellow-500 text-sm font-medium">+76%</span>
            </div>
          </div>
        </div>
        
        {/* Target Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Target Section</h3>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              View Details
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="mb-2">
                <span className="text-sm text-gray-500">Income Target</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-red-500">71%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '71%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="mb-2">
                <span className="text-sm text-gray-500">Expenses Target</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-green-500">54%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '54%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="mb-2">
                <span className="text-sm text-gray-500">Spendings Target</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-yellow-500">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="mb-2">
                <span className="text-sm text-gray-500">Totals Target</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-blue-500">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '89%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;