export function extractToken(authorizationHeader: string): string | null {
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return null;
  }
  return authorizationHeader.replace('Bearer ', '');
}

export function extractJwt(authorizationHeader: string): string | null {
  return extractToken(authorizationHeader);
}
