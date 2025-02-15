import * as crypto from 'crypto';

export class CryptoService {
  private static readonly ALGORITHM = 'aes-256-cbc';
  private static readonly SECRET_KEY = crypto
    .createHash('sha256')
    .update(process.env.ENCRYPTION_KEY || 'default_secret_key')
    .digest();

  static encrypt(data: string): string {
    const iv = crypto.randomBytes(16); // Generate a random IV
    const cipher = crypto.createCipheriv(this.ALGORITHM, this.SECRET_KEY, iv);

    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return iv.toString('hex') + encrypted; // Store IV with encrypted data
  }

  static decrypt(encryptedData: string): string {
    const iv = Buffer.from(encryptedData.slice(0, 32), 'hex'); // Extract IV
    const encryptedText = encryptedData.slice(32); // Extract encrypted content

    const decipher = crypto.createDecipheriv(
      this.ALGORITHM,
      this.SECRET_KEY,
      iv,
    );

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}
