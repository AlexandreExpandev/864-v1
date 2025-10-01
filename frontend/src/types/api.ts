export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
  error?: {
    message: string;
    details?: unknown;
  };
}
