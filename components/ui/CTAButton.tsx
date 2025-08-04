// components/ui/CTAButton.tsx
"use client";

import React from "react";
import styles from "./CTAButton.module.scss";

interface CTAButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, onClick }) => {
    if (href) {
        return (
            <a href={href} className={styles.ctaButton}>
                {text}
            </a>
        );
    }

    return (
        <button className={styles.ctaButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default CTAButton;
