// @ts-ignore
import { useRequest } from "@dr.cash/requesting";
import { putBalanceBySalesman } from "../requests";

function usePutBalanceSalespeople(balance: number): void | Error | null {
  const [result, error] = useRequest(putBalanceBySalesman, balance);
  if (result) return result;
  if (error) return error;
  return null;
}

export default usePutBalanceSalespeople;
