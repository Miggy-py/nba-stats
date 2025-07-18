'use client'
import React, { useState } from 'react'


interface Player {
    id: string
    name: string
    team: string
    position: string
    age: number
    stats: {
        points: number
        assists: number
        rebounds: number
    }
    history: {
        season: string
        team: string
        gamesPlayed: number
    }[]
}

// Placeholder data will be replaced with actual API call later
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
    // Add more mock players as needed
]

export default function PlayersPage() {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setSelectedPlayer(null)
        }
    }


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Players</h1>

            {/* Players Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {mockPlayers.map((player) => (
                        <tr key={player.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => setSelectedPlayer(player)}
                                    className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    {player.name}
                                </button>
                            </td>
                            <td className="px-6 py-4">{player.team}</td>
                            <td className="px-6 py-4">{player.position}</td>
                            <td className="px-6 py-4">{player.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Player Stats Modal with Blur Effect */}
            {selectedPlayer && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{selectedPlayer.name}</h2>
                            <button
                                onClick={() => setSelectedPlayer(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <h3 className="font-semibold mb-2">Current Stats</h3>
                                <p>Points: {selectedPlayer.stats.points}</p>
                                <p>Assists: {selectedPlayer.stats.assists}</p>
                                <p>Rebounds: {selectedPlayer.stats.rebounds}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Player Info</h3>
                                <p>Team: {selectedPlayer.team}</p>
                                <p>Position: {selectedPlayer.position}</p>
                                <p>Age: {selectedPlayer.age}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Career History</h3>
                            <div className="space-y-2">
                                {selectedPlayer.history.map((season, index) => (
                                    <div key={index} className="flex justify-between border-b pb-2">
                                        <span>{season.season}</span>
                                        <span>{season.team}</span>
                                        <span>{season.gamesPlayed} games</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}