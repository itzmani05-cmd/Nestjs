import {Controller,Get, HttpException,HttpStatus,NotFoundException,Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

import { PersonService } from './app.service';
@Controller('')
export class AppController{
  private logger=new Logger(AppController.name)
  @Get()
  getHello(){
    this.logger.log('Hello Route Called');
    this.logger.warn('Warning Message');
    this.logger.error('Error Message');
    this.logger.debug('Debug Message')

    return 'Hello NestJS ';
  }
}

@Controller('user')
export class UserController{
  @Get()
  getUser(){
    throw new HttpException(
      'Forbidden Access',
      HttpStatus.FORBIDDEN,
    )
  }
}

@Controller('member')
export class MemberController{
  @Get()
  getMember(){
    throw new NotFoundException('User Not Found');
  }
}

@Controller('env')
export class EnvController{
  constructor(private configService:ConfigService){}
  @Get()
  getEnv(){
    const port=this.configService.get('PORT');
    return port;
  }
}

@Controller('persons')
export class PersonController{
  constructor(private personService:PersonService){}

  @Get()
  getUsers(){
    return this.personService.getPersons()
  }

}

