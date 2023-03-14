import {Controller, Get, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: any): string {
    console.log(request.session.id);
    if (request.session.id === 'B-tHbmrszoXLqKiHVhFr1TY70HzCD08M') {
      return 'Hello bro'
    }
    request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
    return this.appService.getHello();
  }
}
