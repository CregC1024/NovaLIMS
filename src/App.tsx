import { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Beaker, 
  ActivitySquare, 
  Settings, 
  LogOut, 
  Bell,
  Hexagon
} from 'lucide-react';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Inventory } from './components/Inventory';
import { Samples } from './components/Samples';
import { Experiments } from './components/Experiments';

type Tab = 'dashboard' | 'inventory' | 'samples' | 'experiments' | 'settings';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'inventory': return <Inventory />;
      case 'samples': return <Samples />;
      case 'experiments': return <Experiments />;
      default: return <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h2>Settings coming soon</h2></div>;
    }
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">NovaLIMS</span>
        </div>
        
        <nav className="nav-links">
          <div 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          <div 
            className={`nav-item ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            <Database size={20} />
            Chemical DB
          </div>
          <div 
            className={`nav-item ${activeTab === 'samples' ? 'active' : ''}`}
            onClick={() => setActiveTab('samples')}
          >
            <Beaker size={20} />
            Samples
          </div>
          <div 
            className={`nav-item ${activeTab === 'experiments' ? 'active' : ''}`}
            onClick={() => setActiveTab('experiments')}
          >
            <ActivitySquare size={20} />
            Experiments
          </div>
        </nav>

        <div className="sidebar-footer">
          <div 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
            style={{ marginBottom: '0.5rem' }}
          >
            <Settings size={20} />
            Settings
          </div>
          <div className="nav-item" style={{ color: 'var(--danger)' }}>
            <LogOut size={20} />
            Logout
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Global search..." />
          </div>
          
          <div className="topbar-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="avatar">EV</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Dr. Vance</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Lead Scientist</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="page-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
