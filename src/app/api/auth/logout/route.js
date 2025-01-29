import { NextResponse } from "next/server"
import { serialize } from "cookie";

export async function POST(request) {


    const response = NextResponse.json({ message: 'Logged out successfully' });

    // Remove the authentication cookie using the cookie package
    response.headers.append(
        'Set-Cookie',
        serialize('token', '', {
            httpOnly: true,
            path: '/',
            expires: new Date(0), // Set expiration date to a past date
        })
    );

    return response;

}