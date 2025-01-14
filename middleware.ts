import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { USER_ROLES } from './lib/constants';

export default withClerkMiddleware((req: NextRequest) => {
  const { userId, sessionId, getToken } = req.auth;
  const url = req.nextUrl.clone();

  if (!userId) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  // Logging middleware
  console.log(`User ${userId} accessed ${req.nextUrl.pathname} at ${new Date().toISOString()}`);

  // Role-based access control (RBAC)
  const userRole = req.headers.get('x-user-role');
  if (!userRole || !Object.values(USER_ROLES).includes(userRole)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
