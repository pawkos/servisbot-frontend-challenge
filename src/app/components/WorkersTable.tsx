import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Worker } from '../types';
import { useWorkersData } from '../hooks/useWorkersData';

interface WorkersTableProps {
    botId: string;
    onSelectWorker: (worker: Worker) => void;
}

export default function WorkersTable({ botId, onSelectWorker }: WorkersTableProps) {
    const { data: workers, isLoading } = useWorkersData(botId);

    const columns: ColumnDef<Worker>[] = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'created',
            header: 'Created',
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