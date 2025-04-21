import { createHash, randomBytes } from 'crypto';
import { z } from 'zod';

// Constants for security settings
const PEPPER = process.env.VITE_PEPPER || randomBytes(32).toString('hex');
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

// Store for tracking login attempts and IP-based security
interface SecurityTracker {
  attempts: number;
  lastAttempt: number;
  lockedUntil?: number;
}

const securityStore = new Map<string, SecurityTracker>();

// Password validation schema
export const passwordSchema = z.string()
  .min(12, 'Password must be at least 12 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Generate a unique session ID
export const generateSessionId = () => {
  return randomBytes(32).toString('hex');
};

// Create a secure hash of the password with pepper
export const hashPassword = (password: string): string => {
  return createHash('sha512')
    .update(password + PEPPER)
    .digest('hex');
};

// Generate CSRF token
export const generateCSRFToken = () => {
  return randomBytes(32).toString('hex');
};

// Validate CSRF token
export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken;
};

// Track login attempts and implement rate limiting
export const trackLoginAttempt = (ip: string): boolean => {
  const now = Date.now();
  const tracker = securityStore.get(ip) || { attempts: 0, lastAttempt: now };

  // Check if user is locked out
  if (tracker.lockedUntil && tracker.lockedUntil > now) {
    return false;
  }

  // Reset attempts if last attempt was more than lockout time ago
  if (now - tracker.lastAttempt > LOCKOUT_TIME) {
    tracker.attempts = 1;
  } else {
    tracker.attempts++;
  }

  // Lock account if too many attempts
  if (tracker.attempts >= MAX_LOGIN_ATTEMPTS) {
    tracker.lockedUntil = now + LOCKOUT_TIME;
    return false;
  }

  tracker.lastAttempt = now;
  securityStore.set(ip, tracker);
  return true;
};

// Generate 2FA secret
export const generate2FASecret = () => {
  return randomBytes(20).toString('hex');
};

// Validate 2FA token
export const validate2FAToken = (token: string, secret: string): boolean => {
  // Implement TOTP validation logic here
  return true; // Placeholder
};

// Clear security tracker
export const clearSecurityTracker = (ip: string): void => {
  securityStore.delete(ip);
};

// Session management
interface Session {
  id: string;
  userId: string;
  expiresAt: number;
  ip: string;
  userAgent: string;
}

const sessions = new Map<string, Session>();

export const createSession = (userId: string, ip: string, userAgent: string): Session => {
  const session: Session = {
    id: generateSessionId(),
    userId,
    expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    ip,
    userAgent
  };
  sessions.set(session.id, session);
  return session;
};

export const validateSession = (sessionId: string, ip: string, userAgent: string): boolean => {
  const session = sessions.get(sessionId);
  if (!session) return false;
  
  // Validate session hasn't expired
  if (session.expiresAt < Date.now()) {
    sessions.delete(sessionId);
    return false;
  }

  // Validate IP and user agent haven't changed (prevent session hijacking)
  return session.ip === ip && session.userAgent === userAgent;
};

export const invalidateSession = (sessionId: string): void => {
  sessions.delete(sessionId);
}; 