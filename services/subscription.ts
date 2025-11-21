export async function subscribe({
  email,
}: {
  email: string;
}) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  if (!response.ok) throw new Error("Failed to subscribe");

  return response.json();
}
