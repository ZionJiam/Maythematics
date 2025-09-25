"use client";

import Link from "next/link";
import styles from "./NotFound.module.scss";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="Maythematics Logo" />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you’re looking for doesn’t exist.</p>
            <div className={styles.links}>
                <Link href="/">Go to Home</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/programmes">Our Programme</Link>
            </div>
        </div>
    );
}
