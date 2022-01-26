import { receivables } from '../../src';
import { expect } from 'chai';

const products = [
  {
    grade: 'TD4',
    bales: 45,
    loadWeight: 2500,
    millWeight: 2400,
    rate: 65,
    claim: 1,
    moisture: 1,
    dust: 1,
  },
  {
    grade: 'TD5',
    bales: 55,
    loadWeight: 3500,
    millWeight: 3400,
    rate: 68,
    claim: 1,
    moisture: 1,
    dust: 0,
  },
];

describe('receivables test', (): void => {
  it('fromMill test with sub adjust', (): void => {
    const actual: number = receivables.fromMill({
      products: products,
      adjustment: -10000,
    });
    expect(actual).is.equal(365968);
  });
  it('fromMill test with add adjust', (): void => {
    const actual: number = receivables.fromMill({
      products: products,
      adjustment: 10000,
    });
    expect(actual).is.equal(385968);
  });
});
