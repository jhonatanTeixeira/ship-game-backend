import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemEventsModule } from './item-events/item-events.module';

@Module({
  imports: [ItemEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
