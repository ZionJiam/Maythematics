"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./SecondaryCTAButton.module.scss";

interface SecondaryCtaButtonPropos {
    text: string;
    href: string;
}

export default function SecondaryCtaButton({ text, href }: SecondaryCtaButtonPropos) {
    return (
        <Link href={href} className={styles.ctaButton}>
            <span className={styles.text}>{text}</span>
            <ArrowRight className={styles.icon} />
        </Link>
    );
}
