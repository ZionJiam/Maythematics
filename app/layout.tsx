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

                {!isAdmin && (
                    <Script id="clarity-script" strategy="afterInteractive">
                        {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "tfttcd0p16");
            `}
                    </Script>
                )}
                {children}
            </body>
        </html>
    );
}
