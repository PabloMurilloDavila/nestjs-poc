import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import {DogsModule} from '../services/dogs/dogs.module';
import {DogsService} from '../services/dogs/dogs.service'

@Module({
    controllers: [
        DogsController,
      ],
      imports: [DogsModule],
      providers: [DogsService],
})
export class ControllersModule {}
