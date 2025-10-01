import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response/responseUtils';
import { logger } from '../utils/logger';

/**
 * @summary
 * Global error handling middleware
 * Processes all uncaught errors and returns standardized error responses
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  // Log the error
  logger.error('Error occurred', {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: err.stack,
  });

  // Default error status and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json(errorResponse(message));
}
