import { Module } from '@nestjs/common';
import { ItemEventController } from './controller/item-event.controller';

@Module({
  providers: [ItemEventController],
})
export class ItemEventsModule {}
