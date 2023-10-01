import { Injectable } from '@nestjs/common';
import { ProductEntity } from './app.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async GetAllProducts(): Promise<ProductEntity[]>{
      return this.productRepository.find();
  }

  async GetProductById(id: number): Promise<ProductEntity>{
    return this.productRepository.findOneBy({id: id});
  }
}

