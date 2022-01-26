import { payables } from '../../src';
import { expect } from 'chai';

describe('broker payables test', (): void => {
  it('with %', (): void => {
    const actual: number = payables.toBroker({
      onAmount: 100000,
      unit: '%',
      value: 5,
    });
    expect(actual).is.equal(5000);
  });
  it('with INR', (): void => {
    const actual: number = payables.toBroker({
      onAmount: 100000,
      unit: 'INR',
      value: 5000,
    });
    expect(actual).is.equal(5000);
  });
});
