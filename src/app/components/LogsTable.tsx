import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Log } from '../types';
import { useLogsData } from '../hooks/useLogsData';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

interface LogsTableProps {
    botId: string;
    workerId?: string;
}

export default function LogsTable({ botId, workerId }: LogsTableProps) {
    const { data: logs, isLoading } = useLogsData(botId, workerId);

    const columns: ColumnDef<Log>[] = [
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
            cell: ({ row }) => <div className="whitespace-normal break-words w-auto">{new Date(row.original.created).toLocaleString()}</div>,
        },
        {
            accessorKey: 'message',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Message
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
            cell: ({ cell }) => <div className="whitespace-normal break-words w-auto">{String(cell.getValue())}</div>
        },
    ];

    if (isLoading) return <div>Loading...</div>;

    return <DataTable columns={columns} data={logs} />;
}