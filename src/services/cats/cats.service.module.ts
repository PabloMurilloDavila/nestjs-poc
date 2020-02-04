import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsClient } from './client/cats.client';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../../core/entities/cat';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
  providers: [CatsService, CatsClient],
  exports: [CatsService, CatsClient],
})
export class CatsServiceModule {}
