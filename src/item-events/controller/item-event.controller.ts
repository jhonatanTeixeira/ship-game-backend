import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Item } from '../model/item';
import { Socket } from 'socket.io';

@WebSocketGateway(3001, {room: 'items'})
export class ItemEventController {

  @SubscribeMessage('local-item')
  reportItem(
    @ConnectedSocket() socket: Socket,
    @MessageBody() item: Item,
  ) {
    socket.broadcast.emit('remote-item', item);
  }
}
