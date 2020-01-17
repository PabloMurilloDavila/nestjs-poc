import { Injectable } from '@nestjs/common';
import Axios from 'axios';

@Injectable()
export class DogsService {

  async allBreeds() {
    const response = await Axios.get('https://dog.ceo/api/breeds/list/all');
    return response.data;
  }

  async subBreedList(breed: string) {
    const response = await Axios.get('https://dog.ceo/api/breed/' + breed + '/list');
    return response.data;
  }

  async randomImage() {
    const response = await Axios.get('https://dog.ceo/api/breeds/image/random');
    return response.data;
  }

  async randomBreedImage(breed: string) {
    const response = await Axios.get('https://dog.ceo/api/breed/' + breed + '/images/random');
    return response.data;
  }

  async breedImages(breed: string) {
    const response = await Axios.get('https://dog.ceo/api/breed/' + breed + '/images');
    return response.data;
  }

}
