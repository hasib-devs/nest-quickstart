import * as crypto from 'crypto';

export function generateSecureToken(length = 32): string {
  return crypto.randomBytes(length).toString('hex');
}
