import { useState } from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Bot } from '../types';
import { useBotsData } from '../hooks/useBotsData';

interface BotsTableProps {
    onSelectBot: (bot: Bot) => void;
}

export default function BotsTable({ onSelectBot }: BotsTableProps) {
    const { data: bots, isLoading } = useBotsData();

    const columns: ColumnDef<Bot>[] = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'status',
            header: 'Status',
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
            data={bots}
            onRowClick={(row) => onSelectBot(row)}
        />
    );
}