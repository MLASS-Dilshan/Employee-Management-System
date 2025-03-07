import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployee } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Repository } from 'typeorm';
import { updateEmployee } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly EmployeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(CreateEmployeeDto: CreateEmployee): Promise<Employee> {
    const employee = this.EmployeeRepository.create(CreateEmployeeDto);

    return this.EmployeeRepository.save(employee);
  }

  async fetchAllEmployees(): Promise<Employee[]> {
    return this.EmployeeRepository.find();
  }

  async fetchEmployeeById(id: number): Promise<Employee> {
    const employee = await this.EmployeeRepository.findOne({ where: { id } });

    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} does not exist`);
    } else {
      console.log(`Employee with id ${id} exists`);
    }

    return employee;
  }

  async updateEmployee(id: number, updateEmployee: updateEmployee) {
    const employee = await this.EmployeeRepository.findOne({ where: { id } });

    if (!employee) {
      throw new NotFoundException(`Cannot update, Employee with id ${id} does not exist`);
    }

    if (updateEmployee.firstName) employee.firstName = updateEmployee.firstName;
    if (updateEmployee.lastName) employee.lastName = updateEmployee.lastName;
    if (updateEmployee.address) employee.address = updateEmployee.address;
    if (updateEmployee.phoneNumber)
      employee.phoneNumber = updateEmployee.phoneNumber;
    if (updateEmployee.position) employee.position = updateEmployee.position;

    return this.EmployeeRepository.save(employee);
  }

  async deleteEmployee(id: number): Promise<Employee> {
    const employee = await this.EmployeeRepository.findOne({ where: { id } });

    if (!employee) {
      throw new NotFoundException(
        `Cannot delete, Employee with id ${id} does not exist`,
      );
    } 
      await this.EmployeeRepository.delete(id);
      console.log(`Employee with id ${id} deleted`);

    return employee;
  }
}
