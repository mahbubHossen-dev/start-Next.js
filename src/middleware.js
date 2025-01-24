import { NextResponse } from "next/server";

export function middleware(request) {
    const sessionCookie = request.cookies.get("access_token"); 

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile"],
};