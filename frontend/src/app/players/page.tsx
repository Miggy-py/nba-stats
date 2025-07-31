import React from 'react'
import { Player } from '@/types/PlayerInterface'
import { columns } from "./columns"
import { DataTable } from "./data-table"


async function getData(): Promise<Player[]> {
    try {
        const response = await fetch('http://localhost:5001/api/player')
        const data = await response.json()
        console.log(data)
        return data as Player[]
    } catch (error) {
        console.error("Couldn't fetch data from Flask backend: ", error)
        return []
    }
}


export default async function PlayersPage() {
    const data = await getData() // DO NOT USE 'USE CLIENT' WITH AWAIT GET DATA

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
