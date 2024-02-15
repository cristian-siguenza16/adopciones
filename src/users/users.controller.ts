import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dtos/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        const records = this.usersService.findAll();
        return records;
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.usersService.findOne(id);
    }
    
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.usersService.create(body)
    }    

    @Patch(':id')
    update(@Param('id') id: number, @Body() body) {
        return this.usersService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number) {
        return this.usersService.remove(id);
    }

    @Get('confirm-email')
    confirmEmail(): string {
        return 'This action returns confirm the email';
    }
}