import { DogsService } from '../../../services/dogs/dogs.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllBreeds {
  constructor(private readonly dogService: DogsService) { }

  public async call(): Promise<Buffer> {
    return await this.dogService.allBreeds();
  }
}
