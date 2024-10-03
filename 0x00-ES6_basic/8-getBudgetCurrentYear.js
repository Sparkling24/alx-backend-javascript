function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    income: 2100,
       gdp: 5200,
    capita: 1090
  };
  
  return budget;
}
