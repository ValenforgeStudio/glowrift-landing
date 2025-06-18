document.addEventListener("DOMContentLoaded", async () => {
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    document.getElementById("login-btn")?.classList.add("hidden");
    document.getElementById("mobile-login-btn")?.classList.add("hidden");

    document.getElementById("account-btn")?.classList.remove("hidden");
    document.getElementById("logout-btn")?.classList.remove("hidden");
    document.getElementById("mobile-account-link")?.classList.remove("hidden");
    document.getElementById("mobile-logout-btn")?.classList.remove("hidden");
  }
});

async function handleLogout() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.href = "/";
  } else {
    alert("Logout failed. Try again.");
  }
}
