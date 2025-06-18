const sb = supabase;

// DOM Elements
const authModal = document.getElementById('auth-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const authForm = document.getElementById('auth-form');
const modalEmail = document.getElementById('modal-email');
const modalPassword = document.getElementById('modal-password');
const googleLoginBtn = document.getElementById('google-login');

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

  const email = modalEmail?.value?.trim();
  const password = modalPassword?.value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  const submitBtn = authForm.querySelector('button');
  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Logging in...';

  let error;
  let data;

  if (isLogin) {
    ({ error, data } = await supabase.auth.signIn({ email, password }));
  } else {
    ({ error, data } = await supabase.auth.signUp({ email, password }));
    if (!error && data?.user?.email) {
      alert('🎉 Welcome! Please check your email to confirm your account.');
    }
  }

  if (error) {
    alert('Authentication failed: ' + error.message);
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  } else {
    showToast("Welcome back!");

    // Optional: Simulate delay so user sees toast and modal fade
    await new Promise(resolve => setTimeout(resolve, 750));

    authModal.classList.add('hidden');
    await updateHeaderState();

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// Handle Google login
googleLoginBtn?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signIn({ provider: 'google' }); // ✅ v1 method
  if (error) console.error('Google Login error:', error.message);
});

// Handle logout
const mobileLogoutBtn = document.getElementById('mobile-logout-btn');

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    console.log("✅ Logout successful, redirecting...");
    // Give Supabase time to clear local session state
    setTimeout(() => {
      window.location.replace("/");
    }, 100);
  } else {
    alert("Logout failed. Try again.");
  }
};

logoutBtn?.addEventListener('click', handleLogout);
mobileLogoutBtn?.addEventListener('click', handleLogout);


// Update header/account UI
function updateHeaderState() {
  const user = supabase.auth.user(); // ✅ Still valid in v1

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

// Initial state
updateHeaderState();

// Real-time auth changes
supabase.auth.onAuthStateChange(() => {
  updateHeaderState();
});

// Tabs
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

// Click outside to close
window.addEventListener('click', (e) => {
  if (e.target.id === 'auth-modal') {
    authModal.classList.add('hidden');
  }
});

function showToast(message = '', duration = 3000) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-2 rounded shadow-lg z-50';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
