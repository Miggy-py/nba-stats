"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Player } from "@/types/PlayerInterface";

export const columns: ColumnDef<Player>[] = [
    {
        accessorKey: 'DISPLAY_LAST_COMMA_FIRST',
        header: 'Name'
    },
    {
        accessorKey: 'TEAM_NAME',
        header: 'Team'
    },
    {
        accessorKey: 'PLAYER_AGE',
        header: 'Age'
    },
    {
        accessorKey: 'COUNTRY',
        header: 'Country'
    },
    {
        accessorKey: 'HEIGHT',
        header: 'Height'
    },
    {
        accessorKey: 'WEIGHT',
        header: 'Weight'
    },
    {
        accessorKey: 'POSITION',
        header: 'Position'
    },
    {
        accessorKey: 'DRAFT_YEAR',
        header: 'Draft Year'
    },
]
