import { useState, useEffect } from "react";
import supabase from "../services/supabase";

const useAllAccessories = () => {
  const [accessories, setAllAccessories] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      const { data, error } = await supabase.from("accessories").select("*");

      if (data) {
        setAllAccessories(data);
        setLoading(false);
      } else {
        setError(error);
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  return { accessories, loading, error };
};

export default useAllAccessories;
