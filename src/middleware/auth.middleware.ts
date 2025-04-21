import { validateSession, trackLoginAttempt, validateCSRFToken } from '../utils/auth';

export interface AuthRequest extends Request {
  session?: {
    userId: string;
    sessionId: string;
  };
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: Function) => {
  const sessionId = req.cookies['session-id'];
  const csrfToken = req.headers['x-csrf-token'];
  const storedCsrfToken = req.cookies['csrf-token'];
  
  // Get client IP and user agent
  const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || '';
  const userAgent = req.headers['user-agent'] || '';

  // Check rate limiting
  if (!trackLoginAttempt(ip)) {
    return res.status(429).json({ 
      error: 'Too many login attempts. Please try again later.' 
    });
  }

  // Validate CSRF token for non-GET requests
  if (req.method !== 'GET' && (!csrfToken || !storedCsrfToken || !validateCSRFToken(csrfToken, storedCsrfToken))) {
    return res.status(403).json({ 
      error: 'Invalid CSRF token' 
    });
  }

  // Validate session
  if (!sessionId || !validateSession(sessionId, ip, userAgent)) {
    return res.status(401).json({ 
      error: 'Invalid or expired session' 
    });
  }

  // Add session info to request
  const session = sessions.get(sessionId);
  if (session) {
    req.session = {
      userId: session.userId,
      sessionId: session.id
    };
  }

  next();
};

// Additional middleware for 2FA protected routes
export const require2FA = async (req: AuthRequest, res: Response, next: Function) => {
  const user = await getUserById(req.session?.userId);
  
  if (!user?.twoFactorEnabled) {
    return res.status(403).json({ 
      error: 'Two-factor authentication is required for this resource' 
    });
  }

  const twoFactorToken = req.headers['x-2fa-token'];
  if (!twoFactorToken || !validate2FAToken(twoFactorToken.toString(), user.twoFactorSecret)) {
    return res.status(403).json({ 
      error: 'Invalid two-factor authentication token' 
    });
  }

  next();
}; 