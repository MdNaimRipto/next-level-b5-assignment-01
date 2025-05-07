function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let concatenateArray: T[] = [];
  arrays.forEach((array) => {
    concatenateArray.push(...array);
  });
  return concatenateArray;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  const result = typeof value === "string" ? value.length : value * 2;
  return result;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products.length) {
    return null;
  }

  const highestPricedProduct = products.reduce(
    (accumulatedProduct, currentProduct) => {
      return accumulatedProduct.price < currentProduct.price
        ? currentProduct
        : accumulatedProduct;
    }
  );
  return highestPricedProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  const result = day === Day.Sunday ? "Weekend" : "Weekday";
  return result;
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  const returnAfterDelay = (duration: number) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  await returnAfterDelay(1000);

  const squiredValue = n * n;

  return squiredValue;
}
