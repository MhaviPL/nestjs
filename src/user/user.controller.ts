import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUseDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    
    @Get() // GET /user?name=Name
    getUsers(@Query('name') name: string){
        const users = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Mary'},
            {id: 3, name: 'Nikola'},
            {id: 4, name: 'Joshua'},
        ]

        if (name) {
            return users.filter((users) =>
                users.name.toLowerCase().includes(name.toLowerCase())
            )
        }

        return users
    }

    @Get(':id') // GET /user/:id
    getUserById(@Param('id') id: string){
        return {id, name: 'John Doe'}
    }

    @Post() // POST /user
    createUser(@Body() CreateUseDTO: CreateUseDTO){
        return {data: CreateUseDTO, message: 'User Created Successfully!'}
    }

    @Put(':id') // PUT /user/:id
    updateUser(@Param('id') id:string, @Body() UpdateUserDTO: UpdateUserDTO){
        return {
            data: {id, ...UpdateUserDTO}, 
            message: "User Updated Successfully!"
        }
    }
}
