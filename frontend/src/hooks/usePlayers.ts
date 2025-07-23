// src/hooks/usePlayers.ts
import { useQuery } from '@tanstack/react-query';
import { PlayersResponse } from '@/types/PlayerInterface';
import { playersApi } from '@/api/players';

export const usePlayers = (page: number, search: string) => {
  return useQuery<PlayersResponse, Error>({
    queryKey: ['players', page, search],
    queryFn: () => playersApi.getPlayers({ page, search }),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60,
  });
};