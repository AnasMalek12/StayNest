document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function () {
    if (!form.checkValidity()) return;

    const overlay = document.getElementById("loadingOverlay");

    if (overlay) {
      overlay.style.display = "flex";
    }

    const btn = form.querySelector("button[type='submit']");

    if (btn) {
      btn.disabled = true;

      if (btn.textContent.includes("Login")) {
        btn.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';
      } else {
        btn.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';
      }
    }
  });
});
