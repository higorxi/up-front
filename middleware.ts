import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isPublic = pathname === '/login' || PUBLIC_FILE.test(pathname);

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const { payload } = await jwtVerify(token, secret);

      const role = payload.role as string;
      console.log(pathname);

      // 🔒 Verifica se o usuário está acessando uma rota correspondente ao seu role
      if (
        (role === 'PROFESSIONAL' && pathname.startsWith('/enterprise')) ||
        (role === 'PARTNER' && pathname.startsWith('/dashboard'))
      ) {
        return NextResponse.redirect(new URL('http://localhost:3001/login', request.url));
      }

      return NextResponse.next();
    } catch (err: any) {
      if (err.code === 'ERR_JWT_EXPIRED') {
        return NextResponse.redirect(new URL('/login?expired=true', request.url));
      }

      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
