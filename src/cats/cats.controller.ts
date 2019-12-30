import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post()
  createCat(): string {
    return `This action adds a new cat`;
  }

  @Get()
  getAllCats(): string {
    return `This action returns all cats`;
  }

  @Put(':id')
  modifyCat(@Param('id') catId: string): string {
    return `This action modifies a cat with id = ${catId}`

  }

  @Delete(':id')
  deleteCat(@Param('id') catId: string): string {
    return `This action deletes a cat with id = ${catId}`
  }

}