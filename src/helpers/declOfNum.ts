export const declOfNum = (count: number, titles: string[]) => {
  if (count < 0) {
    throw new Error("Incorrect value");
  }

  const cases = [2, 0, 1, 1, 1, 2];

  return titles[(count % 100 > 4 && count % 100 < 20)? 2 : cases[(count % 10 < 5) ? count % 10 :5]];  
};
