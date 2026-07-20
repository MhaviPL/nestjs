import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUseDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

interface User {
    id: number
    name: string
    email: string
}

@Injectable()
export class UserService {
    constructor(private readonly logger: LoggerService) {}

        private users: User[] = [
            {id: 1, name: "John Doe", email: "JohnEmail@example.com"},
            {id: 2, name: "Jane Doe", email: "JaneEmail@example.com"}
        ]

        findAllUsers(name: string = ''){
            this.logger.log('Finding all users')

            const users = this.users.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase())
            )
            
            if (users.length === 0) {
                throw new NotFoundException('User Not Found')
            }

            return users
        }

        findUserById(id:number){
            this.logger.log(`Finding User with id -> ${id}`)

            const user = this.users.find((user) => user.id === id) ?? null

            if (!user) {
                throw new NotFoundException('User Not Found')
            }

            return user
        }

        createUser(UserDTO: CreateUseDTO){
            this.logger.log('Creating new user')

            const newUser: User = {id: this.users.length + 1, ...UserDTO}
            this.users.push(newUser)

            return newUser
        }

        updateUser(id: number, UserDTO: UpdateUserDTO){
            this.logger.log(`Updating User with id -> ${id}`)

            const index = this.users.findIndex((user) => user.id == id)
            
            if (index === -1) {
                throw new NotFoundException('User Not Found')
            } 

            this.users[index] = { ...this.users[index], ...UserDTO }

            return this.users[index]
        }

        deleteUser(id: number){
            this.logger.log(`Deleting User with id -> ${id}`)

            const index = this.users.findIndex((user) => user.id == id)
            
            if (index === -1) {
                throw new NotFoundException('User Not Found')
            } 

            const deleted = this.users.splice(index, 1)

            return deleted
        }
   
}
