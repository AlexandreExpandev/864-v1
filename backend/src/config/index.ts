/**
 * @summary
 * Application configuration settings loaded from environment variables
 * with sensible defaults for development
 */
export const config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '1433'),
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'lista_inteiros',
    options: {
      encrypt: process.env.DB_ENCRYPT === 'true',
      trustServerCertificate: process.env.NODE_ENV === 'development',
    },
  },
  api: {
    port: parseInt(process.env.PORT || '3000'),
    cors: {
      origin: process.env.CORS_ORIGIN || '*',
      credentials: false, // ⚠️ MUDANÇA: false para funcionar com origin: '*'
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
  security: {
    jwtSecret: process.env.JWT_SECRET || 'dev-secret-key',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '10'),
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
