import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class HashService {
  async makeHash(value: string): Promise<string> {
    return await argon2.hash(value);
  }

  async compareHash(value: string, hash: string): Promise<boolean> {
    return await argon2.verify(hash, value);
  }
}
