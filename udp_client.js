// var data = {
//   mType: "3",
//   hwv: "41",
//   seq: "34",
//   pv: "10",
//   sn: "216001000200",
//   opStat: "3",
//   dateTime: "22/02/14,22:38:43+04",
//   cellId: "72167741",
//   tac: "010C",
//   sigPw: "-587",
//   totPw: "-523",
//   ecl: "0",
//   snr: "-63",
//   ctTx: "33",
//   txTime: "11476",
//   rxTime: "52848",
//   measTime: "74",
//   measInt: "15",
//   al: "0",
//   bat: "3590",
//   tem: "182",
//   mf: "11143",
//   pre: ["0"],
//   crc: "1DF56012",
//   hash: "6FF480D6",
// };

//data = JSON.stringify(data);

//data = stringManometertoSend(data);

// let data =
//   '{\r\n"sqCh":"6611C31A",\r\n"crc":"CA030DF7",\r\n"hash":"26EF0603"\r\n}\r\n';

// let data = '7b0d0a226d54797065223a2232222c0d0a22687776223a223431222c0d0a22736571223a2238222c0d0a227076223a223130222c0d0a22736e223a22323136303031303030323030222c0d0a226f7053746174223a2233222c0d0a226461746554696d65223a2232322f30322f31342c31363a30303a30382b3034222c0d0a2263656c6c4964223a223732313637373431222c0d0a22746163223a2230313043222c0d0a227369675077223a222d353939222c0d0a22746f745077223a222d353234222c0d0a2265636c223a2230222c0d0a22736e72223a222d3732222c0d0a2263745478223a2237222c0d0a22747854696d65223a2232373437222c0d0a22727854696d65223a2231393537222c0d0a226d65617354696d65223a2235222c0d0a226d656173496e74223a223135222c0d0a22616c223a2230222c0d0a22626174223a2233353438222c0d0a22667776223a223535222c0d0a226677766d223a2230222c0d0a22696d6569223a22383637373234303332383233373634222c0d0a22696d7369223a22393031323838303034343931353234222c0d0a22636f6d6d496e74223a223135222c0d0a2263745265736574223a2231222c0d0a22737461747573223a2230222c0d0a22637263223a224136374246314132222c0d0a2268617368223a223532334636413344220d0a7d0d0a'
// data = hex_to_ascii(data)

// let data =
//   '{\r\n"mType":"3",\r\n"hwv":"41",\r\n"seq":"8",\r\n"pv":"10",\r\n"sn":"216001000200",\r\n"opStat":"3",\r\n"dateTime":"22/02/14,16:00:08+04",\r\n"cellId":"72167741",\r\n"tac":"010C",\r\n"sigPw":"-599",\r\n"totPw":"-524",\r\n"ecl":"0",\r\n"snr":"-72",\r\n"ctTx":"7",\r\n"txTime":"2747",\r\n"rxTime":"1957",\r\n"measTime":"5",\r\n"measInt":"15",\r\n"al":"0",\r\n"bat":"3548",\r\n"fwv":"55",\r\n"fwvm":"0",\r\n"imei":"867724032823764",\r\n"imsi":"901288004491524",\r\n"commInt":"15",\r\n"ctReset":"1",\r\n"status":"0",\r\n"crc":"A67BF1A2",\r\n"hash":"523F6A3D"\r\n}\r\n';

let data =
  // '{\r\n"mType":"3",\r\n"hwv":"41",\r\n"seq":"1331",\r\n"pv":"10",\r\n"sn":"216001000200",\r\n"opStat":"3",\r\n"dateTime":"22/03/09,05:40:01+04",\r\n"cellId":"72167741",\r\n"tac":"010C",\r\n"sigPw":"-590",\r\n"totPw":"-528",\r\n"ecl":"0",\r\n"snr":"6",\r\n"ctTx":"1352",\r\n"txTime":"35400",\r\n"rxTime":"49680",\r\n"measTime":"3183",\r\n"measInt":"15",\r\n"al":"0",\r\n"bat":"3593",\r\n"tem":"154",\r\n"mf":"11043",\r\n"pre":["0"],\r\n"crc":"FEAF00B3",\r\n"hash":"F2AA3C62"\r\n}\r\n';
  // '{\r\n"mType":"4",\r\n"hwv":"41",\r\n"seq":"1331",\r\n"pv":"10",\r\n"sn":"216001000200",\r\n"opStat":"3",\r\n"dateTime":"22/03/09,05:40:01+04",\r\n"cellId":"72167741",\r\n"tac":"010C",\r\n"sigPw":"-590",\r\n"totPw":"-528",\r\n"ecl":"0",\r\n"snr":"6",\r\n"ctTx":"1352",\r\n"txTime":"35400",\r\n"rxTime":"49680",\r\n"measTime":"3183",\r\n"measInt":"15",\r\n"al":"0",\r\n"bat":"3593",\r\n"tem":"154",\r\n"mf":"11043",\r\n"pre":["0"],\r\n"crc":"4C8CB29E",\r\n"hash":"F2AA3C62"\r\n}\r\n';
  '{\r\n"mType":"4",\r\n"hwv":"41",\r\n"seq":"1331",\r\n"pv":"10",\r\n"sn":"216001000200",\r\n"opStat":"3",\r\n"dateTime":"22/03/09,05:40:01+04",\r\n"cellId":"72167741",\r\n"tac":"010C",\r\n"sigPw":"-590",\r\n"totPw":"-528",\r\n"ecl":"0",\r\n"snr":"6",\r\n"ctTx":"1352",\r\n"txTime":"35400",\r\n"rxTime":"49680",\r\n"measTime":"3183",\r\n"measInt":"1",\r\n"al":"0",\r\n"bat":"3593",\r\n"tem":"154",\r\n"mf":"11043",\r\n"pre":["0"],\r\n"crc":"72FD4BFA",\r\n"hash":"F2AA3C62"\r\n}\r\n';
// '{\r\n"mType":"4",\r\n"hwv":"41",\r\n"seq":"1331",\r\n"pv":"10",\r\n"sn":"216001000200",\r\n"opStat":"3",\r\n"dateTime":"22/03/09,05:40:01+04",\r\n"cellId":"72167741",\r\n"tac":"010C",\r\n"sigPw":"-590",\r\n"totPw":"-528",\r\n"ecl":"0",\r\n"snr":"6",\r\n"ctTx":"1352",\r\n"txTime":"35400",\r\n"rxTime":"49680",\r\n"measTime":"3183",\r\n"measInt":"5",\r\n"al":"0",\r\n"bat":"3593",\r\n"tem":"154",\r\n"mf":"11043",\r\n"pre":["0"],\r\n"crc":"87C95315",\r\n"hash":"F2AA3C62"\r\n}\r\n';

// let data = '{\r\n"sqCh":"A67BF1A2",\r\n"crc":"CA030DF7",\r\n"hash":"26EF0603"\r\n}\r\n';

var dgram = require("dgram");

var s = dgram.createSocket("udp4");
s.send(
  Buffer.from(data),

  3006,
  //   3000,
  // 8700, //pre
  // 8701, //QA
  //   "127.0.0.1"
  // "192.168.12.94"
  // "84.124.28.171"
  // "90.161.157.197"
  // "157.245.22.55"
  "172.28.3.202"
  // "45.93.100.189"
);

s.on("message", function (msg, rinfo) {
  console.log("************* Message from Udp Server *************");
  console.log(msg.toString());
  s.close();
});

// function stringManometertoSend(data) {
//   //data.replace("a", "{");
//   // data = data.replace('"\r\n"', ",");
//   // data.replace('"\r\n"', "}");
//   const regex = /,/gi;
//   const regex1 = /{/gi;
//   const regex2 = /}/gi;
//   // data = data.replaceAll("}", "}\r\n");
//   // data = data.replaceAll("{", "{\r\n");

//   data = data.replace(regex, ",\r\n");
//   data = data.replace(regex1, "{\r\n");
//   data = data.replace(regex2, "\r\n}\r\n");

//   //console.log(data.length, "tamaño");
//   // for (let i = 0; i < data.length; i++) {
//   //   let caracter = data.charAt(i);

//   //   if (caracter == "{" || caracter == "," || caracter == "}") {

//   //     data = data.slice(0, i);

//   //     // data[i];
//   //     //data.charAt(i) = data.charAt(i) + "a";
//   //     // console.log(data.charAt(i), "subcadena");
//   //     //console.log(i, "posicion");
//   //   }
//   // }

//   console.log(data, "cadena alterada");
//   return data;
// }

// function stringModificaton(data) {
//   let posicion;
//   let arrayPositions = [];
//   while (posicion != -1) {
//     posicion = data.indexOf(",", posicion + 1);
//     console.log(posicion);
//     if (posicion != -1) {
//       console.log("entre");
//       arrayPositions.push(posicion);
//     }
//   }

//   console.log(arrayPositions, "array de positions");
//   console.log('************* cadena *************');
//   console.log(arrayPositions[arrayPositions.length - 2]);
//   console.log(
//     data.substr(0, arrayPositions[arrayPositions.length - 2] + 3),
//     "cadena"
//   );
// }

// stringModificaton(data);

// function calc_crc32(data) {
//   var crc32 = new Uint32Array(1);
//   crc32[0] = 0xffffffff;

//   let k, i;

//   var sm = new Uint32Array(1);

//   for (k = 0; k < data.length; k++) {
//     var c = data.charCodeAt(k);

//     for (i = 0; i < 8; ++i) {
//       sm[0] = crc32[0];
//       crc32[0] <<= 1;

//       if (c & 0x80) {
//         crc32[0] |= 1;
//       }
//       if (sm[0] & 0x80000000) {
//         crc32[0] ^= 0x4c11db7; //Polynom
//       }
//       c <<= 1;
//     }
//   }

//   return crc32[0];
// }

// console.log(calc_crc32(data, 0xffffffff).toString(16));

// let data = ''
function hex_to_ascii(str1) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

//console.log(hex_to_ascii(data))
