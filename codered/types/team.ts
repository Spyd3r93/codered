export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Administrator' | 'Incident Manager' | 'Responder' | 'User';
  email: string;
  joinedAt: Date;
}
