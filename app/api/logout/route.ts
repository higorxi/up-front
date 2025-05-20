import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout feito' });

  response.cookies.set('token', '', {
    path: '/',
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
