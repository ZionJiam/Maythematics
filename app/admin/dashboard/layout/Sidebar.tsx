'use client'

import { useState } from "react";
import { LogOut, User, Wallet, MessageSquare } from "lucide-react";
import { TbChevronCompactRight } from "react-icons/tb";

import styles from "./Sidebar.module.scss";
import Link from "next/link";

interface SidebarProps {
    username: string;
}

export default function Sidebar({ username }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className={styles.sidebar__top}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo" />
                </div>
            </div>

            <div className={styles.navContainer}>
                <nav className={styles.nav}>
                    <Link href="/admin/dashboard/account-managemnt" className={styles.nav__item}>
                        <Wallet size={20} /> <span>Accounts</span>
                    </Link>
                    <Link href="/admin/dashboard/popup" className={styles.nav__item}>
                        <MessageSquare size={20} /> <span>Popup</span>
                    </Link>
                </nav>

                <div className={styles.sidebar__bottom}>
                    <div className={styles.user}>
                        <User size={20} />
                        <span>{username}</span>
                    </div>
                    <button className={styles.logout}>
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </div>
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <TbChevronCompactRight />
            </button>

        </aside>
    );
}
