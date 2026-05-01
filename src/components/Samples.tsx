import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, CheckCircle2, Clock, Inbox, Archive } from 'lucide-react';
import { mockSamples } from '../mockData';

export const Samples = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSamples = mockSamples.filter(s => 
    s.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Pending': 
        return <span className="badge badge-warning" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><Inbox size={12} /> Pending</span>;
      case 'In Progress': 
        return <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12} /> In Progress</span>;
      case 'Analyzed': 
        return <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle2 size={12} /> Analyzed</span>;
      case 'Archived': 
        return <span className="badge badge-neutral" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><Archive size={12} /> Archived</span>;
      default: 
        return <span className="badge badge-neutral">{status}</span>;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Sample Management</h1>
          <p className="page-subtitle">Track sample lifecycle and analysis status</p>
        </div>
        <button className="primary-btn">
          <Plus size={18} />
          Register Sample
        </button>
      </div>

      <div className="glass-panel">
        <div className="table-controls">
          <div className="search-input">
            <Search size={18} color="var(--text-secondary)" />
            <input 
              type="text" 
              placeholder="Search sample code or project..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <button className="filter-btn">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sample Code</th>
                <th>Type</th>
                <th>Project</th>
                <th>Status</th>
                <th>Received Date</th>
                <th>Assigned To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSamples.map((sample) => (
                <tr key={sample.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{sample.code}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: {sample.id}</div>
                  </td>
                  <td>{sample.type}</td>
                  <td>{sample.project}</td>
                  <td>{getStatusBadge(sample.status)}</td>
                  <td>{sample.receivedDate}</td>
                  <td>{sample.researcher}</td>
                  <td>
                    <button className="action-btn">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredSamples.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                    No samples found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
