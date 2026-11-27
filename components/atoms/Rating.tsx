export default function Rating({ value }: { value: number }) {
  return <span className="text-xs font-semibold">⭐ {value}</span>;
}