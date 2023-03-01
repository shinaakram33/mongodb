import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/Dto/createUserDto.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any>{
        return await this.userService.createUser(createUserDto);
    }

    @Get('getcomments/:id')
    async getComments(@Param('id') id:string){
        return await this.userService.getComments(id);
    }
}
