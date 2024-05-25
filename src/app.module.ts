import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV || '.env',
    load: [configuration],
    isGlobal: true
  }),TodoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
