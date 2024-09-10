import { useState, useEffect } from 'react';
import { Worker } from '../types';

export function useWorkersData(botId: string) {
    const [data, setData] = useState<Worker[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(botId: string) {
            // Replace this with an API call when switching to a real backend
            const response = await fetch('/api/workers');
            const bots: Worker[] = await response.json();
            setData(bots.filter(item => item.bot === botId));
            setIsLoading(false);
        }
        fetchData(botId);
    }, [botId]);

    return { data, isLoading };
}