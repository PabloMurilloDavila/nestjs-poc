import { Injectable } from '@nestjs/common';
import { BreedListAdapter } from './adapters/breed.list.adapter'
import { DogsClient } from './client/dogs.client';

export interface allBreedsResult {
  list: string[],
  total: number
}

@Injectable()
export class DogsService {

  endpoint_root: string;
  client = new (DogsClient);

  async allBreeds(): Promise<allBreedsResult> {
    const response = await this.client.all_Breeds();
    const adapted = BreedListAdapter.toListandNumber(response);
    return adapted;
  }

  async subBreedList(breed: string) {
    const response = await this.client.subBreed_List(breed);
    return response;
  }

  async randomImage() {
    const response = await this.client.random_Image();
    return response;
  }

  async randomBreedImage(breed: string) {
    const response = await this.client.randomBreed_Image(breed);
    return response;
  }

  async breedImages(breed: string) {
    const response = await this.client.breed_Images(breed);
    return response;
  }

}
