export const defaultPortfolioTable = [
  { risk: 1, bonds: 80, large: 20, mid: 0, foreign: 0, small: 0 },
  { risk: 2, bonds: 70, large: 15, mid: 15, foreign: 0, small: 0 },
  { risk: 3, bonds: 60, large: 15, mid: 15, foreign: 10, small: 0 },
  { risk: 4, bonds: 50, large: 20, mid: 20, foreign: 10, small: 0 },
  { risk: 5, bonds: 40, large: 20, mid: 20, foreign: 20, small: 0 },
  { risk: 6, bonds: 35, large: 25, mid: 5, foreign: 30, small: 5 },
  { risk: 7, bonds: 20, large: 25, mid: 25, foreign: 25, small: 5 },
  { risk: 8, bonds: 10, large: 20, mid: 40, foreign: 20, small: 10 },
  { risk: 9, bonds: 5, large: 15, mid: 40, foreign: 25, small: 15 },
  { risk: 10, bonds: 0, large: 5, mid: 25, foreign: 30, small: 40 }
];

export const portfolioTableHeader = [
  'Risk', 'Bonds %', 'Large %', 'Mid %', 'Foreign %', 'Small %'
];

export const initialUserPortfolio = [
  { value: '', difference: '', newAmount: '' },
  { value: '', difference: '', newAmount: '' },
  { value: '', difference: '', newAmount: '' },
  { value: '', difference: '', newAmount: '' },
  { value: '', difference: '', newAmount: '' }
]

export const defaultPortfolioTableDetails = [
  {
    'Risk': 1,
    'Bonds': { key: 0, value: 80, label: 'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 20, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 0, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 0, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
 },
 {
    'Risk': 2,
    'Bonds': { key: 0, value: 70, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 15, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 15, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 0, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 3,
    'Bonds': { key: 0, value: 60, label: 'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 15, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 15, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 10, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 4,
    'Bonds': { key: 0, value: 50, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 20, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 20, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 10, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 5,
    'Bonds': { key: 0, value: 40, label: 'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 20, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 20, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 20, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 6,
    'Bonds': { key: 0, value: 35, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 25, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 5, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 30, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 0, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 7,
    'Bonds': { key: 0, value: 20, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 25, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 25, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 25, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 5, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 8,
    'Bonds': { key: 0, value: 10, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 20, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 40, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 20, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 10, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
  {
    'Risk': 9,
    'Bonds': { key: 0, value: 5, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 15, label: 'Large Cap %', svg: { fill: 'skyblue' }  },
    'Mid Cap %': { key: 2, value: 40, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 25, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 15, label: 'Small Cap %', svg: { fill: '#60C36E' }}
  },
  {
    'Risk': 10,
    'Bonds': { key: 0, value: 0, label:  'Bonds %', svg: { fill: '#ce3eab' } },
    'Large Cap %': { key: 1, value: 5, label: 'Large Cap %', svg: { fill: 'skyblue' } },
    'Mid Cap %': { key: 2, value: 25, label: 'Mid Cap %', svg: { fill: 'orange' } },
    'Foreign %': { key: 3, value: 30, label: 'Foreign %', svg: { fill: 'salmon' } },
    'Small Cap %': { key: 4, value: 40, label: 'Small Cap %', svg: { fill: '#60C36E' } }
  },
];
