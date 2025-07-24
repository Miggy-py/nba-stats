"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Player } from "@/types/PlayerInterface";

export const columns: ColumnDef<Player>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'TEAM_ID',
        header: 'Team'
    },
    {
        accessorKey: 'PLAYER_AGE',
        header: 'Age'
    },
]
