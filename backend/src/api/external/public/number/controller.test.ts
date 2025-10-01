import { Request, Response, NextFunction } from 'express';
import { listHandler, getHandler } from './controller';
import * as numberService from '../../../../services/number';

// Mock the number service
jest.mock('../../../../services/number', () => ({
  numberList: jest.fn(),
  numberGet: jest.fn(),
}));

describe('Number Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  describe('listHandler', () => {
    it('should return a list of numbers', async () => {
      const mockNumbers = [
        { id: 1, value: 1, text: 'Um' },
        { id: 2, value: 2, text: 'Dois' },
      ];

      (numberService.numberList as jest.Mock).mockResolvedValue(mockNumbers);

      await listHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockNumbers,
        timestamp: expect.any(String),
      });
    });

    it('should call next with error on failure', async () => {
      const error = new Error('Test error');
      (numberService.numberList as jest.Mock).mockRejectedValue(error);

      await listHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getHandler', () => {
    it('should return a specific number', async () => {
      const mockNumber = { id: 5, value: 5, text: 'Cinco' };
      mockRequest.params = { id: '5' };

      (numberService.numberGet as jest.Mock).mockResolvedValue(mockNumber);

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockNumber,
        timestamp: expect.any(String),
      });
    });

    it('should return 404 when number not found', async () => {
      mockRequest.params = { id: '11' };

      (numberService.numberGet as jest.Mock).mockResolvedValue(null);

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        error: {
          message: 'Number not found',
          details: undefined,
        },
        timestamp: expect.any(String),
      });
    });

    it('should return 400 for invalid number', async () => {
      mockRequest.params = { id: 'abc' };

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
  });
});
