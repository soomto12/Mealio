// Adds `userId` (set by requireAuth) to Express's Request type.
// This is a regular module, imported by every file that uses req.userId,
// so it also works with per-file compilers such as Vercel's.
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export {};
