const statusStyles = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  approved: "bg-green-100 text-green-800 border-green-300",
  draft: "bg-gray-100 text-gray-800 border-gray-300",
};

export default function StatusBadge({ status }: { status: string }) {
  const cleanStatus = status.toLowerCase();
  const style =
    statusStyles[cleanStatus as keyof typeof statusStyles] ||
    "bg-muted text-muted-foreground";

  return (
    <span
      className={`text-xs font-medium px-2 py-1 rounded-md border ${style}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
