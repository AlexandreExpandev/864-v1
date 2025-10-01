/**
 * @summary
 * Standard success response format
 *
 * @param {any} data - The data to include in the response
 * @returns {object} Formatted success response
 */
export function successResponse(data: any) {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary
 * Standard error response format
 *
 * @param {string} message - Error message
 * @param {any} details - Optional error details
 * @returns {object} Formatted error response
 */
export function errorResponse(message: string, details?: any) {
  return {
    success: false,
    error: {
      message,
      details: details || undefined,
    },
    timestamp: new Date().toISOString(),
  };
}
