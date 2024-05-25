import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config'

import configuration from './config/configuration';

@Injectable()
export class AppService {

  constructor(@Inject(configuration.KEY) private configService: ConfigType<typeof configuration>){}


  getHello(): string {
    return 'Hello you are listen in port: '+ this.configService.Port + " with the bd:     " + this.configService.Mongo.DBNAME;
  }
}
