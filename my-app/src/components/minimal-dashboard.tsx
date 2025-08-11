import React from "react";
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
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  MoreHorizontal,
  Settings,
} from "lucide-react";

// Sample data for charts
const trafficData = [
  { month: "Jan 00", websiteBlog: 450, socialMedia: 320 },
  { month: "Q2 Jan", websiteBlog: 520, socialMedia: 380 },
  { month: "Q3 Jan", websiteBlog: 400, socialMedia: 450 },
  { month: "Q4 Jan", websiteBlog: 680, socialMedia: 520 },
  { month: "Q5 Jan", websiteBlog: 250, socialMedia: 720 },
  { month: "Q6 Jan", websiteBlog: 200, socialMedia: 380 },
  { month: "Q7 Jan", websiteBlog: 350, socialMedia: 520 },
  { month: "Q8 Jan", websiteBlog: 750, socialMedia: 420 },
  { month: "Q9 Jan", websiteBlog: 320, socialMedia: 280 },
  { month: "10 Jan", websiteBlog: 180, socialMedia: 340 },
  { month: "11 Jan", websiteBlog: 150, socialMedia: 280 },
  { month: "12 Jan", websiteBlog: 120, socialMedia: 240 },
];

const pieData = [
  { name: "Completed", value: 75, color: "#10B981" },
  { name: "Remaining", value: 25, color: "#3B82F6" },
];

const Dashboard = () => {
  return (
    <div className="ml-64 h-screen p-6 overflow-auto bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to MediVerse Dashboard</p>
      </div>
      
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Claims</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="fa fa-file-medical text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Claims</p>
              <p className="text-2xl font-bold text-gray-900">987</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="fa fa-check-circle text-green-600 text-xl"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Claims</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <i className="fa fa-clock text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">₹2,45,678</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="fa fa-rupee-sign text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Chart Placeholder 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Claims</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <i className="fa fa-chart-bar text-4xl text-gray-400 mb-2"></i>
              <p className="text-gray-500">Bar Chart Placeholder</p>
            </div>
          </div>
        </div>
        
        {/* Chart Placeholder 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Claim Distribution</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <i className="fa fa-chart-pie text-4xl text-gray-400 mb-2"></i>
              <p className="text-gray-500">Pie Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <i className="fa fa-plus text-blue-600"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">New claim submitted</p>
              <p className="text-sm text-gray-500">Employee ID: EMP001 - Amount: ₹15,000</p>
            </div>
            <span className="text-sm text-gray-400">2 hours ago</span>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <i className="fa fa-check text-green-600"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Claim approved</p>
              <p className="text-sm text-gray-500">Employee ID: EMP002 - Amount: ₹8,500</p>
            </div>
            <span className="text-sm text-gray-400">4 hours ago</span>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <i className="fa fa-exclamation text-yellow-600"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Document verification required</p>
              <p className="text-sm text-gray-500">Employee ID: EMP003 - Amount: ₹12,000</p>
            </div>
            <span className="text-sm text-gray-400">6 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Dashboard;

