import { PartialType } from '@nestjs/mapped-types'
import { CreateUseDTO } from './create-user.dto'

export class UpdateUserDTO extends PartialType(CreateUseDTO) {}