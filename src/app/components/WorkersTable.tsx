import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Worker } from '../types';
import { useWorkersData } from '../hooks/useWorkersData';
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from '@/components/ui/button';

interface WorkersTableProps {
    botId: string;
    onSelectWorker: (worker: Worker) => void;
}

export default function WorkersTable({ botId, onSelectWorker }: WorkersTableProps) {
    const { data: workers, isLoading } = useWorkersData(botId);

    const columns: ColumnDef<Worker>[] = [
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
            data={workers}
            onRowClick={(row) => onSelectWorker(row)}
        />
    );
}