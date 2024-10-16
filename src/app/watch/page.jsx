'use client'
import WatchPart from "@/app/parts/WatchPart"
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get('q') || "episode/naruto-shippuden-1x6/"
 
    return (
        <Suspense>
            <WatchPart id={id} />
        </Suspense>
    );
}