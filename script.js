function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
    function openLogin() {
        document.getElementById("login-modal").style.display = "flex";
        document.getElementById("signup-modal").style.display = "none";
    }

    function closeLogin() {
        document.getElementById("login-modal").style.display = "none";
    }

    function openSignup() {
        document.getElementById("signup-modal").style.display = "flex";
        document.getElementById("login-modal").style.display = "none";
    }

    function closeSignup() {
        document.getElementById("signup-modal").style.display = "none";
    }

