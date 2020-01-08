import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat';
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {

  constructor(private readonly catService: CatsService) { }

  @Get()
  getallCats() {
    return this.catService.findAllCats();
  }

  @Get(':id')
  getCat(@Param('id') catId: string) {
    return this.catService.findCat(catId);
  }

  @Post()
  createCat(@Body() catDto: CreateCatDto)  {
    return this.catService.createCat(catDto);
  }

  @Put()
  modify(@Body() catDto: CreateCatDto)  {
    return this.catService.modifyCat(catDto);
  }

  @Delete(':id')
  deleteCat(@Param('id') catId: string)  {
    return this.catService.deleteCat(catId);
  }

}