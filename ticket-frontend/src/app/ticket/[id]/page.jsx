"use client";
import { useState, useEffect } from "react";
import { getTicket } from "../../lib/app";

export default function TicketDetail({ params }) {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    getTicket(params.id).then(setTicket);
  }, [params.id]);

  if (!ticket) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto border rounded mt-10">
      <h2 className="text-xl font-bold mb-2">{ticket.title}</h2>
      <p className="mb-2">{ticket.description}</p>
      <p className="mb-1">
        <strong>Category:</strong> {ticket.predicted_category || "Pending"}
      </p>
      <p>
        <strong>Confidence:</strong>{" "}
        {ticket.confidence !== null ? ticket.confidence : "-"}
      </p>
    </div>
  );
}
