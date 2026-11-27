export default function PriceBadge({ price }: { price: number }) {
  return (
    <span className="rounded bg-purple-900 px-2 py-1 text-xs font-bold text-white">
      ${price}
    </span>
  );
}