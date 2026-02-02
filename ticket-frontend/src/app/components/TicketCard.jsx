import Link from "next/link";

export default function TicketCard({ ticket }) {
  return (
    <Link href={`/ticket/${ticket.id}`}>
      <div className="border p-4 mb-2 rounded hover:bg-gray-100 cursor-pointer">
        <h3 className="font-bold">{ticket.title}</h3>
        <p>Category: {ticket.predicted_category || "Pending"}</p>
        <p>Confidence: {ticket.confidence || "-"}</p>
      </div>
    </Link>
  );
}
