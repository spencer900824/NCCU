// import dgram
const dgram = require('dgram');
// use dgram create a server object
const server = dgram.createSocket('udp4');

server.on('message', (msg,rinfo) => {
    // once get the msg from the client send it back
    let str = rinfo.port + ':' + msg.toString();
    console.log(msg.toString());
    let sendBackMsg = Buffer.from(str);
    server.send(sendBackMsg, rinfo.port, rinfo.address, ()=>{
        server.close();
    });
})
//bind server to port 20213
server.bind(20213);