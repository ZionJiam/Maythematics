// app/admin/dashboard/page.tsx
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies as nextCookies } from "next/headers";


export default async function DashboardPage() {


    return (
        <div>
            <h1>Welcome to Admin Dashboard</h1>
        </div>
    );
}
