import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical } from 'lucide-react';
import { mockChemicals } from '../mockData';

export const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChemicals = mockChemicals.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.casNumber.includes(searchTerm)
  );

  const getHazardBadge = (hazardClass: string) => {
    switch(hazardClass) {
      case 'Corrosive': return <span className="badge badge-danger">Corrosive</span>;
      case 'Flammable': return <span className="badge badge-warning">Flammable</span>;
      case 'Oxidizer': return <span className="badge badge-warning">Oxidizer</span>;
      case 'Toxic': return <span className="badge badge-danger">Toxic</span>;
      default: return <span className="badge badge-neutral">None</span>;
    }
  };

  const getStockStatus = (quantity: number, threshold: number) => {
    if (quantity <= threshold) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="status-indicator critical"></span>
          Low Stock
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="status-indicator good"></span>
        In Stock
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Chemical Database</h1>
          <p className="page-subtitle">Manage laboratory inventory and stock levels</p>
        </div>
        <button className="primary-btn">
          <Plus size={18} />
          Add Chemical
        </button>
      </div>

      <div className="glass-panel">
        <div className="table-controls">
          <div className="search-input">
            <Search size={18} color="var(--text-secondary)" />
            <input 
              type="text" 
              placeholder="Search by name or CAS..." 
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
                <th>Chemical Name</th>
                <th>Formula</th>
                <th>CAS Number</th>
                <th>Location</th>
                <th>Stock Level</th>
                <th>Hazard Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredChemicals.map((chem) => (
                <tr key={chem.id}>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{chem.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: {chem.id}</div>
                  </td>
                  <td>{chem.formula}</td>
                  <td style={{ fontFamily: 'monospace' }}>{chem.casNumber}</td>
                  <td>{chem.location}</td>
                  <td>
                    <div style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                      {chem.quantity} {chem.unit}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {getStockStatus(chem.quantity, chem.threshold)}
                    </div>
                  </td>
                  <td>{getHazardBadge(chem.hazardClass)}</td>
                  <td>
                    <button className="action-btn">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredChemicals.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                    No chemicals found matching your search.
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
