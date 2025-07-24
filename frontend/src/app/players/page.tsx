'use client'
import React, { useState } from 'react'
import { Player } from '@/types/PlayerInterface'
import { columns } from "./columns"
import { DataTable } from "./data-table"


async function getData(): Promise<Player[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            name: 'John Doe',
            TEAM_ID: "Lakers",
            PLAYER_AGE: 28,
            SEASON_ID: '',
            LEAGUE_ID: '',
            TEAM_ABBREVIATION: '',
            GP: 0,
            GS: 0,
            MIN: 0,
            FGM: 0,
            FGA: 0,
            FG_PCT: 0,
            FG3M: 0,
            FG3A: 0,
            FG3_PCT: 0,
            FTM: 0,
            FTA: 0,
            FT_PCT: 0,
            OREB: 0,
            DREB: 0,
            REB: 0,
            AST: 0,
            STL: 0,
            BLK: 0,
            TOV: 0,
            PF: 0,
            PTS: 0
        },
        // ...
    ]
}


export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
