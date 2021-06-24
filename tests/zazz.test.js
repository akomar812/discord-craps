'use strict';
const zazz = require('../zazz.js');

test('zazz matches only on expected words', () => {
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

  shouldFail.map(m => zazz.up(m, obj.sendFn));
  expect(spy).toHaveBeenCalledTimes(0);

  const shouldPass = [
    'djpwaojdwbill',
    'djpwaojdwBill',
    'idk my bff bill',
    'Andrew'
  ];

  shouldPass.map(m => zazz.up(m, obj.sendFn));
  expect(spy).toHaveBeenCalledTimes(shouldPass.length);

  spy.mockRestore();
});