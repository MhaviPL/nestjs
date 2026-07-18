import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUseDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService ) {}
    @Get() // GET /user?name=Name
    getUsers(@Query('name') name: string): unknown {
        return this.userService.findAllUsers(name)
    }

    @Get(':id') // GET /user/:id
    getUserById(@Param('id') id: number): unknown{
        return this.userService.findUserById(id)
    }

    @Post() // POST /user
    createUser(@Body() createUseDTO: CreateUseDTO): unknown{
        return this.userService.createUser(createUseDTO)
    }

    @Put(':id') // PUT /user/:id
    updateUser(@Param('id') id:number, @Body() updateUserDTO: UpdateUserDTO): unknown{
        return this.userService.updateUser(id, updateUserDTO)
    }

    @Delete(':id') // DELETE /user/:id
    deleteUser(@Param('id') id:number): unknown {
        return this.userService.deleteUser(id)
    }
}
