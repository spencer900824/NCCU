const dgram = require('dgram');
const server = dgram.createSocket('udp4');


server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });

// server.on('error', (err) => {
//     console.log(`server error:\n${err.stack}`);
//     server.close();
//   });

server.on('message', (msg, rinfo) => {
    let final_msg = msg.toString();
    console.log(final_msg);
//    console.log(server.address().port);
    let port_name = rinfo.port.toString() + ':';
    final_msg =  port_name + final_msg;
//    console.log(final_msg);
    final_msg = Buffer.from(final_msg);
//    console.log(final_msg);
    server.send(final_msg, rinfo.port , rinfo.address, ()=>{server.close();});
  });


server.bind(20213, 'localhost');
 
