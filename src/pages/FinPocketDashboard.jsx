import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Home, TrendingUp, History, Settings, Bell, Plus, DollarSign, Target, Calendar, CreditCard, ShoppingCart, Car, Utensils, Smartphone, Heart, Menu, X, User, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
// import UserForm from '../components/UserForm';

const FinPocketDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('December');

  // Mock Data
  const userData = {
    name: "Rajeshwar Singh",
    monthlyIncome: 50000,
    currentBalance: 23500,
    totalSpent: 26500,
    currentSaved: 8500,
    savingsGoal: 15000,
    profession: "Software Developer"
  };

  const expenseData = [
    { name: 'Rent', value: 12000, color: '#3b82f6', icon: Home },
    { name: 'Groceries', value: 6500, color: '#10b981', icon: ShoppingCart },
    { name: 'Transport', value: 3200, color: '#f59e0b', icon: Car },
    { name: 'Food & Dining', value: 2800, color: '#ef4444', icon: Utensils },
    { name: 'Utilities', value: 1500, color: '#8b5cf6', icon: Smartphone },
    { name: 'Healthcare', value: 500, color: '#ec4899', icon: Heart },
  ];

  const monthlyTrends = [
    { month: 'Jul', spent: 28000, saved: 8000, income: 50000 },
    { month: 'Aug', spent: 24000, saved: 12000, income: 50000 },
    { month: 'Sep', spent: 25500, saved: 10500, income: 50000 },
    { month: 'Oct', spent: 27000, saved: 9000, income: 50000 },
    { month: 'Nov', spent: 23000, saved: 13000, income: 50000 },
    { month: 'Dec', spent: 26500, saved: 8500, income: 50000 },
  ];

  const recentTransactions = [
    { id: 1, desc: 'Grocery Shopping', amount: 1200, category: 'Groceries', date: '2024-12-06', type: 'debit' },
    { id: 2, desc: 'Salary Credit', amount: 50000, category: 'Income', date: '2024-12-01', type: 'credit' },
    { id: 3, desc: 'Restaurant Dinner', amount: 850, category: 'Food & Dining', date: '2024-12-05', type: 'debit' },
    { id: 4, desc: 'Uber Ride', amount: 320, category: 'Transport', date: '2024-12-05', type: 'debit' },
    { id: 5, desc: 'Electricity Bill', amount: 1200, category: 'Utilities', date: '2024-12-03', type: 'debit' },
  ];

  const upcomingBills = [
    { id: 1, title: 'Rent Payment', amount: 12000, date: 'Jan 1', category: 'Rent', daysLeft: 24 },
    { id: 2, title: 'Car EMI', amount: 8500, date: 'Dec 15', category: 'EMI', daysLeft: 8 },
    { id: 3, title: 'Internet Bill', amount: 999, date: 'Dec 10', category: 'Utilities', daysLeft: 3 },
  ];

  const savingsProgress = (userData.currentSaved / userData.savingsGoal) * 100;
  const spentProgress = (userData.totalSpent / userData.monthlyIncome) * 100;

  const AddExpenseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Add Expense</h3>
          <button onClick={() => setShowAddExpense(false)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Amount (₹)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter amount" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Category</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select category</option>
              <option value="rent">Rent</option>
              <option value="groceries">Groceries</option>
              <option value="transport">Transport</option>
              <option value="food">Food & Dining</option>
              <option value="utilities">Utilities</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Description</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Optional description" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Date</label>
            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setShowAddExpense(false)} className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium transition">
              Cancel
            </button>
            <NavLink to={"./"} onClick={() => window.location.reload()} className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition">
              Add Expense
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {userData.name}! 👋</h2>
        <p className="text-blue-100">Here's your financial overview for December 2024</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between mb-2">
            {/* <div className="bg-white bg-opacity-20 p-3 rounded-lg"> */}
              {/* <DollarSign className="w-6 h-6" /> */}
            {/* </div> */}
            {/* <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">+2.5%</span> */}
          </div>
          <p className="text-green-100 text-sm">Current Balance</p>
          <p className="text-3xl font-bold mt-1">₹{userData.currentBalance.toLocaleString()}</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between mb-2">
            {/* <div className="bg-white bg-opacity-20 p-3 rounded-lg"> */}
              {/* <TrendingUp className="w-6 h-6" /> */}
            {/* </div> */}
            {/* <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">{spentProgress.toFixed(0)}%</span> */}
          </div>
          <p className="text-blue-100 text-sm">Total Spent</p>
          <p className="text-3xl font-bold mt-1">₹{userData.totalSpent.toLocaleString()}</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between mb-2">
            {/* <div className="bg-white bg-opacity-20 p-3 rounded-lg"> */}
              {/* <Target className="w-6 h-6" /> */}
            {/* </div> */}
            {/* <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">{savingsProgress.toFixed(0)}%</span> */}
          </div>
          <p className="text-purple-100 text-sm">Saved This Month</p>
          <p className="text-3xl font-bold mt-1">₹{userData.currentSaved.toLocaleString()}</p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Monthly Progress</h3>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700">Savings Goal</span>
              <span className="text-blue-600 font-semibold">{savingsProgress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500 shadow-lg" style={{ width: `${Math.min(savingsProgress, 100)}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">₹{userData.currentSaved.toLocaleString()} of ₹{userData.savingsGoal.toLocaleString()}</p>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700">Monthly Spending</span>
              <span className={`font-semibold ${spentProgress > 80 ? 'text-red-600' : spentProgress > 60 ? 'text-yellow-600' : 'text-blue-600'}`}>
                {spentProgress.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className={`h-3 rounded-full transition-all duration-500 shadow-lg ${
                spentProgress > 80 ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                spentProgress > 60 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                'bg-gradient-to-r from-blue-400 to-blue-600'
              }`} style={{ width: `${Math.min(spentProgress, 100)}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">₹{userData.totalSpent.toLocaleString()} of ₹{userData.monthlyIncome.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Spending Breakdown</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={expenseData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">6-Month Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="spent" stroke="#3b82f6" strokeWidth={3} name="Spent" />
              <Line type="monotone" dataKey="saved" stroke="#10b981" strokeWidth={3} name="Saved" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <DollarSign className={`w-4 h-4 ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.desc}</p>
                    <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <p className={`font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bills */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Payments</h3>
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${bill.daysLeft <= 3 ? 'bg-red-500 animate-pulse' : bill.daysLeft <= 7 ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                  <div>
                    <p className="font-medium text-gray-800">{bill.title}</p>
                    <p className="text-xs text-gray-600">Due: {bill.date} • {bill.daysLeft} days left</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">₹{bill.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* <UserForm/> */}
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-600 hover:text-gray-900">
                <Menu size={24} />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  🪙
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FinPocket</h1>
                  <p className="text-xs text-gray-500">Your Financial Companion</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.profession}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 transition-transform duration-300 z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} w-64`}>
          <nav className="p-4 pt-20 lg:pt-4 space-y-2">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Home className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>
            <button onClick={() => setActiveTab('history')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${activeTab === 'history' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
              <History className="w-5 h-5" />
              <span className="font-medium">History</span>
            </button>
            <button onClick={() => setActiveTab('analytics')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${activeTab === 'analytics' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </button>
            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${activeTab === 'settings' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition">
                <LogOut className="w-5 h-5" />
                <NavLink to={"/login"} className="font-medium">Logout</NavLink>
              </button>
            </div>
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className="p-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
              <p className="text-xs text-gray-600 mb-2">Monthly Income</p>
              <p className="text-2xl font-bold text-gray-800">₹{userData.monthlyIncome.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-2">● Active</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <DashboardView />
        </main>
      </div>

      {/* Floating Add Button */}
      <button onClick={() => setShowAddExpense(true)} className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50">
        <Plus className="w-8 h-8" />
      </button>

      {/* Modals */}
      {showAddExpense && <AddExpenseModal />}
    </div>
    </>
  );
};

export default FinPocketDashboard;