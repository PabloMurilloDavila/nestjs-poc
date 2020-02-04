import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../../../core/entities/cat';

@Injectable()
export class CatsClient {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  public async getCat(url: string): Promise<Cat[]> {
    return await this.catsRepository.find({
      select: ['id', 'name', 'years'],
    });
  }
}
