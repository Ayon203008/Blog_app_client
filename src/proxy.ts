import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constance/roles";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    let isAuthinticated = false
    let isAdmin = false
    const { data } = await userService.getSession()

    if (data) {
        isAuthinticated = true
        isAdmin = data.user.role === Roles.admin
    }

    if (!isAuthinticated) {
        return NextResponse.redirect(new URL("/login", request.url))
        // ! if the user does not login it will redirect him to login page
    }

    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }// ! When admin tries to access user Dashboard

    if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    } // ! When user tries to access Admin Dashboard

    console.log(pathname)

    return NextResponse.next()
}


export const config = {
    matcher: ["/dashboard","/dashboard/:path*","/admin-dashboard","/admin-dashboard/:path*"]
}