import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/lib/server";

export async function POST(req: NextRequest) {
    const supabase = await createClient()
    const { email, password, captchaToken } = await req.json();
    console.log("Request body:", { email, password, captchaToken }); // Log input


    if (!captchaToken) {
        console.log("Captcha token missing");

        return NextResponse.json({ error: "Captcha token missing" }, { status: 400 });
    }

    // 1. Verify reCAPTCHA server-side
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${captchaToken}`,
        }
    );

    const captchaData = await verifyRes.json();
    console.log("Captcha verification result:", captchaData); // Log captcha response


    if (!captchaData.success) {
        console.log("Captcha verification failed");
        return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    // 2. Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    
    if (error) return NextResponse.json({ error: error.message }, { status: 401 });

    // ✅ Set session cookies for server-side auth
    const res = NextResponse.json({ user: data.user });
    if (data.session) {
        const { access_token, refresh_token, expires_at } = data.session;
        res.cookies.set('sb-access-token', access_token, { httpOnly: true, path: '/' });
        res.cookies.set('sb-refresh-token', refresh_token, { httpOnly: true, path: '/' });
        if (typeof expires_at !== "undefined") {
            res.cookies.set('sb-expires-at', expires_at.toString(), { httpOnly: true, path: '/' });
        }
    }

    return res;
}
