import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './entity/employee.entity';
import { CreateEmployee } from './dto/create-employee.dto';
import { updateEmployee } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}

  @Post()
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployee,
  ): Promise<Employee> {
    return this.EmployeesService.createEmployee(createEmployeeDto);
  }

  @Get()
  async fetchAllEmployees(): Promise<Employee[]> {
    return this.EmployeesService.fetchAllEmployees();
  }

  @Get(':id')
  async fetchEmployeeById(@Param('id') id: number): Promise<Employee> {
    return this.EmployeesService.fetchEmployeeById(id);
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() updateEmployee: updateEmployee,
  ) {
    return this.EmployeesService.updateEmployee(id, updateEmployee);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number): Promise<Employee> {
    return this.EmployeesService.deleteEmployee(id);
  }
}
