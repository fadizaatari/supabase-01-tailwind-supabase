export const calculateArea = (width, height) => {
  if (typeof width !== "number" || typeof height !== "number") {
    return NaN; // Not a Number
  }
  if (width < 0 || height < 0) {
    return NaN;
  }
  const area = width * height;
  return area;
};

export const reverseString = (str) => {
  if (typeof str !== "string") {
    return null;
  }
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
};

export const countVowels = (str) => {
  // Check if the input is a string
  if (typeof str !== "string") {
    return null;
  }

  // Handle empty string case
  if (str === "") {
    return 0;
  }
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  const lowerStr = str.toLowerCase();
  // Define a string containing all vowels
  const vowels = "aeiou";
  let count = 0;

  // Iterate over each character in the string
  for (let i = 0; i < lowerStr.length; i++) {
    // Check if the current character is a vowel
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }
  return count;
};

import { useState, useEffect } from "react";

import { supabase } from "../supabaseClient";

export const useSupabaseData = (tableName, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: fetchedData, error: fetchError } = await supabase
          .from(tableName)
          .select("*")
          .eq("id", id);

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
