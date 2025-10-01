"use client";

import { useState } from "react";
import Dropzone from "react-dropzone";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import PopupImageCropper from "../components/PopupImageCropper";
import styles from "./PopupImageUpload.module.scss";

interface PopupImageUploadProps {
    initialImage?: string;
    onSave: (imageUrl: string) => void;
    onClose: () => void;
}

export default function PopupImageUpload({ initialImage, onSave, onClose }: PopupImageUploadProps) {
    const supabase = createClientComponentClient();
    const [imageSrc, setImageSrc] = useState<string | null>(initialImage || null);
    const [croppingImage, setCroppingImage] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    const handleDrop = (files: File[]) => {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const src = e.target?.result as string;
            const img = new Image();
            img.onload = () => {
                if (img.width !== 600 || img.height !== 750) {
                    setCroppingImage(src);
                } else {
                    setImageSrc(src);
                }
            };
            img.src = src;
        };
        reader.readAsDataURL(file);
    };

    const handleCropSave = (cropped: string) => {
        setImageSrc(cropped);
        setCroppingImage(null);
    };

    const handleSaveChanges = async () => {
        if (!imageSrc) return;
        setSaving(true);

        try {
            // Convert base64 to Blob
            const res = await fetch(imageSrc);
            const blob = await res.blob();
            const fileName = `popup-${Date.now()}.png`;

            // Upload to Supabase Storage bucket
            const { data, error: uploadError } = await supabase.storage
                .from("popup-images")
                .upload(fileName, blob, { upsert: true });

            if (uploadError) throw uploadError;

            // Get public URL
            const { data: urlData } = supabase.storage
                .from("popup-images")
                .getPublicUrl(fileName);

            const publicUrl = urlData.publicUrl;

            // Pass the URL back to parent to update Supabase table
            onSave(publicUrl);
        } catch (err: any) {
            console.error("Upload error:", err.message || err);
            alert("Failed to save image. See console for details.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Change Image</h2>

                <div className={styles.dropzoneWrapper}>
                    <Dropzone onDrop={handleDrop} accept={{ "image/*": [] }}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} className={styles.dropzone}>
                                <p className={styles.dropzoneText}>
                                    Click or drag & drop an image here to replace
                                </p>
                                <input {...getInputProps()} />
                                {imageSrc && (
                                    <img src={imageSrc} alt="Preview" className={styles.previewImage} />
                                )}
                            </div>
                        )}
                    </Dropzone>
                </div>

                <div className={styles.buttons}>
                    <button
                        onClick={handleSaveChanges}
                        disabled={!imageSrc || saving}
                        className={styles.saveButton}
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                    <button onClick={onClose}
                        className={styles.cancelButton}
                    >Cancel</button>
                </div>

                {croppingImage && (
                    <PopupImageCropper
                        imageSrc={croppingImage}
                        onClose={() => setCroppingImage(null)}
                        onSave={handleCropSave}
                    />
                )}
            </div>
        </div>
    );
}
