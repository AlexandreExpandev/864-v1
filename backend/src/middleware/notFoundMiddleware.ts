import { Request, Response } from 'express';
import { errorResponse } from '../utils/response/responseUtils';

/**
 * @summary
 * 404 Not Found middleware
 * Handles requests to non-existent routes
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json(errorResponse('Resource not found'));
}
