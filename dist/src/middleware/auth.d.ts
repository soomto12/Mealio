import { Request, Response, NextFunction } from "express";
import "../types/express";
export declare const requireAuth: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.d.ts.map