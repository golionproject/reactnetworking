import Statements from "./responses/Statements";

const results = [
  {
    id: 1,
    previousBalance: 10,
    currentBalance: 9,
    device: "Galaxy One",
    cpf: "123.456.789-10",
    createdAt: new Date()
  },
  {
    id: 2,
    previousBalance: 5,
    currentBalance: 4,
    device: "iPhone",
    cpf: "456.789.123.-10",
    createdAt: new Date()
  }
];

async function getStatementBySalesman(
  // @ts-ignore
  id: number,
  // @ts-ignore
  pageNumber: number,
  // @ts-ignore
  pageSize: number
): Promise<Statements> {
  return Promise.resolve({
    results,
    total: 2
  });
}

export default getStatementBySalesman;
