
import axios from 'axios';
import { PlayersResponse } from '@/types/PlayerInterface';
import { PlayerStatsResponse } from "@/hooks/usePlayerStats";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const playersApi = {
  getPlayers: async ({
    page = 1,
    search = ''
  }: {
    page?: number;
    search?: string
  }): Promise<PlayersResponse> => {
    const { data } = await axios.get<PlayersResponse>(
      `${API_BASE_URL}/api/players`,
      {
        params: {
          page,
          search
        }
      }
    );
    return data;
  },

  getPlayerDetailedStats: async (playerName: string): Promise<PlayerStatsResponse> => {
    const { data } = await axios.get<PlayerStatsResponse>(
      `${API_BASE_URL}/api/players/${encodeURIComponent(playerName)}/stats`
    );
    return data;
  }
};