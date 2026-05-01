import type { Chemical, Sample, Experiment } from './types';

export const mockChemicals: Chemical[] = [
  { id: 'C001', name: 'Sodium Chloride', formula: 'NaCl', casNumber: '7647-14-5', location: 'Shelf A1', quantity: 500, unit: 'g', threshold: 100, hazardClass: 'None', lastUpdated: '2026-04-20' },
  { id: 'C002', name: 'Hydrochloric Acid', formula: 'HCl', casNumber: '7647-01-0', location: 'Acid Cabinet 1', quantity: 2.5, unit: 'L', threshold: 1, hazardClass: 'Corrosive', lastUpdated: '2026-04-28' },
  { id: 'C003', name: 'Methanol', formula: 'CH3OH', casNumber: '67-56-1', location: 'Flammables 2', quantity: 4.0, unit: 'L', threshold: 2, hazardClass: 'Flammable', lastUpdated: '2026-04-25' },
  { id: 'C004', name: 'Sulfuric Acid', formula: 'H2SO4', casNumber: '7664-93-9', location: 'Acid Cabinet 1', quantity: 1.0, unit: 'L', threshold: 1.5, hazardClass: 'Corrosive', lastUpdated: '2026-04-21' },
  { id: 'C005', name: 'Potassium Permanganate', formula: 'KMnO4', casNumber: '7722-64-7', location: 'Oxidizer Cabinet', quantity: 50, unit: 'g', threshold: 200, hazardClass: 'Oxidizer', lastUpdated: '2026-04-15' },
  { id: 'C006', name: 'Acetone', formula: 'C3H6O', casNumber: '67-64-1', location: 'Flammables 1', quantity: 10.0, unit: 'L', threshold: 5, hazardClass: 'Flammable', lastUpdated: '2026-04-29' },
  { id: 'C007', name: 'Sodium Hydroxide', formula: 'NaOH', casNumber: '1310-73-2', location: 'Shelf A2', quantity: 1000, unit: 'g', threshold: 250, hazardClass: 'Corrosive', lastUpdated: '2026-04-22' },
];

export const mockSamples: Sample[] = [
  { id: 'S1024', code: 'W-202604-01', type: 'Water', status: 'Pending', receivedDate: '2026-04-29', project: 'River Basin Study', researcher: 'Dr. E. Vance' },
  { id: 'S1025', code: 'S-202604-12', type: 'Soil', status: 'In Progress', receivedDate: '2026-04-28', project: 'Agricultural Tox', researcher: 'J. Smith' },
  { id: 'S1026', code: 'T-202604-05', type: 'Tissue', status: 'Analyzed', receivedDate: '2026-04-25', project: 'Cellular Response', researcher: 'Dr. A. Chen' },
  { id: 'S1027', code: 'W-202604-02', type: 'Water', status: 'Pending', receivedDate: '2026-04-30', project: 'River Basin Study', researcher: 'Dr. E. Vance' },
  { id: 'S1028', code: 'P-202604-01', type: 'Plasma', status: 'Archived', receivedDate: '2026-04-10', project: 'Metabolomics Q2', researcher: 'M. Rossi' },
];

export const mockExperiments: Experiment[] = [
  { id: 'EXP-089', title: 'Heavy Metal Titration Series', status: 'Active', startDate: '2026-04-28', researcher: 'Dr. E. Vance', progress: 65 },
  { id: 'EXP-090', title: 'HPLC Method Validation', status: 'Planning', startDate: '2026-05-02', researcher: 'J. Smith', progress: 10 },
  { id: 'EXP-088', title: 'Lipid Extraction Phase 1', status: 'Completed', startDate: '2026-04-15', endDate: '2026-04-27', researcher: 'Dr. A. Chen', progress: 100 },
  { id: 'EXP-091', title: 'Cell Culture Toxicity Assay', status: 'Active', startDate: '2026-04-29', researcher: 'Dr. A. Chen', progress: 30 },
];

export const analyticsData = [
  { name: 'Mon', samples: 12, completed: 8 },
  { name: 'Tue', samples: 19, completed: 15 },
  { name: 'Wed', samples: 15, completed: 12 },
  { name: 'Thu', samples: 22, completed: 18 },
  { name: 'Fri', samples: 28, completed: 24 },
  { name: 'Sat', samples: 5, completed: 20 },
  { name: 'Sun', samples: 2, completed: 10 },
];
