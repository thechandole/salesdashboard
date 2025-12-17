"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Button from "../atoms/Button";

type Props = {
  data: any[];
  chartType: string;
  setChartType: (t: string) => void;
};

export default function SalesChart({ data, chartType, setChartType }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex gap-3 mb-4">
        <Button onClick={() => setChartType("bar")}>Bar</Button>
        <Button onClick={() => setChartType("line")}>Line</Button>
        <Button onClick={() => setChartType("pie")}>Pie</Button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" && (
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2563eb" />
          </BarChart>
        )}

        {chartType === "line" && (
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="sales" stroke="#16a34a" />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" fill="#9333ea" />
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
