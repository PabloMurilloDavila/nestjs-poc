import { Module, HttpModule } from '@nestjs/common';


@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],

})
export class DogsModule {}
