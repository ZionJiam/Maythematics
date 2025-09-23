// app/api/admin/createUser/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/lib/server"; // server-side Supabase client with service_role_key

export async function POST(req: NextRequest) {
  try {
    const { email, password, full_name, role } = await req.json();

    if (!email || !password || !full_name || !role) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const supabase = await createClient();

    // 1️⃣ Create user in Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) throw authError;

    const userId = authUser.user.id;

    // 2️⃣ Insert into profiles table
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({ id: userId, full_name, email });

    if (profileError) throw profileError;

    // 3️⃣ Insert into user_roles table
    const { error: roleError } = await supabase
      .from("user_roles")
      .insert({ user_id: userId, role });

    if (roleError) throw roleError;

    return NextResponse.json({ message: "User created successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Error creating user" }, { status: 500 });
  }
}
