# Lista Inteiros Backend

Backend API for the Lista Inteiros application, which provides a service for converting numbers to their text representation.

## Features

- RESTful API for number-to-text conversion
- Supports numbers from 1 to 10
- Provides both list and individual number endpoints

## API Endpoints

- `GET /api/external/numbers` - List all available numbers with their text representations
- `GET /api/external/numbers/:id` - Get a specific number by its numeric value
- `GET /health` - Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy the example environment file:
   ```
   cp .env.example .env
   ```
4. Configure environment variables in the `.env` file

### Development

Start the development server:

```
npm run dev
```

### Production Build

Build the application:

```
npm run build
```

Start the production server:

```
npm start
```

## Project Structure

```
src/
├── api/                  # API controllers
├── config/               # Application configuration
├── constants/            # Application constants
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── utils/                # Utility functions
└── server.ts            # Application entry point
```

## License

This project is licensed under the MIT License.
