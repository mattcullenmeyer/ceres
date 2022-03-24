import { MockCases } from 'routes/api';
import { error400 } from '../../utils/errorResponses';

export const postLoginMockCases = (username: string, email: string): MockCases => {
  const defaultResponse = {
    access_token: 'some_access_token',
    refresh_token: 'some_refresh_token',
    user: {
      pk: 1,
      username,
      email,
      first_name: 'Test',
      last_name: 'User',
    },
  };

  const mockCases: MockCases = {
    ...error400, // response if email or password are invalid
    default: {
      status: 200,
      data: defaultResponse,
    },
  };

  return mockCases;
};
