import { Injectable } from '@nestjs/common';
import { CatI } from './interfaces/cat.interface'
@Injectable()
export class CatsService {

    findAllCats() {
        return 'Find all cats -->Service'
    }

    findCat(id: string) {
        return 'Find one cat -->Service'
    }

    createCat(cat: CatI) {
        return `Create cat -->Service`
    }

    modifyCat(id: string, cat: CatI) {
        return 'Modify cat -->Service'
    }

    deleteCat(id: string) {
        return 'Delete cat -->Service'
    }
}
