import { hashPassword, passwordSchema, generateCSRFToken, createSession, generate2FASecret } from '../utils/auth';
import { z } from 'zod';

// User schema for validation
const userSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
  name: z.string().min(2)
});

interface LoginResponse {
  success: boolean;
  sessionId?: string;
  csrfToken?: string;
  requiresTwoFactor?: boolean;
  error?: string;
}

export class AuthService {
  private static instance: AuthService;
  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async register(userData: unknown): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate user data
      const validatedData = userSchema.parse(userData);
      
      // Check if email already exists
      const existingUser = await this.findUserByEmail(validatedData.email);
      if (existingUser) {
        return { success: false, error: 'Email already registered' };
      }

      // Hash password with unique salt and pepper
      const hashedPassword = hashPassword(validatedData.password);

      // Generate 2FA secret
      const twoFactorSecret = generate2FASecret();

      // Create user with additional security fields
      const user = await this.createUser({
        ...validatedData,
        password: hashedPassword,
        twoFactorSecret,
        twoFactorEnabled: false,
        failedLoginAttempts: 0,
        lastLoginAttempt: null,
        passwordChangedAt: new Date(),
        accountLocked: false
      });

      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          error: 'Invalid input: ' + error.errors.map(e => e.message).join(', ') 
        };
      }
      return { success: false, error: 'Registration failed' };
    }
  }

  async login(email: string, password: string, ip: string, userAgent: string): Promise<LoginResponse> {
    try {
      const user = await this.findUserByEmail(email);
      
      if (!user) {
        return { success: false, error: 'Invalid credentials' };
      }

      // Check if account is locked
      if (user.accountLocked) {
        return { success: false, error: 'Account is locked. Please contact support.' };
      }

      // Verify password
      const hashedPassword = hashPassword(password);
      if (hashedPassword !== user.password) {
        // Increment failed login attempts
        await this.incrementFailedLoginAttempts(user.id);
        return { success: false, error: 'Invalid credentials' };
      }

      // Reset failed login attempts
      await this.resetFailedLoginAttempts(user.id);

      // Create session
      const session = createSession(user.id, ip, userAgent);
      
      // Generate CSRF token
      const csrfToken = generateCSRFToken();

      // If 2FA is enabled, require it
      if (user.twoFactorEnabled) {
        return {
          success: true,
          requiresTwoFactor: true,
          sessionId: session.id,
          csrfToken
        };
      }

      return {
        success: true,
        sessionId: session.id,
        csrfToken
      };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  }

  // Helper methods (implement these according to your database setup)
  private async findUserByEmail(email: string) {
    // Implement user lookup logic
    return null;
  }

  private async createUser(userData: any) {
    // Implement user creation logic
    return null;
  }

  private async incrementFailedLoginAttempts(userId: string) {
    // Implement failed login attempts increment logic
    return null;
  }

  private async resetFailedLoginAttempts(userId: string) {
    // Implement failed login attempts reset logic
    return null;
  }
} 