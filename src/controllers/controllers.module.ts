import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsModule } from '../core/use_cases/dogs/dogs.module'
@Module({
  controllers: [
    DogsController,
  ],
  imports: [DogsModule],

})
export class ControllersModule { }
