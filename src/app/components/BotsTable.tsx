import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Bot } from '../types';
import { useBotsData } from '../hooks/useBotsData';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface BotsTableProps {
    onSelectBot: (bot: Bot) => void;
}

export default function BotsTable({ onSelectBot }: BotsTableProps) {
    const { data: bots, isLoading } = useBotsData();

    const columns: ColumnDef<Bot>[] = [
        {
            accessorKey: 'name',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Name
                        {column.getIsSorted() && (
                            column.getIsSorted() === "asc" ? (
                                <ArrowUp className="ml-2 h-4 w-4" />
                            ) : (
                                <ArrowDown className="ml-2 h-4 w-4" />
                            )
                        )}
                    </Button>
                )
            },
        },
        {
            accessorKey: 'status',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Status
                        {column.getIsSorted() && (
                            column.getIsSorted() === "asc" ? (
                                <ArrowUp className="ml-2 h-4 w-4" />
                            ) : (
                                <ArrowDown className="ml-2 h-4 w-4" />
                            )
                        )}
                    </Button>
                )
            },
        },
        {
            accessorKey: 'created',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Created
                        {column.getIsSorted() && (
                            column.getIsSorted() === "asc" ? (
                                <ArrowUp className="ml-2 h-4 w-4" />
                            ) : (
                                <ArrowDown className="ml-2 h-4 w-4" />
                            )
                        )}
                    </Button>
                )
            },
            cell: ({ row }) => new Date(row.original.created).toLocaleString(),
        },
    ];

    if (isLoading) return <div>Loading...</div>;

    return (
        <DataTable
            columns={columns}
            data={bots}
            onRowClick={(row) => onSelectBot(row)}
        />
    );
}