export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children} {/* Public and Admin layouts will render here */}
            </body>
        </html>
    );
}
