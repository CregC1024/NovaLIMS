export interface Chemical {
  id: string;
  name: string;
  formula: string;
  casNumber: string;
  location: string;
  quantity: number;
  unit: string;
  threshold: number;
  hazardClass: string;
  lastUpdated: string;
}

export interface Sample {
  id: string;
  code: string;
  type: string;
  status: 'Pending' | 'In Progress' | 'Analyzed' | 'Archived';
  receivedDate: string;
  project: string;
  researcher: string;
}

export interface Experiment {
  id: string;
  title: string;
  status: 'Planning' | 'Active' | 'Completed' | 'Failed';
  startDate: string;
  endDate?: string;
  researcher: string;
  progress: number;
}

export interface SystemMetrics {
  totalChemicals: number;
  lowStockItems: number;
  activeExperiments: number;
  pendingSamples: number;
}
