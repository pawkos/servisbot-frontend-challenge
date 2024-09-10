import { useState, useEffect } from 'react';
import { Bot } from '../types';

export function useBotsData() {
    const [data, setData] = useState<Bot[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // Replace this with an API call when switching to a real backend
            const response = await fetch('/api/bots');
            const bots = await response.json();
            setData(bots);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return { data, isLoading };
}