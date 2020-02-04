import { Injectable } from '@nestjs/common';
import { CatsService, CatI } from '../../../services/cats/cats.service';

@Injectable()
export class ModifyCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(cat: CatI) {
    return await this.catsService.modifyCat(cat);
  }
}
