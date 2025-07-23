// src/components/players/PlayerStatsModal.tsx
import React from 'react';
import { Player } from '@/types/PlayerInterface';
import { usePlayerStats } from '@/hooks/usePlayerStats';

interface PlayerStatsModalProps {
  player: Player;
  onClose: () => void;
}

export const PlayerStatsModal: React.FC<PlayerStatsModalProps> = ({ player, onClose }) => {
  const {
    data,
    isLoading,
    isError,
    error
  } = usePlayerStats(player.full_name);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{player.full_name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : isError ? (
          <div className="text-red-500 text-center py-4">
            Error: {error?.message || 'Failed to load stats'}
          </div>
        ) : (
          <div className="space-y-4">
            {data?.stats && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Team</h3>
                    <p>{data.stats.team}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Position</h3>
                    <p>{data.stats.position}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold">Points</h3>
                    <p>{data.stats.points}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Assists</h3>
                    <p>{data.stats.assists}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Rebounds</h3>
                    <p>{data.stats.rebounds}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};