export type DashboardType = 'smartscript' | 'bundle' | 'assignment' | 'session';
export type DashboardAction = 'add' | 'edit' | 'play' | 'view';

type Dashboard = {
  id?: string;
  type: DashboardType;
  action: DashboardAction;
  date: Date;
  primary: {
    id: string;
    title: string;
    description?: string;
    thumbnail?: MediaImage;
  };
  secondary?: {
    id: string;
    title: string;
    description?: string;
    thumbnail?: MediaImage;
  };
  userId: string;
  groupId: string;
  producerId: string;
};

export default Dashboard;
