"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./page.module.scss";
import DeleteUserButton from "../components/DeleteUserButton";
import CreateUserButton from "../components/CreateUserButton";
import UserEditor from "../components/UserEditor"; // import the editor modal
import toast from "react-hot-toast";

// Full user data from Supabase
export interface UserData {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

// Only editable fields for UserEditor
export interface UserEditableData {
  id: string;
  full_name: string;
  role: string;
}

export default function DashboardPage() {
  const supabase = createClientComponentClient();
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingUser, setEditingUser] = useState<UserEditableData | null>(null);

  // Fetch users
  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) throw new Error("Not authenticated");

        const { data: roleData, error: roleError } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .single();

        if (roleError || !roleData) throw new Error("Unable to fetch role");

        const admin = roleData.role === "admin";
        setIsAdmin(admin);

        let fetchedUsers: UserData[] = [];

        if (admin) {
          const { data, error } = await supabase
            .from("profiles")
            .select("id, full_name, email, user_roles: user_roles!left(role)");

          if (error || !data) throw error;

          fetchedUsers = data.map((d: any) => ({
            id: d.id,
            full_name: d.full_name,
            email: d.email,
            role: d.user_roles.role,
          }));
        } else {
          const { data, error } = await supabase
            .from("profiles")
            .select("id, full_name, email, user_roles: user_roles!left(role)")
            .eq("id", user.id)
            .single();

          if (error || !data) throw error;

          fetchedUsers = [
            {
              id: data.id,
              full_name: data.full_name,
              email: data.email,
              role: roleData.role,
            },
          ];
        }

        setUsersData(fetchedUsers);
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [supabase]);

  if (loading) return <div className={styles.message}>Loading...</div>;
  if (error) return <div className={styles.message}>{error}</div>;

  // Map UserData to UserEditableData for editor
  const handleEditUser = (user: UserData) => {
    setEditingUser({ id: user.id, full_name: user.full_name, role: user.role });
  };

  const handleSaveUser = (updatedUser: UserEditableData) => {
    setUsersData((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? { ...u, ...updatedUser } : u))
    );
    setEditingUser(null);
  };

  return (
    <div className={styles.container}>
      <h1>User Management</h1>

      {isAdmin && (
        <CreateUserButton
          onCreated={() => {
            window.location.reload(); // or implement a refetchUsers()
          }}
        />
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            {isAdmin && (
              <th>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {usersData.map((u) => (
            <tr key={u.id}>
              <td>{u.full_name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              {isAdmin && (   // ✅ Only render Action cell if admin
                <td className={styles.buttonCell}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditUser(u)}
                  >
                    Edit
                  </button>

                  <DeleteUserButton
                    userId={u.id}
                    username={u.full_name}
                    onDeleted={() => {
                      setUsersData((prev) => prev.filter((x) => x.id !== u.id));
                    }}
                  />
                </td>
              )}

            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <UserEditor
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSaveSuccess={handleSaveUser}
        />
      )}
    </div>
  );
}
