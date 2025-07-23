'use client';

import React, { useState } from 'react';
import { usePlayers } from "@/hooks/usePlayers";
import { Player } from '@/types/PlayerInterface';
import { PlayerTable } from '@/components/players/PlayerTable';
import { PlayerStatsModal } from '@/components/players/PlayerStatsModal';
import debounce from 'lodash/debounce';

export default function PlayersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const {
    data,
    isLoading,
    isError,
    error
  } = usePlayers(currentPage, searchQuery);

  const handleSearch = debounce((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, 300);

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">
          Error: {(error as Error).message}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Players</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search players..."
          onChange={(e) => handleSearch(e.target.value)}
          className="p-2 border rounded w-full max-w-md"
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PlayerTable
            players={data?.players || []}
            onSelectPlayer={setSelectedPlayer}
          />

          {/* Pagination */}
          {data?.pagination && (
            <div className="mt-4 flex gap-2 items-center justify-center">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {data.pagination.total_pages}
              </span>
              <button
                disabled={currentPage === data.pagination.total_pages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {selectedPlayer && (
        <PlayerStatsModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
}