import { Module, HttpModule } from '@nestjs/common';

import { GetAllBreeds } from './get.all.breeds';
import { GetSubbreedsList } from './get.subreeds.list';
import { GetRandomImage } from './get.random.image';
import { GetRandomBreedImage } from './get.random.breed.image';
import { GetBreedImages } from './get.breed.images';
import { DogsService } from '../../../services/dogs/dogs.service';


@Module({
    providers: [GetAllBreeds, GetSubbreedsList, DogsService, GetRandomImage, GetRandomBreedImage, GetBreedImages],
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    }),],
    exports: [GetAllBreeds, GetSubbreedsList, GetRandomImage, GetRandomBreedImage, GetBreedImages],
})
export class DogsModule { }