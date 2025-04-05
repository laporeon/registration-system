export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public name: string = 'AppError'
  ) {
    super(message);
  }
}
