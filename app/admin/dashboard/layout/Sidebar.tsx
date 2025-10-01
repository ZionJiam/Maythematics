'use client'

import { useRouter } from 'next/navigation'
import { LogOut, User, Users, MessageSquare } from "lucide-react";
import { TbChevronCompactRight } from "react-icons/tb";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import styles from "./Sidebar.module.scss";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  username: string;
};

export default function Sidebar({ isOpen, toggleSidebar, username }: SidebarProps) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  // --- Client-side logout ---
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // Redirect to login page
      router.push('/admin');
    } catch (err: any) {
      console.error('Logout error:', err.message);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? "open" : "closed"}`}>
      <div className={styles.sidebar__top}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
      </div>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <Link href="/admin/dashboard/user" className={styles.nav__item}>
            <Users size={20} /> <span>Accounts</span>
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
          <button className={styles.logout} onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      <button className={styles.hamburger} onClick={toggleSidebar}>
        <TbChevronCompactRight />
      </button>
    </div>
  );
}
