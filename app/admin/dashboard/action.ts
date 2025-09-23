// app/admin/dashboard/action.ts
import { createAdminClient } from "@/app/lib/server";
import { createClient } from "@/app/lib/server";

// Delete user (Auth + Profile)
export async function deleteUser(userId: string) {
  // 1️⃣ Delete from Supabase Auth via admin
    const supabaseAdmin = await createAdminClient();
  const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);
  if (authError) throw new Error("Failed to delete Auth user: " + authError.message);

  // 2️⃣ Delete from profiles table
  const supabase = await createClient();
  const { error: profileError } = await supabase
    .from("profiles")
    .delete()
    .eq("id", userId);

  if (profileError) throw new Error("Failed to delete profile: " + profileError.message);

  return { success: true };
}

// Update user profile + role + optionally Auth email/password
export async function updateUser(userId: string, data: {
  full_name?: string;
  email?: string;
  password?: string;
  role?: "admin" | "user";
}) {
  const supabase = await createClient();
    const supabaseAdmin = await createAdminClient();

  // 1️⃣ Update profiles table
  if (data.full_name) {
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ full_name: data.full_name })
      .eq("id", userId);

    if (profileError) throw new Error("Failed to update profile: " + profileError.message);
  }

  // 2️⃣ Update role
  if (data.role) {
    const { error: roleError } = await supabase
      .from("user_roles")
      .update({ role: data.role })
      .eq("user_id", userId);

    if (roleError) throw new Error("Failed to update role: " + roleError.message);
  }

  // 3️⃣ Update Supabase Auth
  if (data.email || data.password) {
    const { user, error: authError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      email: data.email,
      password: data.password,
    });

    if (authError) throw new Error("Failed to update Auth user: " + authError.message);
  }

  return { success: true };
}
