import { COMMON_CONFIG } from './prod';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TEST_DATABASE_CONFIG: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  keepConnectionAlive: true,
  ...COMMON_CONFIG,
};
