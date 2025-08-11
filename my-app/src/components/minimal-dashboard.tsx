import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, MoreHorizontal, Settings } from 'lucide-react';

// Sample data for charts
const trafficData = [
  { month: 'Jan 00', websiteBlog: 450, socialMedia: 320 },
  { month: 'Q2 Jan', websiteBlog: 520, socialMedia: 380 },
  { month: 'Q3 Jan', websiteBlog: 400, socialMedia: 450 },
  { month: 'Q4 Jan', websiteBlog: 680, socialMedia: 520 },
  { month: 'Q5 Jan', websiteBlog: 250, socialMedia: 720 },
  { month: 'Q6 Jan', websiteBlog: 200, socialMedia: 380 },
  { month: 'Q7 Jan', websiteBlog: 350, socialMedia: 520 },
  { month: 'Q8 Jan', websiteBlog: 750, socialMedia: 420 },
  { month: 'Q9 Jan', websiteBlog: 320, socialMedia: 280 },
  { month: '10 Jan', websiteBlog: 180, socialMedia: 340 },
  { month: '11 Jan', websiteBlog: 150, socialMedia: 280 },
  { month: '12 Jan', websiteBlog: 120, socialMedia: 240 }
];

const pieData = [
  { name: 'Completed', value: 75, color: '#10B981' },
  { name: 'Remaining', value: 25, color: '#3B82F6' }
];

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-50 p-6">
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
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Bar dataKey="websiteBlog" fill="#3B82F6" name="Website Blog" />
                <Bar dataKey="socialMedia" fill="#10B981" name="Social Media" />
              </BarChart>
            </ResponsiveContainer>
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
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
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

export default Dashboard;