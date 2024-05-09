import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'quizmanager',
  password: 'password',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}',],
  synchronize: true
};