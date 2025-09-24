'use client'

// app/layout.tsx
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    return (
        <html lang="en">
            <body>
                {!isAdmin && (
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=G-HXDQZW4PEE`}
                        strategy="afterInteractive"
                    />
                )}
                {!isAdmin && (
                    <Script id="ga-init" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXDQZW4PEE');
            `}
                    </Script>
                )}
                {children}
            </body>
        </html>
    );
}
