import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
import { CatOutputDto, fromCatEntity } from '../../../../src/core/dto/cats/cat.output.dto';

@Injectable()
export class GetCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(id: string): Promise<CatOutputDto> {
    const cat = await this.catsService.getCat(id);
    return fromCatEntity(cat);
  }
}
