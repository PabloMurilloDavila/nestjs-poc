import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from '../../src/controllers/dogs.controller';
import { GetDogs } from '../../src/core/use_cases/dogs/get.dogs';
import { DogsService } from '../../src/services/dogs/dogs.service';

describe('Dogs Controller', () => {
  let controller: DogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
       controllers: [DogsController], providers: [DogsService, GetDogs]
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
