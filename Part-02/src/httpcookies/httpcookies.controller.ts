import { Controller,Get,Req,Res } from '@nestjs/common';
import type {Request, Response} from'express';

@Controller('httpcookies')
export class HttpcookiesController {
    @Get('set')
    setCookies(@Res({passthrough:true}) response:Response,){
        response.cookie('username','Manikandan',{
            maxAge:60000,
        })
        return {message:'Cookie Set'}
    }

    @Get('get')
    getCookies(@Req() request:Request){
        return request.cookies;
    }

    @Get('name')
    getCookieName(@Req() request:Request){
        return request.cookies['username'];
    }

    @Get('delete')
    deleteCookies(@Res({passthrough:true}) response:Response){
        response.clearCookie('username');
        return {message:'Cookie Deleted'};
    }
}
