import { DogsService } from '../../../services/dogs/dogs.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDogs {
    constructor(private readonly dogService: DogsService) { }
    all_Breeds() {
        return this.dogService.allBreeds();
    }

    subBreed_List(breed: string) {
        return this.dogService.subBreedList(breed);
    }

    random_Image() {
        return this.dogService.randomImage();
    }

    randomBreed_Image(breed: string) {
        return this.dogService.randomBreedImage(breed);
    }

    breed_Images(breed: string) {
        return this.dogService.breedImages(breed);
    }
}