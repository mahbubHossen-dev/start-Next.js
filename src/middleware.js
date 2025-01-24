import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
    // const sessionCookie = request.cookies.get("access_token"); 

    // if (!sessionCookie) {
    //     return NextResponse.redirect(new URL("/api/auth/login", request.url));
    // }

    // return NextResponse.next();
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user){
        return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/profile"],
};