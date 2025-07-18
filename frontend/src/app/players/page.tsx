'use client'
import React, { useState } from 'react'
import { Player } from '@/types/PlayerInterface'
import { PlayerTable } from '@/components/players/PlayerTable'
import { PlayerStatsModal } from '@/components/players/PlayerStatsModal'


// Placeholder data will be replaced with actual data later
const mockPlayers: Player[] = [
    {
        id: '1',
        name: 'John Doe',
        team: 'Team A',
        position: 'Forward',
        age: 25,
        stats: {
            points: 20.5,
            assists: 5.2,
            rebounds: 6.8
        },
        history: [
            { season: '2024-25', team: 'Team A', gamesPlayed: 82 },
            { season: '2023-24', team: 'Team B', gamesPlayed: 78 }
        ]
    },
]

export default function PlayersPage() {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Players</h1>

            <PlayerTable
                players={mockPlayers}
                onSelectPlayer={setSelectedPlayer}
            />

            {selectedPlayer && (
                <PlayerStatsModal
                    player={selectedPlayer}
                    onClose={() => setSelectedPlayer(null)}
                />
            )}
        </div>
    )
}
