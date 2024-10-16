// app/details/page.js
'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DetailsPart from "@/app/parts/DetailsPart";

export default function Page() {
    // Use useSearchParams inside the component
    const searchParams = useSearchParams();
    const id = searchParams.get('q') || "/series/naruto-shippuden-hindi-dub/";

    return (
        // Wrap DetailsPart in Suspense to handle loading states
        <Suspense>
            <DetailsPart id={id} />
        </Suspense>
    );
}
