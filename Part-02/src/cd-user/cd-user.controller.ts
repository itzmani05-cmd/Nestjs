import { Controller,Get } from '@nestjs/common';
import { CdUserService } from './cd-user.service';
@Controller('cd-user')
export class CdUserController {
    constructor(private userService:CdUserService){}
    @Get()
    getData(){
        return this.userService.callAuth();
    }
}
