import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';

describe('Cats Controller', () => {
  let catsController: CatsController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
       providers: [CatsService, {provide: getRepositoryToken(Cat), useFactory: repositoryMockFactory}], controllers: [CatsController]
    }).compile();

    catsController = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(catsController).toBeDefined();
  });
});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  save: jest.fn()
 }));
 export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
 };
