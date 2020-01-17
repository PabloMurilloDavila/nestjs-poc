import { Controller, Get, Param } from '@nestjs/common';
import { DogsService } from '../services/dogs/dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogsService) { }

  @Get()
  getallBreeds() {
    return this.dogService.allBreeds();
  }

  @Get('/:breed')
  getSubBreedList(@Param('breed') breed: string) {
    return this.dogService.subBreedList(breed);
  }

  @Get('/img/rnd')
  getRandomImage() {
    return this.dogService.randomImage();
  }

  @Get('/img/rnd/:breed')
  getRandomBreedImage(@Param('breed') breed: string) {
    return this.dogService.randomBreedImage(breed);
  }

  @Get('/img/:breed')
  getBreedImages(@Param('breed') breed: string) {
    return this.dogService.breedImages(breed);
  }

}