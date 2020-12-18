import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import config from './config/keys';
import { ItemsModule } from './items/items.module';
import { ItemSchema } from './items/schemas/item.schema';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI), MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
