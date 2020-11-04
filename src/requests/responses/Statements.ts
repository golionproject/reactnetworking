interface Statement {
  id: number;
  previousBalance: number;
  currentBalance: number;
  device: string;
  cpf: string;
  createdAt: Date;
}

interface Statements {
  results: Array<Statement>;
  total: number;
}

export default Statements;
