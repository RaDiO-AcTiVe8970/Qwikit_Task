import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'containers-us-west-110.railway.app',
    port: 6397,
    username: 'postgres',
    password: 'IXERQvSyE1AVUlSwZ4h1', //Change to your Password
    database: 'railway',
    autoLoadEntities: true,
    synchronize: true,
    }), TypeOrmModule.forFeature([ProductEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
