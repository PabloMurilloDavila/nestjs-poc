import { Module, HttpModule  } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import {DogsService} from '../services/dogs/dogs.service'

@Module({
    controllers: [
        DogsController,
      ],
      imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
      }),],
      providers: [DogsService],
})
export class ControllersModule {}
