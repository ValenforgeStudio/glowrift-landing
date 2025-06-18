window.__GLOWRIFT_ENV__ = {
  SUPABASE_URL: "https://lhvkxmsnkwdcmdetjwkz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxodmt4bXNua3dkY21kZXRqd2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMTE4ODMsImV4cCI6MjA2NTY4Nzg4M30.rBVPSies2BOkcEbqWr374pibG-Cwp2rIO7OwtYWV78Y"
};

const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.__GLOWRIFT_ENV__;

// Supabase v1.x exposes supabase directly
if (window.supabase?.createClient) {
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log("✅ Supabase initialized via v1.x");
} else {
  console.error("❌ Supabase v1.x UMD library failed to load");
}