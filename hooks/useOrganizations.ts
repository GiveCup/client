import { useState, useEffect } from "react";
import supabase from "../services/supabase";

const useOrganizations = () => {
  const [orgs, setOrgs] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const { data, error } = await supabase.from("organizations").select("*");

      if (data) {
        setOrgs(data);
        setLoading(false);
      } else {
        setError(error);
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  return { orgs, loading, error };
};

export default useOrganizations;
