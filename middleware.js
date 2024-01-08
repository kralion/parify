import { NextResponse } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/hub-base") {
    return NextAuth(authOptions).signIn(request, url);
  }

  return NextResponse.next();
}
