// @ts-ignore
import { useRequest } from "@dr.cash/requesting";
import { getStatementBySalesman } from "../requests";
import Statements from "../requests/responses/Statements";

function useStatementBySalesman(
  id: number,
  pageNumber: number,
  pageSize: number
): Statements | Error | null {
  const [result, error] = useRequest(
    getStatementBySalesman,
    id,
    pageNumber,
    pageSize
  );
  if (result) return result;
  if (error) return error;
  return null;
}

export default useStatementBySalesman;
