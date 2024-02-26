export type DashboardType = 'smartscript' | 'bundle' | 'assignment' | 'session';
export type DashboardAction = 'add' | 'edit' | 'play' | 'view';

type Dashboard = {
  id?: string;
  type: DashboardType;
  action: DashboardAction;
  docId: string;
  secondaryDocId?: string;
  primary: string;
  secondary?: string;
  primaryThumbnail?: MediaImage;
  secondaryThumbnail?: MediaImage;
  userId: string;
  groupId: string;
  producerId: string;
  timestamp: number;
};

export default Dashboard;
