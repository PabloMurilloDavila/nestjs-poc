import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../services/database/database.module';
import { CatsService} from './cats.service';
import { CatsController } from './cats.controller';
import { Cat } from './cat.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
  providers: [CatsService],
  controllers: [CatsController],
  exports: [TypeOrmModule]
})
export class CatsModule {}