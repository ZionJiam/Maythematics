import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/lib/middleware'
import { NextResponse } from 'next/server'


export async function middleware(req: NextRequest) {

    return await updateSession(req)
}
export const config = {
    matcher: ['/admin/:path*'], // run on all admin routes
}