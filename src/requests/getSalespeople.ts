import { Salespeople } from "./responses";

const results = [
  {
    id: 1,
    email: "joao@gmail.com",
    name: "João Silva",
    createdAt: new Date()
  },
  {
    id: 2,
    email: "maria@gmail.com",
    name: "Maria Martins",
    createdAt: new Date()
  },
  {
    id: 3,
    email: "pedro@gmail.com",
    name: "Pedro Santiago",
    createdAt: new Date()
  }
];

async function getSalespeople(
  // @ts-ignore
  pageNumber: number,
  // @ts-ignore
  pageSize: number,
  // @ts-ignore
  orderBy: "email" | "name" | "createdAt",
  // @ts-ignore
  searchTerm: "string" | undefined
): Promise<Salespeople> {
  return Promise.resolve({
    results,
    total: 3
  });
}

export default getSalespeople;
