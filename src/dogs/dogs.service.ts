import  {Injectable}  from '@nestjs/common';
import Axios from 'axios';

@Injectable()
export class DogsService {

  allBreeds() {
    return Axios.get('https://dog.ceo/api/breeds/list/all').then(response => response.data);
  }

  subBreedList(breed: string) {
    return Axios.get('https://dog.ceo/api/breed/' + breed + '/list').then(response => response.data);
  }

  randomImage() {
    return Axios.get('https://dog.ceo/api/breeds/image/random').then(response => response.data);
  }

  randomBreedImage(breed: string) {
    return Axios.get('https://dog.ceo/api/breed/' + breed + '/images/random').then(response => response.data);
  }

  breedImages(breed: string) {
    return Axios.get('https://dog.ceo/api/breed/' + breed + '/images').then(response => response.data);
  }

}
