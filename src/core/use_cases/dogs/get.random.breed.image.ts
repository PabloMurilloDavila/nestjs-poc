import { DogsService } from '../../../services/dogs/dogs.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetRandomBreedImage {
  constructor(private readonly dogService: DogsService) { }

  public async call(breed: string): Promise<Buffer> {
    return await this.dogService.randomBreedImage(breed);
  }
}
