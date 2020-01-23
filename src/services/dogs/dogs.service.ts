import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import {BreedListAdapter} from './adapters/breed.list.adapter'

@Injectable()
export class DogsService {

  async allBreeds() {
    const {data} = await Axios.get('https://dog.ceo/api/breeds/list/all');
    const adapted = BreedListAdapter.toListandNumber(data);
    // return adapted;
    return ;
  }

  async subBreedList(breed: string) {
    const {data} = await Axios.get('https://dog.ceo/api/breed/' + breed + '/list');
    return data;
  }

  async randomImage() {
    const {data} = await Axios.get('https://dog.ceo/api/breeds/image/random');
    return data;
  }

  async randomBreedImage(breed: string) {
    const {data} = await Axios.get('https://dog.ceo/api/breed/' + breed + '/images/random');
    return data;
  }

  async breedImages(breed: string) {
    const {data} = await Axios.get('https://dog.ceo/api/breed/' + breed + '/images');
    return data;
  }

}
