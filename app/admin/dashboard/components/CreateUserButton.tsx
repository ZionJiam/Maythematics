"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./Button.module.scss";

interface CreateUserButtonProps {
  onCreated: () => void;
}

export default function CreateUserButton({ onCreated }: CreateUserButtonProps) {
  const supabase = createClientComponentClient();

  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create user");

      alert("User created successfully!");
      setFullName("");
      setEmail("");
      setPassword("");
      setRole("user");
      closeModal();
      onCreated();
    } catch (err: any) {
      alert("Error creating user: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className={styles.createButton} onClick={openModal}>
        Create User
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <label>
                Full Name
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </label>

              <label>
                Role
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </label>

              <div className={styles.modalActions}>
                <button className={styles.createButton} type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create"}
                </button>
                <button className={styles.closeButton} type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
