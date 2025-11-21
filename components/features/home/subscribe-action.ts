'use server'

import { supabase } from "@/lib/supabaseClient";
import { ActionResult } from "@/types";

export async function subscribeAction(_previous: ActionResult, formData: FormData): Promise<ActionResult> {
    const { email } = Object.fromEntries(formData.entries());

    if (!email) return { error: "email required" }

    const { error } = await supabase().from("newsletter_subscribers").insert({ email });

    if (error) return { error: error.message }

    return { success: "subscribed successfully" };
}