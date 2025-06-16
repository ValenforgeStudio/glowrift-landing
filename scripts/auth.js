const supabase = window.supabase.createClient(
  'https://lhvkxmsnkwdcmdetjwkz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxodmt4bXNua3dkY21kZXRqd2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMzk5MzcsImV4cCI6MjA2NTYxNTkzN30.dhXS1_e9ywlqa_JoBsGkN4J4XBfmakOmvROqIezZj8k'
);

const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const gatedContent = document.getElementById('gated');

// Email/password login
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert('Login failed: ' + error.message);
  } else {
    location.reload();
  }
});

// Google login
loginBtn?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
  if (error) console.error('Login error:', error.message);
});

// Logout
logoutBtn?.addEventListener('click', async () => {
  await supabase.auth.signOut();
  location.reload();
});

// Check user
supabase.auth.getUser().then(({ data: { user } }) => {
  if (user) {
    gatedContent?.classList.remove('hidden');
    loginBtn?.classList.add('hidden');
    logoutBtn?.classList.remove('hidden');
    loginForm?.classList.add('hidden');
  } else {
    gatedContent?.classList.add('hidden');
    loginBtn?.classList.remove('hidden');
    logoutBtn?.classList.add('hidden');
    loginForm?.classList.remove('hidden');
  }
});
