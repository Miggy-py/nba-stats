// src/hooks/usePlayerStats.ts
import { useQuery } from '@tanstack/react-query';
import { playersApi } from '@/api/players';

export interface PlayerStats {
  team: string;
  position: string;
  points: number;
  assists: number;
  rebounds: number;
  // Add other stats as needed
}

export interface PlayerStatsResponse {
  success: boolean;
  stats: PlayerStats;
}

export const usePlayerStats = (playerName: string | null) => {
  return useQuery<PlayerStatsResponse, Error>({
    queryKey: ['playerStats', playerName],
    queryFn: () => {
      if (!playerName) throw new Error('Player name is required');
      return playersApi.getPlayerDetailedStats(playerName);
    },
    enabled: !!playerName, // Only run query if playerName is provided
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};