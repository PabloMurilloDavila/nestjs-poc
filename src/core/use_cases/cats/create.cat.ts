import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
import { CatInputDto } from '../../../core/dto/cats/cat.input.dto';

@Injectable()
export class CreateCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(cat: CatInputDto) {
    return await this.catsService.createCat(cat);
  }
}
