'use server'

import { supabase } from "@/lib/supabaseClient";
import { ActionResult } from "@/types";

export async function waitlistAction(_previous: ActionResult, formData: FormData): Promise<ActionResult> {
  const { name, email } = Object.fromEntries(formData.entries())

  if (!name || !email) return { error: "name and email are required" }

  const { error } = await supabase().from("waitlist").insert({ name, email });
    if (error)
    return { error: error.message }

  return { success: "subscribed successfully" }
}