import React from 'react'
import { Player } from '@/types/PlayerInterface'

interface PlayerTableProps {
    players: Player[]
    onSelectPlayer: (player: Player) => void
}

export const PlayerTable: React.FC<PlayerTableProps> = ({ players, onSelectPlayer }) => {
    return (
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
                    {players.map((player) => (
                        <tr key={player.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => onSelectPlayer(player)}
                                    className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    {player.full_name}
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
    )
}
