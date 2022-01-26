import { IAllProducts, sellProduct } from '../sell-product';

interface MillReceivableOptions {
  products: IAllProducts;
  adjustment?: number;
}

const fromMill = (options: MillReceivableOptions) => {
  const { products } = options;

  const { totalMillAmount, totalClaimCost, totalDustCost, totalMoistureCost } =
    sellProduct.totalAmount(products);

  let adjust = options.adjustment || 0;

  let value =
    totalMillAmount -
    totalClaimCost -
    totalDustCost -
    totalMoistureCost +
    adjust;

  return value;
};

export const receivables = {
  fromMill,
};
