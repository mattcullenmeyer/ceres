export interface ErrorResponse {
  error: string;
}

export const errorResponse404: ErrorResponse = {
  error: 'Not found',
};
