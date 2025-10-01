"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./PopupEditor.module.scss";

interface PopupData {
    id: string;
    image_url: string;
    Title: string;
    buttonname: string;
    link_url: string;
    deadline: string | null;
    is_active: boolean;
}

interface PopupEditorProps {
    popup: PopupData;
    onClose: () => void;
    onSaveSuccess: (updated: PopupData) => void;
}

export default function PopupEditor({ popup, onClose, onSaveSuccess }: PopupEditorProps) {
    const supabase = createClientComponentClient();
    const [editPopup, setEditPopup] = useState<PopupData>(popup);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (field: keyof PopupData, value: any) => {
        setEditPopup({ ...editPopup, [field]: value });
    };

    const handleSave = async () => {
        setSaving(true);
        setError(null);

        try {
            const { error } = await supabase
                .from("popups")
                .update({
                    Title: editPopup.Title,
                    buttonname: editPopup.buttonname,
                    link_url: editPopup.link_url,
                    deadline: editPopup.deadline,
                    is_active: editPopup.is_active,
                })
                .eq("id", editPopup.id);

            if (error) throw error;

            onSaveSuccess(editPopup);
            onClose();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Edit Popup</h2>

                <div className={styles.field}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={editPopup.Title}
                        onChange={(e) => handleChange("Title", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label>Button Name</label>
                    <input
                        type="text"
                        value={editPopup.buttonname}
                        onChange={(e) => handleChange("buttonname", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label>Button Link URL</label>
                    <input
                        type="text"
                        value={editPopup.link_url}
                        onChange={(e) => handleChange("link_url", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label>Deadline</label>
                    <input
                        type="datetime-local"
                        value={
                            editPopup.deadline
                                ? new Date(editPopup.deadline).toISOString().slice(0, 16)
                                : ""
                        }
                        onChange={(e) => handleChange("deadline", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.switchLabel}>
                        Active
                        <input
                            type="checkbox"
                            checked={editPopup.is_active}
                            onChange={(e) => handleChange("is_active", e.target.checked)}
                            className={styles.switchInput}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>


                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.buttons}>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className={styles.saveButton}
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                    <button onClick={onClose} className={styles.cancelButton}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
