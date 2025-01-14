export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Active' | 'Resolved' | 'Acknowledged';
  createdAt: Date;
  updatedAt: Date;
}
