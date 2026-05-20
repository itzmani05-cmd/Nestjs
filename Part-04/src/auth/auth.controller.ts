import { Controller,Post,Get, Body,Request,UseGuards,Req} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth-guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth-guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    // @Post('login')
    // async login(@Body() body:any){
    //     return this.authService.ValidateUser(body.username,body.password);
    // }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    //Google
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(){}

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleRedirect(@Req() req){
        console.log(req.user);
        return req.user;
    }

    //Github
    @Get('github')
    @UseGuards(AuthGuard('github'))
    async githubAuth(){}

    @Get('github/redirect')
    @UseGuards(AuthGuard('github'))
    githubRedirect(@Req() req){
        console.log(req.user);
        return req.user;
    }
    
    
    // @UseGuards(LocalAuthGuard)
    // @Post('logout')
    // async logout(@Request() req) {
    //     return req.logout();
    // }
}
