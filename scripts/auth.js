const supabase = window.supabase.createClient(
  window.__GLOWRIFT_ENV__.SUPABASE_URL,
  window.__GLOWRIFT_ENV__.SUPABASE_ANON_KEY
);

// DOM Elements
const authModal = document.getElementById('auth-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const authForm = document.getElementById('auth-form');
const modalEmail = document.getElementById('modal-email');
const modalPassword = document.getElementById('modal-password');
const googleLoginBtn = document.getElementById('google-login');

// Optional: For showing/hiding UI based on auth state
const loginBtnHeader = document.querySelector('[data-auth-trigger]');
const accountBtn = document.getElementById('account-btn');
const logoutBtn = document.getElementById('logout-btn');
const gatedContent = document.getElementById('gated');

let isLogin = true;

// Show modal
document.querySelectorAll('[data-auth-trigger]').forEach(btn =>
  btn.addEventListener('click', () => {
    isLogin = true;
    modalTitle.textContent = 'Login to Glowrift';
    authForm.querySelector('button').textContent = "Login";
    authModal.classList.remove('hidden');
  })
);

// Close modal
closeModal?.addEventListener('click', () => {
  authModal.classList.add('hidden');
});

// Handle email/password form submission
authForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = modalEmail?.value;
  const password = modalPassword?.value;

  const { error } = isLogin
    ? await supabase.auth.signInWithPassword({ email, password })
    : await supabase.auth.signUp({ email, password });

  if (error) {
    alert('Authentication failed: ' + error.message);
  } else {
    location.reload();
  }
});

// Handle Google login
googleLoginBtn?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
  if (error) console.error('Google Login error:', error.message);
});

// Handle logout
logoutBtn?.addEventListener('click', async () => {
  await supabase.auth.signOut();
  location.reload();
});

// Update header/account UI based on auth status
async function updateHeaderState() {
  const { data: { user } } = await supabase.auth.getUser();

  const show = (el) => el?.classList.remove('hidden');
  const hide = (el) => el?.classList.add('hidden');

  if (user) {
    hide(loginBtnHeader);
    show(accountBtn);
    show(logoutBtn);
    hide(authForm);
    show(gatedContent);
  } else {
    show(loginBtnHeader);
    hide(accountBtn);
    hide(logoutBtn);
    show(authForm);
    hide(gatedContent);
  }
}

// Initial load check
updateHeaderState();

// Watch for real-time changes (login/signup from other tabs/popups)
supabase.auth.onAuthStateChange(() => {
  updateHeaderState();
});

// Tab switching logic
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');

tabLogin?.addEventListener('click', () => {
  isLogin = true;
  modalTitle.textContent = 'Login to Glowrift';
  authForm.querySelector('button').textContent = 'Login';

  tabLogin.classList.add('text-orange-500', 'border-b-2', 'border-orange-500');
  tabSignup.classList.remove('text-orange-500', 'border-b-2', 'border-orange-500');
  tabSignup.classList.add('text-gray-500', 'dark:text-gray-400');
});

tabSignup?.addEventListener('click', () => {
  isLogin = false;
  modalTitle.textContent = 'Create your account';
  authForm.querySelector('button').textContent = 'Sign Up';

  tabSignup.classList.add('text-orange-500', 'border-b-2', 'border-orange-500');
  tabLogin.classList.remove('text-orange-500', 'border-b-2', 'border-orange-500');
  tabLogin.classList.add('text-gray-500', 'dark:text-gray-400');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.id === 'auth-modal') {
    authModal.classList.add('hidden');
  }
});
