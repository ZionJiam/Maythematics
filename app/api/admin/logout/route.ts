// app/api/admin/logout/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/app/lib/server';

export async function POST() {
  try {
        console.error('Logout ongoing');

    const supabase = await createClient();
    await supabase.auth.signOut(); // clears server-side cookies
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Logout error:', err);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
