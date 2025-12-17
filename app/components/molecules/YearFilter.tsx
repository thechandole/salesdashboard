import Input from "../atoms/Input";

type Props = {
  year: number;
  setYear: (y: number) => void;
  threshold: number;
  setThreshold: (v: number) => void;
};

export default function YearFilter({
  year,
  setYear,
  threshold,
  setThreshold,
}: Props) {
  return (
    <div className="flex gap-4 mb-6">
      <Input
        type='"number" | "button" '
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        placeholder="Year"
      />
      <Input
        type='"number" | "button" '
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        placeholder="Sales Threshold"
      />
    </div>
  );
}
