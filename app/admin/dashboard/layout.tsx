import Sidebar from "./layout/Sidebar";

export const metadata = {
    title: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <div>
                <Sidebar username="Zion" />
                {children}
            </div>

        </>
    );
}
