import { Injectable } from '@nestjs/common';
import { CatsService, CatI } from '../../../services/cats/cats.service';

@Injectable()
export class CreateCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(cat: CatI) {
    return await this.catsService.createCat(cat);
  }
}
