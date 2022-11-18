import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateEmployeeDto } from '../DtoS/create-employee.dto'
import { UpdateEmployeeDto } from '../DtoS/update-employee.dto'
import { Employee, EmployeeDocument } from '../Schemas/UserSchema'

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name)
        private readonly employeeModel: Model<EmployeeDocument>
    ) {}

    async create(
        CreateEmployeeDto: CreateEmployeeDto
    ): Promise<EmployeeDocument> {
        const employee = new this.employeeModel(CreateEmployeeDto)
        return employee.save()
    }

    async findAll(): Promise<EmployeeDocument[]> {
        return this.employeeModel.find().exec()
    }

    async findOne(id: string) {
        return this.employeeModel.findById(id)
    }

    async update(
        id: string,
        UpdateEmployeeDto: UpdateEmployeeDto
    ): Promise<EmployeeDocument> {
        return this.employeeModel.findByIdAndUpdate(id, UpdateEmployeeDto)
    }

    async delete(id: string) {
        return this.employeeModel.findByIdAndDelete(id)
    }
}
