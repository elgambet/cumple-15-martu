import {
  fetchDataFromGoogleAppsScript,
  updateGoogleSpreadsheet,
} from "@/lib/api";
import { useCallback, useEffect, useState } from "react";

function useData() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function init() {
      const response = await fetchDataFromGoogleAppsScript();
      setData(response);
      setLoading(false);
    }

    init();
  }, []);

  const save = useCallback(async (data: Post[]) => {
    setLoading(true);
    const res = await updateGoogleSpreadsheet(data);
    if (!res) {
      setError(true);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  }, []);

  return { loading, success, error, data, save, setSuccess };
}

export default useData;
