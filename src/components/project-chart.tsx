"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * @description A component that displays a bar chart for project data.
 * @param {object} props - The props for the component.
 * @param {{name: string, count: number}[]} props.data - The data for the chart. Each object should have a `name` (status) and a `count`.
 * @returns {React.ReactElement} - The project chart component.
 */
export function ProjectChart({ data }: { data: { name: string; count: number }[] }) {
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
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" name="Projects" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
