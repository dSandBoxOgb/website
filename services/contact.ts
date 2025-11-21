interface IMessage {
    name: string,
    email: string,
    phone: string,
    message: string
}

export async function message(data: IMessage) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify(data),
    
  });
  if (!response.ok) throw new Error("failed to send message");

  return response.json();
}
