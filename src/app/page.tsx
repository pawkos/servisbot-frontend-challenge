"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BotsTable from './components/BotsTable';
import WorkersTable from './components/WorkersTable';
import LogsTable from './components/LogsTable';
import { Bot, Worker, Log } from './types';

export default function Home() {
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bot Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <BotsTable onSelectBot={setSelectedBot} />
          </CardContent>
        </Card>
        {selectedBot && (
          <Card>
            <CardHeader>
              <CardTitle>Workers for {selectedBot.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkersTable botId={selectedBot.name} onSelectWorker={setSelectedWorker} />
            </CardContent>
          </Card>
        )}
        {selectedBot && (
          <Card>
            <CardHeader>
              <CardTitle>Logs for {selectedBot.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <LogsTable botId={selectedBot.id} workerId={selectedWorker?.id} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}