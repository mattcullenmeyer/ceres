import express, { Request, Response } from 'express';
import log from '../../config/logging';
// Mock cases
import { postLoginMockCases } from './mocks/login';
import { getUserDetailMockCases } from './mocks/userDetail';

const router = express.Router();

const baseRoute = '/api/v1';

enum routes {
  login = '/login',
  userDetail = '/user/detail',
}

export interface QueryParams {
  [key: string]: string;
}

export interface MockCases {
  [key: string]: {
    status: number;
    data: any;
  };
}

const generateMockCase = (mockName: string, req: Request): string => {
  const queryParams = req.query as QueryParams;
  return queryParams[mockName] ?? 'default';
};

const generateMockResponse = (mockCase: string, mockCases: MockCases, res: Response): number => {
  const { status, data } = mockCases[mockCase];
  res.status(status).json(data);
  return status;
};

router.post(routes.login, (req: Request, res: Response) => {
  const mockName = 'mock_login';
  const mockCase = generateMockCase(mockName, req);

  const { email, username } = req.body;

  const mockCases = postLoginMockCases(username, email);

  const status = generateMockResponse(mockCase, mockCases, res);
  log.info(`POST ${baseRoute}${routes.login} ${status}`);
});

router.get(routes.userDetail, (req: Request, res: Response) => {
  const mockName = 'mock_user_detail';
  const mockCase = generateMockCase(mockName, req);

  const mockCases = getUserDetailMockCases();

  const status = generateMockResponse(mockCase, mockCases, res);
  log.info(`GET ${baseRoute}${routes.userDetail} ${status}`);
});

export default router;
