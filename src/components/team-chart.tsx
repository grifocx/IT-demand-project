"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * A component that displays a bar chart for team data.
 *
 * @param props - The props for the component.
 * @param props.data - The data for the chart. Each object should have a `team` name and a `count`.
 * @returns The team chart component.
 */
export function TeamChart({ data }: { data: { team: string; count: number }[] }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#ffc658" name="Team Members" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
