export interface Listing {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  gallery: string[];
  price: string;
  location: string;
  type: string;
  status: string;
  propertyDetails: {
    yearBuilt: string;
    numFloors: string;
    totalSpace: string;
    buildingClass: string;
    lotSize: string;
  };
  financialMetrics: {
    purchasePrice: string;
    grossIncomeMonthly: string;
    monthlyCashFlow: string;
    cashOnCashReturn: string;
  };
  income: {
    grossOperatingIncome: string;
    netOperatingIncome: string;
    capRate: string;
  };
  details: {
    lotSize: string;
    buildArea: string;
    downPayment: string;
  };
  broker: {
    name: string;
    title: string;
    calBre: string;
    avatar: string;
  };
}