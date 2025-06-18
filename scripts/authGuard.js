import { supabase } from './supabaseClient.js';

export async function requireAuth(redirectPath = '/') {
  console.log("🔐 Running requireAuth...");
  const { data: { session } } = await supabase.auth.getSession();
  console.log("🔍 Session result:", session);
  if (!session) {
    console.log("🚫 No session — redirecting...");
    window.location.href = redirectPath;
  }
}
