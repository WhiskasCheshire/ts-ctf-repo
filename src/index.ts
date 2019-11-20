import {TcpSocket} from "./tools/tcp";


let start = async () => {

  let socket = new TcpSocket({debug:false});
  await socket.connect("142.93.73.149 10679")

  await socket.interactive()



}



start()
