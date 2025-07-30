import { createClient } from "@supabase/supabase-js";


const supabaseURL = "https://lwoxdpqotgjpabnomole.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3b3hkcHFvdGdqcGFibm9tb2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODMwMzUsImV4cCI6MjA2ODc1OTAzNX0.CAz-FJP2VgOP75zFjgmdZO2DkwaTVU1LZpXlw8LOMAA"; 

export const supabase = createClient(supabaseURL,supabaseKey); 

// export default supabase;