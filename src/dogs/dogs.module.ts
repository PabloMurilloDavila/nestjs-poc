import { Module, HttpModule } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
