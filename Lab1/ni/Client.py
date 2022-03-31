import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("127.0.0.1", 20213))
#ss = socket.socket(family=socket.AF_INET,type=socket.SOCK_DGRAM)

msg = b"This is a test from python client"
#msg.decode(encoding='UTF-8',errors='strict')

s.send(msg)
#print (msg)
#ss.bind(("127.0.0.1", 20213))

message= s.recvfrom(1024)

clientMsg = f"Message from Client:{message}"
 #   clientIP = f"Client IP Address:{address}"
print(clientMsg)
s.close()
     

