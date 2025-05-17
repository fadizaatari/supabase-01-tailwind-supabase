import { data } from "react-router-dom";
import { supabase } from "../supabaseClient";

export function readDatahaha() {
  const tableName = "profiles";
  const recordIdToRead = "4a644683-63ec-496b-af61-a6871c000790";

  try {
    const { data, error: fetchError } = supabase
      .from(tableName)
      .select("*")
      .eq("id", recordIdToRead)
      .single();

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    if (data) {
    } else {
      return 500;
    }
  } catch (err) {
    return 1000;
  } finally {
    return 20001;
  }
}

export function readData2() {
  return 123;
}
