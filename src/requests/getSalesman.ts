import { Salesman } from "./responses";

const joao = {
  id: 1,
  email: "joao@gmail.com",
  name: "João Silva",
  balance: 10,
  createdAt: new Date()
};

// @ts-ignore
async function getSalesman(id: number): Promise<Salesman> {
  return Promise.resolve(joao);
}

export default getSalesman;
