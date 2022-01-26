interface BrokerCostOptions {
  onAmount: number;
  value: number;
  unit: 'INR' | '%';
}

const toBroker = (options: BrokerCostOptions) => {
  if (options.unit === 'INR') {
    return options.value;
  } else if (options.unit === '%') {
    let value = (options.value / 100) * options.onAmount;
    return value;
  } else {
    return 0;
  }
};

export const payables = {
  toBroker,
};
