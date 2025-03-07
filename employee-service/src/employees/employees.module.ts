import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController],
  imports : [TypeOrmModule.forFeature([Employee])]
})
export class EmployeesModule {}
