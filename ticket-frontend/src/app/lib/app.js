const BASE_URL = "http://localhost:8001"; // backend URL

export async function getTickets() {
  const res = await fetch(`${BASE_URL}/tickets/`);
  return res.json();
}

export async function getTicket(id) {
  const res = await fetch(`${BASE_URL}/ticket/${id}`);
  return res.json();
}

export async function createTicket(data) {
  const res = await fetch(`${BASE_URL}/ticket`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.detail || "Failed to create ticket");
  }
  
  return res.json();
}


export async function predictTicket(id) {
  const res = await fetch(`${BASE_URL}/ticket/predict/${id}`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to predict ticket");
  return res.json(); // <--- response has predicted_category & confidence
}