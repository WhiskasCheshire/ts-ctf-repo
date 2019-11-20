import {PromiseSocket, TimeoutError} from "promise-socket"
import net, {Socket} from "net";
import deepmerge = require("deepmerge");
import {setIOTo} from "./linereader";
import {sleep} from "./utils";


const defaultOptions = {
  debug: true
}

export class TcpSocket {

  socket: PromiseSocket<Socket>

  options: { debug: boolean }

  constructor(options = {}) {
    this.options = deepmerge(defaultOptions, options);
    this.socket = new PromiseSocket(new net.Socket());
    // this.socket.setTimeout(30000);
    this.socket.setEncoding("utf-8");
  }

  setDebug(value: boolean) {
    this.options.debug = value;
  }


  async connect(path: string) {
    let [ip, port] = path.replace(":", " ").split(" ")
    await this.socket.connect(Number(port), String(ip))
  }

  async sendLine(text: string | Buffer, encoding = undefined) {
    await this.send(text + "\n", encoding)
  }

  async send(text: string | Buffer, encoding = undefined) {

    // Print
    if (this.options.debug) {
      process.stdout.write(text);
    }

    await this.socket.write(text, encoding)
  }

  async readAll() {
    let res = await this.socket.readAll();

    // Print
    if (this.options.debug) {
      process.stdout.write(res);
    }

    return res

  }

  async read(size: number) {
    let res = await this.socket.read(size);

    // Print
    if (this.options.debug) {
      process.stdout.write(res);
    }

    return res
  }

  async readUntil(text, timeout = 0) {
    let buffer = "";
    let start = Date.now();

    while (buffer.indexOf(text) == -1) {
      if (timeout > 0 && Date.now() - start > timeout)
        throw new Error("readUntil Timeout!")
      buffer += await this.read(1);
    }

    return buffer
  }

  async readLine() {
    return await this.readUntil("\n");
  }


  async interactive() {

  }


}
