import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../../core/entities/cat';

export interface CatI {
  id: string;
  name: string;
  years: number;
  bio?: string;
}

@Injectable()
export class CatsService {
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

  async createCat(cat: CatI) {
    return await this.catsRepository.save(cat);
  }

  async modifyCat(cat: CatI) {
    return await this.catsRepository.save(cat);
  }

  async deleteCat(id: string) {
    return await this.catsRepository.delete(id);
  }
}
