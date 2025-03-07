import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entity/employee.entity';

@Module({
  imports: [
    EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sachira12345',
      database: 'emptrack',
      entities: [Employee],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
