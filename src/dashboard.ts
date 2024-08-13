import type { MediaImage } from './media';
export type DashboardType = 'smartscript' | 'assignment' | 'session';
export type DashboardAction = 'edit' | 'play' | 'view';

type DashboardSearchParams = {
  filters?: string[];
  sort?: string;
};

export type DashboardSearch = {
  manage?: DashboardSearchParams;
  play?: DashboardSearchParams;
};

type Dashboard = {
  id?: string;
  type: DashboardType;
  action: DashboardAction;
  date: Date | number;
  primaryId: string;
  primaryTitle: string;
  primaryDescription?: string;
  primaryThumbnail?: MediaImage;
  secondaryId?: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryThumbnail?: MediaImage;
  userId: string;
  groupId: string;
  producerId: string;
};

export default Dashboard;
