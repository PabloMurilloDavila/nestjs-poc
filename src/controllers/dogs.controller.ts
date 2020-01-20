import { Controller, Get, Param } from '@nestjs/common';
import { GetDogs } from '../core/use_cases/dogs/get.dogs'

@Controller('dogs')
export class DogsController {

  constructor(
    private readonly getDogs: GetDogs,
  ) { }

  @Get()
  getallBreeds() {
    return this.getDogs.all_Breeds();
  }

  @Get('/:breed')
  getSubBreedList(@Param('breed') breed: string) {
    return this.getDogs.subBreed_List(breed);
  }

  @Get('/img/rnd')
  getRandomImage() {
    return this.getDogs.random_Image();
  }

  @Get('/img/rnd/:breed')
  getRandomBreedImage(@Param('breed') breed: string) {
    return this.getDogs.randomBreed_Image(breed);
  }

  @Get('/img/:breed')
  getBreedImages(@Param('breed') breed: string) {
    return this.getDogs.randomBreed_Image(breed);
  }

}