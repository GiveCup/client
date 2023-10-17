import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto'

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default supabase;
