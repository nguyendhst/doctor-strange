export class ServiceResponseDto {
  statusCode: number;

  data: any;

  constructor(status: number, data: any){
    this.statusCode = status;
    this.data = data;
  }
}
