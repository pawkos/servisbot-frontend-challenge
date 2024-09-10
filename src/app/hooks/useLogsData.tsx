import { useState, useEffect } from 'react';
import { Log } from '../types';

export function useLogsData(botId: string, workerId?: string) {
    const [data, setData] = useState<Log[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(botId: string, workerId?: string) {
            // Replace this with an API call when switching to a real backend
            const response = await fetch('/api/logs');
            const bots: Log[] = await response.json();
            setData(bots.filter(item => 
                item.bot === botId&& 
                (workerId ? item.worker === workerId : true)
            ));
            setIsLoading(false);
        }
        fetchData(botId, workerId);
    }, [botId, workerId]);

    return { data, isLoading };
}