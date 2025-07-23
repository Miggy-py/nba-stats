export interface Player {
  id: number;
  full_name: string;
  team?: string;
  position?: string;
  age?: number;
  stats?: {
    points: number;
    assists: number;
    rebounds: number;
  };
  history?: {
    season: string;
    team: string;
    gamesPlayed: number;
  }[];
}

export interface PaginationInfo {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
}

export interface PlayersResponse {
  success: boolean;
  players: Player[];
  pagination: PaginationInfo;
}