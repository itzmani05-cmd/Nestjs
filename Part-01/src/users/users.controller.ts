import { Body, Controller,Get, Param,Post,Patch,Delete, Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
@Controller('users')     
export class UsersController {
    /*
        GET /users
        GET /users/:id
        GET /users/interns
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */
    constructor(private readonly usersService:UsersService){}

    @Get() //GET /users or /users?role=value
    findAll(@Query('role') role?:'INTERN' | 'ENGINEER'| 'ADMIN'){
        // return []
        return this.usersService.findAll(role)
    }

    // @Get() //GET /users
    // findAll(){
    //     return []
    // }

    // @Get('interns') //GET /users/intern
    // findAllInterns(){
    //     return []
    // }

    @Get(':id') //GET /users/:id
    findOne(@Param('id',ParseIntPipe) id:number){
        // return {id}
        return this.usersService.findOne(id)
    }

    @Post() //POST  /users
    // create(@Body() user:{name:string, email:string,role: 'INTERN' | 'ENGINEER'| 'ADMIN'}){
    //     return this.usersService.create(user)
    // }
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto)
    }
    
    @Patch(':id') //PATCH /users    /:id
    // update(@Param('id',ParseIntPipe) id:number, @Body() userUpdate:{
    //     name?:string,email?:string,role?:'INTERN' | 'ENGINEER'| 'ADMIN'
    // }){
    //     return this.usersService.update(id,userUpdate)
    // }
    update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe) userUpdate:UpdateUserDto){
        return this.usersService.update(id,userUpdate)
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id',ParseIntPipe) id:number){
        // return {id}
        return this.usersService.delete(id)
    }  
}
