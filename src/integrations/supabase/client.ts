// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kqdastubrdpyrvcjjrjs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZGFzdHVicmRweXJ2Y2pqcmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDg2NDgsImV4cCI6MjA2NDA4NDY0OH0.iZcXMsyVbxfC2D1JkpwWtOsf_SIbv61O48-Msnqf8Rg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);