import { DogsService } from '../../../services/dogs/dogs.service';
import { Injectable } from '@nestjs/common';
import { DogsOutputDto } from 'src/core/dto/dogs/dogs.output.dto';
import { Dog } from 'src/core/entities/dog';

@Injectable()
export class GetAllBreeds {
  constructor(private readonly dogService: DogsService) {}

  public async call(): Promise<DogsOutputDto> {
    const dogs = await this.dogService.allBreeds();
    return this.toListandNumber(dogs);
  }

  private toListandNumber(dogs: Dog[]) {
    let breedNamesList: string[] = [];

    Object.keys(dogs).forEach(Element => {
      breedNamesList.push(dogs[Element].breed);
    });

    const adapted = {
      list: breedNamesList,
      total: breedNamesList.length,
    };

    return adapted;
  }
}
