"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./UserEditor.module.scss";
import { UserEditableData } from "../user/page"; // import the type
import toast from "react-hot-toast";

interface UserEditorProps {
    user: UserEditableData;
    onClose: () => void;
    onSaveSuccess: (updatedUser: UserEditableData) => void;
}

export default function UserEditor({ user, onClose, onSaveSuccess }: UserEditorProps) {
    const supabase = createClientComponentClient();
    const [fullName, setFullName] = useState(user.full_name);
    const [role, setRole] = useState(user.role);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        try {
            // Update profiles table
            const { error: profileError } = await supabase
                .from("profiles")
                .update({ full_name: fullName })
                .eq("id", user.id);

            if (profileError) throw profileError;

            // Update user_roles table
            const { error: roleError } = await supabase
                .from("user_roles")
                .update({ role })
                .eq("user_id", user.id);

            if (roleError) throw roleError;

            toast.success("User updated successfully!");
            onSaveSuccess({ id: user.id, full_name: fullName, role });
        } catch (err: any) {
            toast.error(err.message || "Failed to update user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Edit User</h2>

                <label className={styles.formLabel}>
                    Full Name
                    <input
                        type="text"
                        className={styles.formInput}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>

                <label className={styles.formLabel}>
                    Role
                    <select
                        className={styles.formInput}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <div className={styles.modalActions}>
                    <button
                        className={styles.saveButton}
                        type="button"
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>
                    <button className={styles.closeButton} type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}
