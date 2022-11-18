import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { EmployeeService } from 'src/app/Services/employee.service'
import { CreateEmployeeDto } from 'src/app/DtoS/create-employee.dto'
import { UpdateEmployeeDto } from 'src/app/DtoS/update-employee.dto'

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
        return this.employeeService.create(createEmployeeDto)
    }

    @Get()
    findAll() {
        return this.employeeService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employeeService.findOne(id)
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateEmployeeDto: UpdateEmployeeDto
    ) {
        return this.employeeService.update(id, updateEmployeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.employeeService.delete(id)
    }
}
