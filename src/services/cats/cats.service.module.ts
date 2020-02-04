import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { CatsService } from './cats.service';
import { Cat } from '../../core/entities/cat';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
  providers: [CatsService],
  exports: [TypeOrmModule, CatsService],
})
export class CatsServiceModule {}
