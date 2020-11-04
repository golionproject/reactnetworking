interface Salesman {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
}

interface Salespeople {
  results: Array<Salesman>;
  total: number;
}

export default Salespeople;
