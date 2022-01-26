interface IIndividualProduct {
  grade: string;
  bales: number;
  loadWeight: number;
  millWeight: number;
  rate: number;
  claim: number;
  moisture: number;
  dust: number;
}

export type IAllProducts = IIndividualProduct[];

const individualAmount = (product: IIndividualProduct) => {
  let individualLoadAmount = product.loadWeight * product.rate;
  let individualMillAmount = product.millWeight * product.rate;
  let individualClaimCost = product.claim * product.millWeight;
  let individualMoistureCost = (product.moisture / 100) * individualMillAmount;
  let individualDustCost = (product.dust / 100) * individualMillAmount;

  return {
    individualLoadAmount: individualLoadAmount,
    individualMillAmount: individualMillAmount,
    individualClaimCost: individualClaimCost,
    individualMoistureCost: individualMoistureCost,
    individualDustCost: individualDustCost,
  };
};

const totalAmount = (products: IAllProducts) => {
  let totalLoadAmount = 0;
  let totalMillAmount = 0;
  let totalClaimCost = 0;
  let totalMoistureCost = 0;
  let totalDustCost = 0;

  products.map((prod) => {
    totalLoadAmount += individualAmount(prod).individualLoadAmount;
    totalMillAmount += individualAmount(prod).individualMillAmount;
    totalClaimCost += individualAmount(prod)?.individualClaimCost;
    totalMoistureCost += individualAmount(prod).individualMoistureCost;
    totalDustCost += individualAmount(prod).individualDustCost;
    return;
  });

  return {
    totalLoadAmount: totalLoadAmount,
    totalMillAmount: totalMillAmount,
    totalClaimCost: totalClaimCost,
    totalMoistureCost: totalMoistureCost,
    totalDustCost: totalDustCost,
  };
};

const totalMoisture = (products: IAllProducts) => {
  let value = 0;

  products.map((prod) => {
    value += individualAmount(prod)?.individualMoistureCost;
    return;
  });

  return value;
};

const totalDust = (products: IAllProducts) => {
  let value = 0;

  products.map((prod) => {
    value += individualAmount(prod)?.individualDustCost;
    return;
  });

  return value;
};

const totalLoadAmount = (products: IAllProducts) => {
  let value = 0;

  products.map((prod) => {
    value += individualAmount(prod)?.individualLoadAmount;
    return;
  });

  return value;
};

const totalMillAmount = (products: IAllProducts) => {
  let value = 0;

  products.map((prod) => {
    value += individualAmount(prod)?.individualMillAmount;
    return;
  });

  return value;
};

const totalClaim = (products: IAllProducts) => {
  let value = 0;

  products.map((prod) => {
    value += individualAmount(prod)?.individualClaimCost;
    return;
  });

  return value;
};

export const sellProduct = {
  individualAmount,
  totalAmount,
  totalLoadAmount,
  totalMillAmount,
  totalClaim,
  totalMoisture,
  totalDust,
};
