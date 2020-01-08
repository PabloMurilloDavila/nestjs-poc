import { Injectable } from '@nestjs/common';
import { CatI } from './interfaces/cat.interface'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {

    constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) { }

    async findAllCats(): Promise<Cat[]> {
        return await this.catsRepository.find({
            select: ["id", "name", "years"]
        });
    }

    async findCat(id: string): Promise<Cat[]> {
        return await this.catsRepository.find({
            select: ["id", "name", "years"],
            where: [{ "id": id }]
        });
    }

    async createCat(cat: CatI) {
        return await this.catsRepository.save(cat)
    }

    async modifyCat(cat: CatI) {
        return await this.catsRepository.save(cat)
    }

    async deleteCat(id: string) {
        return await this.catsRepository.delete(id)

    }
}
