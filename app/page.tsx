"use client";

import { useState } from "react";
import { salesData } from "./lib/salesData";
import DashboardLayout from "./components/templates/DashboardLayout";
import YearFilter from "./components/molecules/YearFilter";
import SalesChart from "./components/organisms/SalesChart";
import "./globals.css";



export default function DashboardPage() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState("bar");

  const filteredData = salesData.filter(
    (d) => d.year === year && d.sales >= threshold
  );

  return (
    <DashboardLayout>
      <YearFilter
        year={year}
        setYear={setYear}
        threshold={threshold}
        setThreshold={setThreshold}
      />
      <SalesChart
        data={filteredData}
        chartType={chartType}
        setChartType={setChartType}
      />
    </DashboardLayout>
  );
}
