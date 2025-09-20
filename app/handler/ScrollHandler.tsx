'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const goto = searchParams.get('goto');
        if (goto) {
            const el = document.getElementById(goto);
            if (el) {
                // tiny delay to ensure DOM is ready
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname, searchParams]);

    return null; // no UI
}
