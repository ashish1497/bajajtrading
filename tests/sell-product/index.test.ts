import { sellProduct } from '../../src';
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

describe('sell product tests', (): void => {
  it('individual amount', (): void => {
    const actual = sellProduct.individualAmount(products[0]);
    expect(actual.individualLoadAmount).is.equal(162500);
    expect(actual.individualMillAmount).is.equal(156000);
    expect(actual.individualClaimCost).is.equal(2400);
    expect(actual.individualMoistureCost).is.equal(1560);
    expect(actual.individualDustCost).is.equal(1560);
  });
  it('total amount', (): void => {
    const actual = sellProduct.totalAmount(products);
    expect(actual.totalLoadAmount).is.equal(400500);
    expect(actual.totalMillAmount).is.equal(387200);
    expect(actual.totalClaimCost).is.equal(5800);
    expect(actual.totalMoistureCost).is.equal(3872);
    expect(actual.totalDustCost).is.equal(1560);
  });
  it('total moisture', (): void => {
    const actual = sellProduct.totalMoisture(products);
    expect(actual).is.equal(3872);
  });
  it('total dust', (): void => {
    const actual = sellProduct.totalDust(products);
    expect(actual).is.equal(1560);
  });
  it('total load amount', (): void => {
    const actual = sellProduct.totalLoadAmount(products);
    expect(actual).is.equal(400500);
  });
  it('total mill amount', (): void => {
    const actual = sellProduct.totalMillAmount(products);
    expect(actual).is.equal(387200);
  });
  it('total claim', (): void => {
    const actual = sellProduct.totalClaim(products);
    expect(actual).is.equal(5800);
  });
});
