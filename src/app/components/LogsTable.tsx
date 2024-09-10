import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Log } from '../types';
import { useLogsData } from '../hooks/useLogsData';

interface LogsTableProps {
    botId: string;
    workerId?: string;
}

export default function LogsTable({ botId, workerId }: LogsTableProps) {
    const { data: logs, isLoading } = useLogsData(botId, workerId);

    const columns: ColumnDef<Log>[] = [
        {
            accessorKey: 'created',
            header: 'Created',
            cell: ({ row }) => new Date(row.original.created).toLocaleString(),
        },
        {
            accessorKey: 'message',
            header: 'Message',
        },
    ];

    if (isLoading) return <div>Loading...</div>;

    return <DataTable columns={columns} data={logs} />;
}