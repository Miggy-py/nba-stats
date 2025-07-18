import React from 'react'
import { Player } from '@/types/PlayerInterface'

interface PlayerStatsModalProps {
    player: Player
    onClose: () => void
}

export const PlayerStatsModal: React.FC<PlayerStatsModalProps> = ({ player, onClose }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{player.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h3 className="font-semibold mb-2">Current Stats</h3>
                        <p>Points: {player.stats.points}</p>
                        <p>Assists: {player.stats.assists}</p>
                        <p>Rebounds: {player.stats.rebounds}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Player Info</h3>
                        <p>Team: {player.team}</p>
                        <p>Position: {player.position}</p>
                        <p>Age: {player.age}</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Career History</h3>
                    <div className="space-y-2">
                        {player.history.map((season, index) => (
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
    )
}
