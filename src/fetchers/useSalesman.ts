import { Salesman } from "../requests/responses";
// @ts-ignore
import { useRequest } from "@dr.cash/requesting";
import { getSalesman } from "../requests";

function useSalesman(id: number): Salesman | Error | null {
  const [result, error] = useRequest(getSalesman, id);
  if (result) return result;
  if (error) return error;
  return null;
}

export default useSalesman;
