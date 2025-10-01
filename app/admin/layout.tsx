import "./reset.scss";
import { Toaster } from "react-hot-toast";


export const metadata = {
    title: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Optional: you can add a minimal wrapper, sidebar, or just center content */}
            <div className="admin-layout">{children}</div>
            <Toaster position="top-right" />

        </>
    );
}
