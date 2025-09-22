import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../lib/suoabaseClient";

export async function POST(req: NextRequest) {
    const { email, password, captchaToken } = await req.json();

    // 1. Verify reCAPTCHA
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const captchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${captchaToken}`,
    });

    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
        return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    // 2. Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return NextResponse.json({ error: error.message }, { status: 401 });

    return NextResponse.json({ user: data.user });
}
