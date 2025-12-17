export type SalesRecord = {
  year: number;
  month: string;
  sales: number;
};

export const salesData: SalesRecord[] = [
  // 2022
  { year: 2022, month: "Jan", sales: 12000 },
  { year: 2022, month: "Feb", sales: 15000 },
  { year: 2022, month: "Mar", sales: 18000 },

  // 2023
  { year: 2023, month: "Jan", sales: 20000 },
  { year: 2023, month: "Feb", sales: 23000 },
  { year: 2023, month: "Mar", sales: 25000 },

  // 2024
  { year: 2024, month: "Jan", sales: 30000 },
  { year: 2024, month: "Feb", sales: 34000 },
  { year: 2024, month: "Mar", sales: 38000 },
];
