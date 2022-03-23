import { MockCases } from 'routes/api';

export const error400: MockCases = {
  error400: {
    status: 400,
    data: { error: 'Bad request' },
  },
};

export const error404: MockCases = {
  error404: {
    status: 404,
    data: { error: 'Not found' },
  },
};
