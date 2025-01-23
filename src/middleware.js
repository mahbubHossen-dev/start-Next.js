import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
  const session = getKindeServerSession();
  
  try {
    // getUser ফাংশন দিয়ে ইউজারের তথ্য যাচাই করা
    const user = await session.getUser();

    if (user) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }
  } catch (error) {
    console.error("Error checking user session:", error);

    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }
}

export const config = {
  matcher: "/profile",
};