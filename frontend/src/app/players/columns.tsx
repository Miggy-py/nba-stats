"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Player } from "@/types/PlayerInterface";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Player>[] = [
    {
        accessorKey: 'DISPLAY_LAST_COMMA_FIRST',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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
