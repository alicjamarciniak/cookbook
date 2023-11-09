import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const params = useSearchParams();
  const paramsArray = new Map<string, string>();

  for (
    let it = params.entries(), entry = it.next();
    !entry.done;
    entry = it.next()
  ) {
    const [key, value] = entry.value;
    paramsArray.set(key, value);
  }

  const addParam = (path: string, paramKey: string, value: string) => {
    paramsArray.set(paramKey, value);
    let query = "";
    paramsArray.forEach((value, key) => {
      query = query.concat(`${key}=${value}&`);
    });

    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }

    return `/${path}?${query}`;
  };

  const removeParam = (path: string, paramKey: string) => {
    paramsArray.delete(paramKey);
    let query = "";
    paramsArray.forEach((value, key) => {
      query = query.concat(`${key}=${value}&`);
    });

    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }

    return `/${path}?${query}`;
  };

  return { addParam, removeParam };
};

export default useQueryParams;
