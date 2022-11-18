import { Module } from '@nestjs/common'
import { EmployeeService } from 'src/app/Services/employee.service'
import { EmployeeController } from 'src/app/Controllers/employee.controller'
import { Employee, EmployeeSchema } from 'src/app/Schemas/UserSchema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Employee.name,
                schema: EmployeeSchema,
            },
        ]),
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule {}
