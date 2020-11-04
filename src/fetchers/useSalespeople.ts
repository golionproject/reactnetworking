import { Salespeople } from "../requests/responses";
// @ts-ignore
import { useRequest } from "@dr.cash/requesting";
import getSalespeople from "../requests/getSalespeople";

function useSalespeople(
  // @ts-ignore
  pageNumber: number,
  // @ts-ignore
  pageSize: number,
  // @ts-ignore
  orderBy: "email" | "name" | "createdAt",
  // @ts-ignore
  searchTerm: "string" | undefined
): Salespeople | Error | null {
  const [result, error] = useRequest(
    getSalespeople,
    pageNumber,
    pageSize,
    orderBy,
    searchTerm
  );
  if (result) return result;
  if (error) return error;
  return null;
}

export default useSalespeople;
