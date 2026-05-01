import { useState } from 'react';
import { Search, Plus, Play, Pause, CheckCircle, XCircle } from 'lucide-react';
import { mockExperiments } from '../mockData';

export const Experiments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExperiments = mockExperiments.filter(e => 
    e.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Planning': return <Pause size={16} color="var(--text-secondary)" />;
      case 'Active': return <Play size={16} color="var(--accent-primary)" />;
      case 'Completed': return <CheckCircle size={16} color="var(--success)" />;
      case 'Failed': return <XCircle size={16} color="var(--danger)" />;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Experiment Tracking</h1>
          <p className="page-subtitle">Manage ongoing and past laboratory experiments</p>
        </div>
        <button className="primary-btn">
          <Plus size={18} />
          New Experiment
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div className="search-input" style={{ width: '100%', maxWidth: '500px' }}>
          <Search size={18} color="var(--text-secondary)" />
          <input 
            type="text" 
            placeholder="Search experiments..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {filteredExperiments.map(exp => (
          <div key={exp.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{exp.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: {exp.id}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>
                {getStatusIcon(exp.status)}
                <span style={{ 
                  color: exp.status === 'Active' ? 'var(--accent-primary)' : 
                         exp.status === 'Completed' ? 'var(--success)' : 
                         exp.status === 'Failed' ? 'var(--danger)' : 'var(--text-secondary)' 
                }}>{exp.status}</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
                <span style={{ fontWeight: 600 }}>{exp.progress}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${exp.progress}%`,
                    background: exp.status === 'Completed' ? 'var(--success)' : 
                                exp.status === 'Failed' ? 'var(--danger)' : ''
                  }}
                ></div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--panel-border)' }}>
              <div>
                <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Lead Researcher</span>
                <span>{exp.researcher}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Start Date</span>
                <span>{exp.startDate}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button style={{ flex: 1, padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--panel-border)', borderRadius: '6px', color: 'var(--text-primary)', transition: 'background 0.2s' }}>
                View Details
              </button>
              {exp.status === 'Active' && (
                <button style={{ flex: 1, padding: '0.5rem', background: 'var(--accent-primary)', border: 'none', borderRadius: '6px', color: 'white', transition: 'background 0.2s' }}>
                  Update
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {filteredExperiments.length === 0 && (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No experiments found matching your search.
        </div>
      )}
    </div>
  );
};
