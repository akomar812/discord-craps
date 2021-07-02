'use strict';
jest.mock('node-fetch');
const fetch = require('node-fetch');
const zazz = require('../zazz.js');

test('zazz shouldn\'t match on unexpected words', () => {
  const obj = { sendFn: () => {} };
  const spy = jest.spyOn(obj, 'sendFn').mockImplementation();

  const shouldFail = [
    '!join',
    '!exit',
    '!roll',
    '!bet something 100',
    '! join',
    '! exit',
    '! roll',
    '! bet something 100',
    'apodjwdop',
    'just zazz it up',
    'djpwaojdBwill',
  ];

  Promise.all(shouldFail.map(async m => await zazz.up({}, m, obj.sendFn)))
    .then(() => {
      expect(spy).toHaveBeenCalledTimes(0);
      spy.mockRestore();
    });
});

test('zazz matches only on expected words', () => {
  const obj = { sendFn: () => {} };
  const spy = jest.spyOn(obj, 'sendFn').mockImplementation();
  fetch.mockReturnValue({ json: () => Promise.resolve({ results: [{url:'woohoo'}] }) });

  const shouldPass = [
    'djpwaojdwbill',
    'djpwaojdwBill',
    'idk my bff bill',
    'Andrew',
    'doge',
    'doyge'
  ];

  return Promise.all(shouldPass.map(m => zazz.up({}, m, obj.sendFn)))
    .then((res) => {
      const fetchCount = res.reduce((t, m) => t + m.reduce((s, msg) => s + (msg === 'woohoo' ? 1 : 0), 0), 0);
      expect(fetch).toHaveBeenCalledTimes(fetchCount);
      expect(spy).toHaveBeenCalledTimes(shouldPass.length);
      spy.mockRestore();
    });
});
