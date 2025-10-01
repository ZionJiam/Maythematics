"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import styles from "./PopupImageCropper.module.scss";

interface PopupImageCropperProps {
    imageSrc: string;
    onClose: () => void;
    onSave: (cropped: string) => void;
}

export default function PopupImageCropper({ imageSrc, onClose, onSave }: PopupImageCropperProps) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const onCropComplete = useCallback((_: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    const getCroppedImage = useCallback(async () => {
        const image = new Image();
        image.src = imageSrc;
        await new Promise((res) => (image.onload = res));

        const maxWidth = 720;
        const maxHeight = 900;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;


        const targetWidth = Math.min(maxWidth, croppedAreaPixels.width);
        const targetHeight = Math.min(maxHeight, croppedAreaPixels.height);

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(
            image,
            croppedAreaPixels.x * scaleX,
            croppedAreaPixels.y * scaleY,
            croppedAreaPixels.width * scaleX,
            croppedAreaPixels.height * scaleY,
            0,
            0,
            targetWidth,
            targetHeight
        );


        return new Promise<string>((resolve) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                }
            }, "image/png");
        });
    }, [croppedAreaPixels, imageSrc]);

    const handleSave = async () => {
        const cropped = await getCroppedImage();
        if (cropped) onSave(cropped);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>Crop Image</h3>
                <div className={styles.cropContainer}>
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={600 / 750}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>
                <div className={styles.controls}>
                    <label>
                        Zoom
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e) => setZoom(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleSave}>Save Crop</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
