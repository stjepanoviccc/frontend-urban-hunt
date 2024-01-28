import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:3000/socket', {
    autoConnect: false,
    extraHeaders: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    }
});

export default socket;