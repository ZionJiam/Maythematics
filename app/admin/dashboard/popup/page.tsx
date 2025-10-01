"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast"; // ✅ import toast
import styles from "./page.module.scss";
import PopupEditor from "../components/PopupEditor";
import PopupImageUpload from "../components/PopupImageUpload";

interface PopupData {
    id: string;
    image_url: string;
    link_url: string;
    buttonname: string;
    deadline: string | null;
    is_active: boolean;
    Title: string;
}

export default function DashboardPage() {
    const supabase = createClientComponentClient();
    const [popup, setPopup] = useState<PopupData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isEditingImage, setIsEditingImage] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchPopup() {
            try {
                const { data, error } = await supabase
                    .from("popups")
                    .select("*")
                    .single();

                if (error) throw error;
                setPopup(data);
            } catch (err: any) {
                setError(err?.message ?? "Unable to fetch popup");
                toast.error("Failed to load popup data ❌");
            } finally {
                setLoading(false);
            }
        }

        fetchPopup();
    }, [supabase]);

    const handleImageSave = async (updatedImageUrl: string) => {
        if (!popup) return;

        try {
            const { error } = await supabase
                .from("popups")
                .update({ image_url: updatedImageUrl })
                .eq("id", popup.id);

            if (error) throw error;

            setPopup({ ...popup, image_url: updatedImageUrl });
            toast.success("Popup image updated ✅");
        } catch (err: any) {
            console.error("Failed to update popup image URL:", err.message || err);
            toast.error("Failed to save image ❌");
        } finally {
            setIsEditingImage(false);
        }
    };

    if (loading) return <div className={styles.message}>Loading popup…</div>;
    if (error) return <div className={styles.message}>Error: {error}</div>;
    if (!popup) return <div className={styles.message}>No popup configured.</div>;

    const deadlineDate = popup.deadline ? new Date(popup.deadline) : null;
    const isActiveOnFrontend =
        popup.is_active && deadlineDate !== null && deadlineDate > new Date();

    let deadlineText = "No deadline set";
    if (deadlineDate) {
        const now = new Date();
        const diffMs = deadlineDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        deadlineText =
            diffMs > 0
                ? `${diffDays} day${diffDays > 1 ? "s" : ""} remaining`
                : "Deadline passed";
    }

    return (
        <div className={styles.container}>
            <h1>Popup Panel</h1>

            <div className={styles.card}>
                <div className={styles.left}>
                    {popup.image_url ? (
                        <img
                            src={popup.image_url}
                            alt={popup.Title || "Popup image"}
                            className={styles.image}
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            {popup.Title || "No image"}
                        </div>
                    )}
                </div>

                <div className={styles.right}>
                    <div className={styles.rowTop}>
                        <h2 className={styles.buttonField}>
                            <strong>Title:</strong> {popup.Title || "Untitled popup"}
                        </h2>
                    </div>

                    <p className={styles.buttonField}>
                        <strong>Button Description:</strong> {popup.buttonname}
                    </p>

                    <p className={styles.buttonField}>
                        <strong>Button Link:</strong> {popup.link_url}
                    </p>

                    <div
                        className={`${styles.frontendStatusCard} ${isActiveOnFrontend ? styles.activeCard : styles.inactiveCard
                            }`}
                    >
                        <p className={styles.meta}>
                            <strong>Shown on Website:</strong>{" "}
                            {isActiveOnFrontend ? "✅ Yes" : "❌ No"}
                        </p>

                        <p className={styles.meta}>
                            <strong>Active:</strong> {popup.is_active ? "Yes" : "No"}
                        </p>
                        <p className={styles.meta}>
                            <strong>Deadline:</strong>{" "}
                            {deadlineDate ? deadlineDate.toLocaleString() : "No deadline set"}{" "}
                            - {deadlineText}
                        </p>
                        <p className={styles.note}>
                            * Popup must be active and not pass the deadline to be shown on website
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.cta}
                            onClick={() => setIsEditingImage(true)}
                        >
                            Change Image
                        </button>
                        <button
                            className={styles.cta}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Popup
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Upload / Crop Modal */}
            {isEditingImage && popup.image_url && (
                <PopupImageUpload
                    initialImage={popup.image_url}
                    onClose={() => setIsEditingImage(false)}
                    onSave={handleImageSave}
                />
            )}

            {/* PopupEditor modal */}
            {isEditing && popup && (
                <PopupEditor
                    popup={popup}
                    onClose={() => setIsEditing(false)}
                    onSaveSuccess={(updated) => {
                        setPopup(updated);
                        toast.success("Popup details updated ✅");
                    }}
                />
            )}
        </div>
    );
}
