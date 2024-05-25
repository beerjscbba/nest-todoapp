import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';

import config from '../config/configuration'

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          uri: configService.Mongo.MONGO_URI
        }
      },
      inject: [config.KEY]
    })
  ],
  exports: [MongooseModule]
})
export class DatabaseModule {}
