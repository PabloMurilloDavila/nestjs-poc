import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../../../core/entities/cat';
import { CatInputDto } from 'src/core/dto/cats/cat.input.dto';

@Injectable()
export class CatsClient {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  async getAllCats(): Promise<Cat[]> {
    return await this.catsRepository.find({
      select: ['id', 'name', 'years'],
    });
  }

  async getCat(id: string): Promise<Cat[]> {
    return await this.catsRepository.find({
      select: ['id', 'name', 'years'],
      where: [{ id: id }],
    });
  }

  async createCat(cat: CatInputDto) {
    return await this.catsRepository.save(cat);
  }

  async modifyCat(cat: CatInputDto) {
    return await this.catsRepository.save(cat);
  }

  async deleteCat(id: string) {
    return await this.catsRepository.delete(id);
  }
}
