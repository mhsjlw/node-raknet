const RakNet = require('../')
const parser = RakNet.createDeserializer()

let packet = Buffer.concat([
  Buffer.from([0x5, 0x0, 0xff, 0xff, 0x0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfd, 0xfd, 0xfd, 0xfd, 0x12, 0x34, 0x56, 0x78, 0x6]),
  Buffer.alloc(87)])

console.log(
  JSON.stringify(
    parser.parsePacketBuffer(packet), null, 2))
