import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class HashService {
  async makeHash(value: string): Promise<string> {
    try {
      return await argon2.hash(value);
    } catch (error) {
      console.log(`Error making hash: ${error}`);
      return value;
    }
  }

  async compareHash(value: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, value);
    } catch (error) {
      console.log(`Error comparing hash: ${error}`);
      return false;
    }
  }
}
