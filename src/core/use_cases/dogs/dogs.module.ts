import { Module, HttpModule } from '@nestjs/common';
import { GetDogs } from './get.dogs';
import { DogsService } from '../../../services/dogs/dogs.service';
@Module({
    providers: [GetDogs, DogsService],
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    }),],
    exports: [GetDogs],
})
export class DogsModule { }