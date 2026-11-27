type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({ children, variant = "primary", onClick, type = "button" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-purple-900 text-white"
      : "border border-purple-900 text-purple-900 bg-white";
  return (
    <button type={type} onClick={onClick} className={`w-full rounded-lg py-3 font-semibold ${styles}`}>
      {children}
    </button>
  );
}