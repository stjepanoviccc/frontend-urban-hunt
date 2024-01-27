import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

class WebSocketService {
  stompClient: Stomp.Client | null = null;

  connect = () => {
    const socket = new SockJS('http://localhost:3000/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      console.log('Connected to WebSocket');
    });
  };

  disconnect = () => {
    if (this.stompClient !== null) {
      this.stompClient.disconnect(() => {}); 
    }
    console.log('Disconnected from WebSocket');
  };

  subscribe = (destination: string, callback: (message: Stomp.Message) => void) => {
    if (this.stompClient !== null) {
      this.stompClient.subscribe(`/topic${destination}`, callback);
    }
  };

  sendMessage = (destination: string, message: Record<string, any>) => {
    if (this.stompClient !== null) {
      this.stompClient.send(`/app${destination}`, {}, JSON.stringify(message));
    }
  };
}

const webSocketService = new WebSocketService();
export default webSocketService;
