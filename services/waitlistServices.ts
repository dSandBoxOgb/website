export async function addToWaitlist({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to join waitlist");

  return response.json();
}
