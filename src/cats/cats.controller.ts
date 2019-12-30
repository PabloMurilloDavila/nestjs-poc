import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat';
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {

  constructor(private readonly catService: CatsService) { }

  @Get()
  getAllCats(): string {
    return this.catService.findAllCats();
  }

  @Get(':id')
  getCat(@Param('id') catId: string): string {
    return this.catService.findCat(catId);
  }

  @Post()
  createCat(@Body() catDto: CreateCatDto): string {
    return this.catService.createCat(catDto);
  }

  @Put(':id')
  modifyCat(@Param('id') catId: string, @Body() catDto: CreateCatDto): string {
    return this.catService.modifyCat(catId, catDto);

  }

  @Delete(':id')
  deleteCat(@Param('id') catId: string): string {
    return this.catService.deleteCat(catId);
  }

}