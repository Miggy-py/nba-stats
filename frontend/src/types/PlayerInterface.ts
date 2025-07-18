export interface Player {
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
