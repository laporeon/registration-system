export class BaseError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly name: string;

  constructor(statusCode: number, message: string, name: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;
  }
}
