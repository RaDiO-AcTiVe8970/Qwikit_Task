import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'MoHiT8970', //Change to your Password
    database: 'qwit_task',
    autoLoadEntities: true,
    synchronize: true,
    }), TypeOrmModule.forFeature([ProductEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
