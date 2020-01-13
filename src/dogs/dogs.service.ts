import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class DogsService {
  constructor(private readonly httpService: HttpService) { }

  allBreeds() {
    return this.httpService.get('https://dog.ceo/api/breeds/list/all').pipe(
      map(response => response.data)
    );
  }

  subBreedList(breed: string) {
    return this.httpService.get('https://dog.ceo/api/breed/' + breed + '/list').pipe(
      map(response => response.data)
    );
  }

  randomImage() {
    return this.httpService.get('https://dog.ceo/api/breeds/image/random').pipe(
      map(response => response.data)
    );
  }

  randomBreedImage(breed: string) {
    return this.httpService.get('https://dog.ceo/api/breed/' + breed + '/images/random').pipe(
      map(response => response.data)
    );
  }

  breedImages(breed: string) {
    return this.httpService.get('https://dog.ceo/api/breed/' + breed + '/images').pipe(
      map(response => response.data)
    );
  }

}