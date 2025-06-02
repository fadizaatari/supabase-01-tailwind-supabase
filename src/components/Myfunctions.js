import { useState, useEffect } from "react";

import { supabase } from "../supabaseClient";

export const useSupabaseData = (tableName, fieldid1, id1, field2, id2 = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let query = supabase.from(tableName).select("*").eq(fieldid1, id1);
        if (id2 !== 0) {
          query = query.eq(field2, id2);
        }

        const { data: fetchedData, error: fetchError, count } = await query;
        if (fetchError) {
          setError(fetchError);
        } else {
          setData(fetchedData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tableName]); // Re-fetch data if the tableName changes

  return { data, loading, error };
};

export const SubscriptionStatus = (status) => {
  let statusClasses = "";
  switch (status) {
    case "paid":
      statusClasses = "bg-green-300";
      break;
    case "unpaid":
      statusClasses = "bg-red-300";
      break;
    case "stopped":
      statusClasses = "bg-orange-300";
      break;
    default:
  }
  return statusClasses;
};
