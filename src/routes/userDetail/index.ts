import { MockCases } from 'routes/api';

export const getUserDetailMockCases = () => {
  const defaultResponse = {
    id: 1,
    email: 'test@example.com',
    email_verified: false,
    username: 'test@example.com',
    first_name: 'Test',
    last_name: 'User',
  };

  const mockCases: MockCases = {
    default: {
      status: 200,
      data: defaultResponse,
    },
  };

  return mockCases;
};
