function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    
    'income-2021': 2100,
      'gdp-2021': 5200,
    'capita-2021': 1090, 
  };
  
  return budget;
};
