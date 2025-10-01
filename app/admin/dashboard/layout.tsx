"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Sidebar from "./layout/Sidebar";
import styles from "./layout.module.scss";
import { useRouter } from "next/navigation";   // ✅ Import router

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [username, setUsername] = useState("User");
  const [loading, setLoading] = useState(true);
  const router = useRouter();   // ✅ Initialize router

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {

          console.error("Not logged in or error fetching user:", userError);
          router.push("/admin");   // ✅ Redirect to /admin if not logged in
          return;
        }

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", user.id)
          .single();

        if (profileError || !profileData) {
          console.error("Error fetching profile:", profileError);
          return;
        }

        setUsername(profileData.full_name || "User");
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserProfile();
  }, [supabase]);

  return (
    <div className={styles.layoutWrapper}>
      <div
        className={`${styles.layoutContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} username={username} />
        {children}
      </div>
    </div>
  );
}
