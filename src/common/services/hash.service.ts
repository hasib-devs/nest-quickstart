import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';

@Injectable()
export class HashService {
  protected hashSecret: Buffer;
  protected hashSalt: Buffer;
  constructor(protected configService: ConfigService) {
    this.hashSecret = Buffer.from(
      this.configService.get<string>('HASH_SECRET') || 'super-secret',
    );
    this.hashSalt = Buffer.from(
      this.configService.get<string>('HASH_SECRET') || 'super-secret',
    );
  }

  async generateHash(value: string): Promise<string> {
    try {
      return await argon2.hash(value, {
        salt: this.hashSalt,
        secret: this.hashSecret,
        type: argon2.argon2id,
      });
    } catch (error) {
      console.log(`Error making hash: ${error}`);
      return value;
    }
  }

  async compareHash(hash: string, value: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, value, {
        secret: this.hashSecret,
      });
    } catch (error) {
      console.log(`Error comparing hash: ${error}`);
      return false;
    }
  }
}
