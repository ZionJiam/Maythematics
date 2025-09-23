"use client";

import { useState } from "react";
import styles from "./Button.module.scss";

interface DeleteUserButtonProps {
  userId: string;
  username: string;
  onDeleted: () => void;
}

export default function DeleteUserButton({ userId, username, onDeleted }: DeleteUserButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/deleteUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete user");

      alert("User deleted successfully.");
      onDeleted();
      closeModal();
    } catch (err: any) {
      alert("Error deleting user: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className={styles.deleteButton} onClick={openModal}>
        Delete
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete <strong>{username}</strong>?</p>

            <div className={styles.modalActions}>
              <button className={styles.deleteButton} type="button" onClick={handleDelete} disabled={loading}>
                {loading ? "Deleting..." : "Delete"}
              </button>
              <button className={styles.closeButton} type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
