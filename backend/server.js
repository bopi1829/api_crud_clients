import { createServer } from 'http';
import { serverConnection } from './connection/serverConnection.js';

const server = createServer(serverConnection);

server.listen(serverConnection);
