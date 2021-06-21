import io from 'socket.io-client';

const socket = () => {
    return io('http://192.168.77.2:3000');
}

export default socket;
