import type { Listing } from '@/types/listings';

export const listings: Listing[] = [
  {
    id: '1',
    title: "Licensed Green-House",
    description: "Cannabis Green House with Land",
    backgroundImage: "/images/service1.jpg",
    gallery: [
      "/images/service1.jpg",
      "/images/slider1.jpg",
      "/images/slider2.jpg",
      "/images/slider3.jpg",
      "/images/service2.jpg"
    ],
    price: "$11,999,000",
    location: "Monterey County, California",
    type: "Commercial",
    status: "ACTIVE",
    propertyDetails: {
      yearBuilt: "2015",
      numFloors: "1",
      totalSpace: "50,000 sq ft",
      buildingClass: "A",
      lotSize: "100,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$11,999,000",
      grossIncomeMonthly: "$500,000",
      monthlyCashFlow: "$166,666",
      cashOnCashReturn: "11.11%"
    },
    income: {
      grossOperatingIncome: "$6,000,000",
      netOperatingIncome: "$2,000,000",
      capRate: "11.11%"
    },
    details: {
      lotSize: "100,000 sq ft",
      buildArea: "50,000 sq ft",
      downPayment: "$7,799,350"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  },
  {
    id: '2',
    title: "Industrial Cannabis Facility",
    description: "State-of-the-art cannabis cultivation facility",
    backgroundImage: "/images/service2.jpg",
    gallery: [
      "/images/service2.jpg",
      "/images/slider2.jpg",
      "/images/slider3.jpg",
      "/images/service3.jpg",
      "/images/slider1.jpg"
    ],
    price: "$5,200,000",
    location: "Los Angeles County, California",
    type: "Industrial",
    status: "ACTIVE",
    propertyDetails: {
      yearBuilt: "2018",
      numFloors: "1",
      totalSpace: "20,000 sq ft",
      buildingClass: "B",
      lotSize: "25,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$5,200,000",
      grossIncomeMonthly: "$200,000",
      monthlyCashFlow: "$50,000",
      cashOnCashReturn: "11.5%"
    },
    income: {
      grossOperatingIncome: "$800,000/yr",
      netOperatingIncome: "$600,000/yr",
      capRate: "11.5%"
    },
    details: {
      lotSize: "25,000 sq ft",
      buildArea: "20,000 sq ft",
      downPayment: "$1,040,000"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  },
  {
    id: '3',
    title: "Modern Cannabis Dispensary",
    description: "Prime location retail dispensary",
    backgroundImage: "/images/service3.jpg",
    gallery: [
      "/images/service3.jpg",
      "/images/slider3.jpg",
      "/images/slider1.jpg",
      "/images/service1.jpg",
      "/images/slider2.jpg"
    ],
    price: "$3,500,000",
    location: "San Francisco, California",
    type: "Retail",
    status: "PENDING",
    propertyDetails: {
      yearBuilt: "2020",
      numFloors: "1",
      totalSpace: "3,500 sq ft",
      buildingClass: "A",
      lotSize: "5,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$3,500,000",
      grossIncomeMonthly: "$100,000",
      monthlyCashFlow: "$25,000",
      cashOnCashReturn: "12.5%"
    },
    income: {
      grossOperatingIncome: "$1,200,000/yr",
      netOperatingIncome: "$900,000/yr",
      capRate: "12.5%"
    },
    details: {
      lotSize: "5,000 sq ft",
      buildArea: "3,500 sq ft",
      downPayment: "$700,000"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  },
  {
    id: '4',
    title: "Cannabis Office Complex",
    description: "Modern office space for cannabis businesses",
    backgroundImage: "/images/slider1.jpg",
    gallery: [
      "/images/slider1.jpg",
      "/images/service1.jpg",
      "/images/service2.jpg",
      "/images/service3.jpg",
      "/images/slider3.jpg"
    ],
    price: "$8,750,000",
    location: "San Diego, California",
    type: "Office",
    status: "ACTIVE",
    propertyDetails: {
      yearBuilt: "2019",
      numFloors: "2",
      totalSpace: "35,000 sq ft",
      buildingClass: "A",
      lotSize: "40,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$8,750,000",
      grossIncomeMonthly: "$150,000",
      monthlyCashFlow: "$50,000",
      cashOnCashReturn: "13.7%"
    },
    income: {
      grossOperatingIncome: "$1,500,000/yr",
      netOperatingIncome: "$1,200,000/yr",
      capRate: "13.7%"
    },
    details: {
      lotSize: "40,000 sq ft",
      buildArea: "35,000 sq ft",
      downPayment: "$1,750,000"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  },
  {    id: '5',
    title: "Distribution Warehouse",
    description: "Strategic location cannabis distribution center",
    backgroundImage: "/images/slider2.jpg",
    gallery: [
      "/images/slider2.jpg",
      "/images/service2.jpg",
      "/images/service3.jpg",
      "/images/slider1.jpg",
      "/images/slider3.jpg"
    ],
    price: "$6,900,000",
    location: "Sacramento, California",
    type: "Industrial",
    status: "ACTIVE",
    propertyDetails: {
      yearBuilt: "2017",
      numFloors: "1",
      totalSpace: "45,000 sq ft",
      buildingClass: "B",
      lotSize: "60,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$6,900,000",
      grossIncomeMonthly: "$80,000",
      monthlyCashFlow: "$20,000",
      cashOnCashReturn: "10.9%"
    },
    income: {
      grossOperatingIncome: "$950,000/yr",
      netOperatingIncome: "$750,000/yr",
      capRate: "10.9%"
    },
    details: {
      lotSize: "60,000 sq ft",
      buildArea: "45,000 sq ft",
      downPayment: "$1,380,000"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  },
  {    id: '6',
    title: "Mixed-Use Cannabis Complex",
    description: "Retail and cultivation facility",
    backgroundImage: "/images/slider3.jpg",
    gallery: [
      "/images/slider3.jpg",
      "/images/service3.jpg",
      "/images/service1.jpg",
      "/images/slider1.jpg",
      "/images/slider2.jpg"
    ],
    price: "$15,500,000",
    location: "Oakland, California",
    type: "Commercial",
    status: "ACTIVE",
    propertyDetails: {
      yearBuilt: "2021",
      numFloors: "3",
      totalSpace: "90,000 sq ft",
      buildingClass: "A",
      lotSize: "120,000 sq ft"
    },
    financialMetrics: {
      purchasePrice: "$15,500,000",
      grossIncomeMonthly: "$250,000",
      monthlyCashFlow: "$83,333",
      cashOnCashReturn: "14.2%"
    },
    income: {
      grossOperatingIncome: "$2,800,000/yr",
      netOperatingIncome: "$2,200,000/yr",
      capRate: "14.2%"
    },
    details: {
      lotSize: "120,000 sq ft",
      buildArea: "90,000 sq ft",
      downPayment: "$3,100,000"
    },
    broker: {
      name: "Al Rana",
      title: "Broker",
      calBre: "01724170",
      avatar: "/images/slide3.jpg"
    }
  }
];

export const categories = ["All", "Commercial", "Industrial", "Retail", "Office"];
