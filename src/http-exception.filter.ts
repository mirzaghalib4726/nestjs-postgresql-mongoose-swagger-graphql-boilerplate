import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { Response } from "express";

@Catch(
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException,
  UnprocessableEntityException,
  UnauthorizedException
)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const length = host.getType().length;
    let request;
    let response;
    let message = exception.message || null;
    if (message == "Bad Request Exception") {
      message = exception.response.message || message;
    }
    if (length == 7) {
      request = host.switchToHttp().getNext().req;
      response = host.switchToHttp().getNext().res;
    } else {
      request = host.switchToHttp().getRequest<Request>();
      response = host.switchToHttp().getResponse<Response>();
    }

    const statusCode = exception.getResponse();

    const status = exception.getStatus() || 500;

    this.logger.warn(`${statusCode} ${message}`);

    const body = {
      status: status,
      message: message,
      timestamp: new Date().toISOString(),
      path:
        request?.url?.length > 1
          ? request?.url
          : "graphql/" + request?.body?.query?.split(" ")[2],
    };

    if (length == 7) {
      return body;
    } else {
      return response.status(status).json(body);
    }
  }
}
