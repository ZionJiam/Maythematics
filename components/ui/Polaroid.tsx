"use client";
import React from "react";
import styles from "./Polaroid.module.scss";

type PolaroidProps = {
    src: string;
    caption: string;
    shadowType?: "shadow1" | "shadow2" | "shadow3" | "shadow4";
};

const Polaroid: React.FC<PolaroidProps> = ({ src, caption, shadowType = "shadow1" }) => {
    return (
        <div className={`${styles.item} ${styles[shadowType]}`}>
            <div className={styles.polaroid}>
                <img src={src} alt={caption} />
                {/* <div className={styles.caption}>{caption}</div> */}
            </div>
        </div>
    );
};

export default Polaroid;
