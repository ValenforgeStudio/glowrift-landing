document.addEventListener("DOMContentLoaded", () => {
  const user = supabase.auth.user(); // ✅ v1 method
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
  const { error } = await supabase.auth.signOut(); // ✅ same in v1
  if (!error) {
    window.location.href = "/";
  } else {
    alert("Logout failed. Try again.");
  }
}
