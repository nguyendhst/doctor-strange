export class ServiceResponseDto {
  
  statusCode: number;

  data: any;

  message?: string;

  constructor(status: number, data: any, message?: string) {
    this.statusCode = status;
    this.data = data;
    this.message = message;
  }
}
