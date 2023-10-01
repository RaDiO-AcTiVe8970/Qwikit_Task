import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductEntity } from './app.entity';

@Controller('api/product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/index')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/allproducts")
  async GetAllProducts(): Promise<ProductEntity[]>{
    try{
      const products = await this.appService.GetAllProducts();
      return products;
    }
    catch(err){
      return err;
    }
  }

  @Get("/product/:id")
  async GetProductById(id: number): Promise<ProductEntity>{
    try{
      const product = await this.appService.GetProductById(id);
      return product;
    }
    catch(err){
      return err;
    }
  }
}
