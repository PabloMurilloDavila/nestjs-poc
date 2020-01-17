import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Cat } from './cats/cat.entity'
import { DogsModule } from './dogs/dogs.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatsModule,
    DogsModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
