import {Inject,forwardRef, Injectable } from '@nestjs/common';
import { CdUserService } from 'src/cd-user/cd-user.service';
@Injectable()
export class CdAuthService {
    constructor(
        @Inject(forwardRef(()=>CdUserService))
        private userService:CdUserService
    ){}

    validateUser(){
        return{
            message:'User Validated',
            user:this.userService.getUser(),
        }

    }
}
