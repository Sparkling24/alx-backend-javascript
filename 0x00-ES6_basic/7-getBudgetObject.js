export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
getBudgetObject(400, 700, 900);
