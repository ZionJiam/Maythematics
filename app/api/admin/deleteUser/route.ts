import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/lib/server"; // server-side Supabase client with service_role_key

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });

    const supabase = await createClient(); // server-side client with service_role_key

    // Delete user from auth.users (requires service_role_key)
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Delete user error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
