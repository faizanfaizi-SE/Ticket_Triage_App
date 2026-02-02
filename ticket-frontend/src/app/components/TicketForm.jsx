"use client";
import { useState } from "react";
import { createTicket, predictTicket } from "../lib/app";
import { useRouter } from "next/navigation";

export default function TicketForm({ setTickets }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title || !description) return alert("Fill all fields!");

    try {
      // 1. Create ticket
      const ticket = await createTicket({ title, description });

      // 2. Predict category using ML API
      const predictedTicket = await predictTicket(ticket.id);

      // 3. Update tickets state in list (optional)
      if (setTickets) {
        setTickets((prev) =>
          prev.map((t) => (t.id === predictedTicket.id ? predictedTicket : t))
        );
      }

      alert("Ticket created and predicted!");
      router.push("/"); // go back to ticket list
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 border rounded mt-10">
      <h2 className="text-xl font-bold">Create Ticket</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full border p-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Create Ticket
      </button>
    </div>
  );
}
