import Server from './server/app'
const server : Server = new Server();
console.log('Before server.run() check');
server.run();
console.clear()
console.log('App started on port : ' + server.getPort());
