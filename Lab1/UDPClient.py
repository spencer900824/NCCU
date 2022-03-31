import socket
# create socket connect to localhost:20213
skt = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
skt.connect(("127.0.0.1", 20213))
# send msg
msg = b'This is a test from python client'
skt.send(msg)
# wait for send back
msg, add = skt.recvfrom(1024)
sendBackMsg = msg.decode("utf-8")
print(sendBackMsg)
skt.close()
