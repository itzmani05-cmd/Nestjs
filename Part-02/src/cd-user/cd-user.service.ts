import { Inject, forwardRef,Injectable } from '@nestjs/common';
import { CdAuthService } from 'src/cd-auth/cd-auth.service';
@Injectable()
export class CdUserService {
    constructor(
        @Inject(forwardRef(()=>CdAuthService))
        private authService:CdAuthService
    ){}

    getUser(){
        return{name:"Manikandan"};
    }

    callAuth(){
        return this.authService.validateUser();
    }
}
