export type Node = {
  id?: string;
  to: string[];
  actorId: string;
  x?: number;
  y?: number;
  dimensions?: {
    width: number;
    height: number;
  };
};
