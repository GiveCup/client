import { useState, useEffect } from "react";
import supabase from "../services/supabase";

const useOrganization = (id: number) => {
  const [orgData, setOrgData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const { data, error } = await supabase
          .from("organizations")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setOrgData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [id]);

  return { orgData, loading, error };
};

export default useOrganization;
