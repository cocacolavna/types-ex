'use strict';

const ipToIntLoop = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  let result = 0;
  for (let i = 0; i < bytes.length; i++) {
    let value = bytes[i];
    const shifts = bytes.length - 1 - i; // 3, 2, 1, 0
    for (let j = 0; j < shifts; j++) {
      value = value << 8;
    }
    result += value;
  }
  return result;
};

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').reduce((res, byte) => (res << 8) + parseInt(byte, 10), 0);

const ips = [
  '127.0.0.1',
  '10.0.0.1',
  '192.168.1.10',
  '165.225.133.150',
  '0.0.0.0',
  '8.8.8.8',
];
for (const ip of ips) {
  console.log(ip, '->', ipToInt(ip), '| цикл:', ipToIntLoop(ip));
}
console.log('без аргументу ->', ipToInt());
console.log('0x08080808 =', 0x08080808);
