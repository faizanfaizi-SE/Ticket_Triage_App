"use client";
import { useState, useEffect } from "react";
import { getTickets } from "./lib/app";
import TicketCard from "./components/TicketCard";
import Link from "next/link";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState("");

 useEffect(() => {
    async function loadTickets() {
      const data = await getTickets();
      console.log("Raw Data from Backend:", data); // <--- Yeh line check karni hai
      setTickets(data);
    }
    loadTickets();
  }, []);
  const filteredTickets = filter
    ? tickets.filter(t => t.predicted_category === filter)
    : tickets;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <Link href="/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          + New Ticket
        </Link>
      </div>

      <select
        className="border p-2 mb-4 rounded"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Complaint">Complaint</option>
        <option value="Request">Request</option>
        <option value="Sales">Sales</option>
        <option value="Other">Other</option>
      </select>

      {filteredTickets.length > 0 ? (
        filteredTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
}
