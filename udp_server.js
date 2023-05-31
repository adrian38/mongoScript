var dgram = require("dgram");

var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
  console.log("************* Message from Udp Client *************");
  console.log(msg.toString());

  // console.log("************* CRC32 *************");
  // console.log(this.calc_crc32(msg.toString()).toString(16));

  // console.log("************* HASH *************");
  // console.log(this.calc_hash(msg.toString()).toString(16));

  server.send(Buffer.from("Reply from de server"), rinfo.port, rinfo.address);
});

server.bind(3000);

function calc_crc32(data) {
  let posicion = data.indexOf(",");
  let arrayPositions = [];
  while (posicion != -1) {
    posicion = data.indexOf(",", posicion + 1);
    if (posicion != -1) {
      arrayPositions.push(posicion);
    }
  }

  let tempData = data.substr(0, arrayPositions[arrayPositions.length - 2] + 3);

  var crc32 = new Uint32Array(1);
  crc32[0] = 0xffffffff;

  let k, i;

  var sm = new Uint32Array(1);

  for (k = 0; k < tempData.length; k++) {
    let c = tempData.charCodeAt(k);

    for (i = 0; i < 8; ++i) {
      sm[0] = crc32[0];
      crc32[0] <<= 1;

      if (c & 0x80) {
        crc32[0] |= 1;
      }
      if (sm[0] & 0x80000000) {
        crc32[0] ^= 0x4c11db7; //Polynom
      }
      c <<= 1;
    }
  }

  return crc32[0];
}

function calc_hash(data) {
  let posicion = data.indexOf(",");
  let arrayPositions = [];
  while (posicion != -1) {
    posicion = data.indexOf(",", posicion + 1);

    if (posicion != -1) {
      arrayPositions.push(posicion);
    }
  }

  let tempData = data.substr(0, arrayPositions[arrayPositions.length - 2] + 3);

  var crc32 = new Uint32Array(1);
  crc32[0] = 0xffffffff;

  let k, i;

  var sm = new Uint32Array(1);

  for (k = 0; k < tempData.length; k++) {
    let c = tempData.charCodeAt(k);

    for (i = 0; i < 8; ++i) {
      sm[0] = crc32[0];
      crc32[0] <<= 1;

      if (c & 0x80) {
        crc32[0] |= 1;
      }
      if (sm[0] & 0x80000000) {
        crc32[0] ^= 0x12345678; //Polynom
      }
      c <<= 1;
    }
  }

  return crc32[0];
}
function stringModification(data) {
  let posicion = data.indexOf(",");
  let arrayPositions = [];
  while (posicion != -1) {
    posicion = data.indexOf(",", posicion + 1);
    console.log(posicion);
    if (posicion != -1) {
      arrayPositions.push(posicion);
    }
  }

  let tempData = data.substr(0, arrayPositions[arrayPositions.length - 2] + 3);
}
