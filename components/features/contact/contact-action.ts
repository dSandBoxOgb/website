'use server'

import { supabase } from "@/lib/supabaseClient";


export type ActionResult = { error?: string; success?: string };

export async function contactAction(_previous: ActionResult, formData: FormData): Promise<ActionResult> {
  const { name, email, phone, message } = Object.fromEntries(formData.entries())

  if (!name || !email || !message) return { error: "name, email and message are required" }

  const { error } = await supabase().from("message").insert({ email });

    if (error)
    return { error: error.message }

  return { success: "message sent" }
}