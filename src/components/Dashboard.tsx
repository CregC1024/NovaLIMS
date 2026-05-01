import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Beaker, FlaskConical, AlertTriangle, Activity, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { analyticsData, mockChemicals, mockSamples } from '../mockData';
import type { SystemMetrics } from '../types';

export const Dashboard = () => {
  const metrics: SystemMetrics = {
    totalChemicals: mockChemicals.length,
    lowStockItems: mockChemicals.filter(c => c.quantity <= c.threshold).length,
    activeExperiments: 4,
    pendingSamples: mockSamples.filter(s => s.status === 'Pending').length
  };

  const recentActivity = [
    { id: 1, title: 'Sample S1024 Registered', time: '10 mins ago', type: 'sample' },
    { id: 2, title: 'HPLC Validation Started', time: '2 hours ago', type: 'experiment' },
    { id: 3, title: 'Low Stock Alert: Acetone', time: '4 hours ago', type: 'alert' },
    { id: 4, title: 'Exp 088 Completed', time: '1 day ago', type: 'experiment' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Laboratory Overview</h1>
          <p className="page-subtitle">Welcome back, Dr. Vance. Here's what's happening today.</p>
        </div>
        <button className="primary-btn">
          <Activity size={18} />
          Generate Report
        </button>
      </div>

      <div className="metrics-grid">
        <div className="glass-panel metric-card">
          <div className="metric-info">
            <h3>Chemicals in DB</h3>
            <div className="metric-value">{metrics.totalChemicals}</div>
            <div style={{ color: 'var(--success)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={14} /> +2 this week
            </div>
          </div>
          <div className="metric-icon blue"><FlaskConical size={24} /></div>
        </div>
        
        <div className="glass-panel metric-card">
          <div className="metric-info">
            <h3>Low Stock Alerts</h3>
            <div className="metric-value">{metrics.lowStockItems}</div>
            <div style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={14} /> Requires attention
            </div>
          </div>
          <div className="metric-icon orange"><AlertTriangle size={24} /></div>
        </div>

        <div className="glass-panel metric-card">
          <div className="metric-info">
            <h3>Pending Samples</h3>
            <div className="metric-value">{metrics.pendingSamples}</div>
            <div style={{ color: 'var(--success)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ArrowDownRight size={14} /> -3 since yesterday
            </div>
          </div>
          <div className="metric-icon purple"><Beaker size={24} /></div>
        </div>

        <div className="glass-panel metric-card">
          <div className="metric-info">
            <h3>Active Experiments</h3>
            <div className="metric-value">{metrics.activeExperiments}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <Clock size={14} /> On track
            </div>
          </div>
          <div className="metric-icon green"><Activity size={24} /></div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="glass-panel chart-card">
          <div className="card-header">
            <h2 className="card-title">Sample Throughput</h2>
            <select style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--panel-border)', color: 'var(--text-primary)', padding: '0.3rem', borderRadius: '4px' }}>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
                <YAxis stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Bar dataKey="samples" name="Samples Received" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="completed" name="Analyses Completed" fill="var(--accent-secondary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel list-card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
            <span className="action-link">View All</span>
          </div>
          <div className="recent-activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'sample' && <Beaker size={16} />}
                  {activity.type === 'experiment' && <Activity size={16} />}
                  {activity.type === 'alert' && <AlertTriangle size={16} color="var(--warning)" />}
                </div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
