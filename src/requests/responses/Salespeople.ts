interface Salespeople {
  results: Array<{ id: number; email: string; name: string; createdAt: Date }>;
  total: number;
}

export default Salespeople;
