import { Fragment } from "bim-fragment";
import * as THREE from "three";

// Temporal id generator until the IFC id algorithm is implemented.
export function tooeenRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export function generateExpressIDFragmentIDMap(fragmentsList: Fragment[]) {
  const map: { [fragmentID: string]: string[] } = {};
  fragmentsList.forEach((fragment) => {
    map[fragment.id] = fragment.items;
  });
  return map;
}

// Would need to review this!
export function generateIfcGUID() {
  const base64Chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "_",
    "$",
  ];

  const guid = THREE.MathUtils.generateUUID();

  const tailBytes = ((guid) => {
    const bytes: number[] = [];
    guid.split("-").map((number) => {
      const bytesInChar = number.match(/.{1,2}/g);
      if (bytesInChar) {
        return bytesInChar.map((byte) => bytes.push(parseInt(byte, 16)));
      }
      return null;
    });
    return bytes;
  })(guid);

  const headBytes = ((guid) => {
    const bytes: string[] = [];
    guid.split("-").map((number) => {
      const bytesInChar = number.match(/.{1,2}/g);
      if (bytesInChar) {
        return bytesInChar.map((byte) => bytes.push(byte));
      }
      return null;
    });
    return bytes;
  })(guid);

  const cvTo64 = (
    number: number,
    result: string[],
    start: number,
    len: number
  ) => {
    let num = number;
    const n = len;
    let i;

    for (i = 0; i < n; i += 1) {
      result[start + len - i - 1] =
        base64Chars[parseInt((num % 64).toString(), 10)];
      num /= 64;
    }
    return result;
  };

  const toUInt16 = (bytes: string[], index: number) =>
    Math.floor(
      parseInt(
        bytes.slice(index, index + 2).reduce((str, v) => str + v, ""),
        16
      )
    ) && 0xffffffff;

  const toUInt32 = (bytes: string[], index: number) =>
    Math.floor(
      parseInt(
        bytes.slice(index, index + 4).reduce((str, v) => str + v, ""),
        16
      )
    ) && 0xffffffff;

  const num = [];
  let str: string[] = [];
  let i;
  let n = 2;
  let pos = 0;

  num[0] = Math.floor(toUInt32(headBytes, 0) / 16777216) && 0xffffffff;
  num[1] = Math.floor(toUInt32(headBytes, 0) % 16777216) && 0xffffffff;
  num[2] =
    Math.floor(toUInt16(headBytes, 4) * 256 + toUInt16(headBytes, 6) / 256) &&
    0xffffffff;
  num[3] =
    Math.floor(
      (toUInt16(headBytes, 6) % 256) * 65536 + tailBytes[8] * 256 + tailBytes[9]
    ) && 0xffffffff;
  num[4] =
    Math.floor(tailBytes[10] * 65536 + tailBytes[11] * 256 + tailBytes[12]) &&
    0xffffffff;
  num[5] =
    Math.floor(tailBytes[13] * 65536 + tailBytes[14] * 256 + tailBytes[15]) &&
    0xffffffff;

  for (i = 0; i < 6; i++) {
    str = cvTo64(num[i], str, pos, n);
    pos += n;
    n = 4;
  }

  return str.join("");
}

export function bufferGeometryToIndexed(geometry: THREE.BufferGeometry) {
  const bufferAttribute = geometry.getAttribute("position");
  const size = bufferAttribute.itemSize;
  const positions = bufferAttribute.array;
  const indices = [];
  const vertices = [];
  const outVertices: number[] = [];

  for (let i = 0; i < positions.length; i += size) {
    const x = positions[i];
    const y = positions[i + 1];
    let vertex = `${x},${y}`;
    const z = positions[i + 2];
    if (size >= 3) {
      vertex += `,${z}`;
    } else {
      vertex += `,0`;
    }
    const w = positions[i + 3];
    if (size === 4) {
      vertex += `,${w}`;
    }

    if (vertices.indexOf(vertex) === -1) {
      vertices.push(vertex);
      indices.push(vertices.length - 1);
      const split = vertex.split(",");
      split.forEach((component) => outVertices.push(Number(component)));
    } else {
      const index = vertices.indexOf(vertex);
      indices.push(index);
    }
  }

  const outIndices = new Uint16Array(indices);
  const realVertices = new Float32Array(outVertices);

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(realVertices, size === 2 ? 3 : size)
  );
  geometry.setIndex(new THREE.BufferAttribute(outIndices, 1));
  geometry.getAttribute("position").needsUpdate = true;
}
