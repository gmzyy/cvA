/* ============================================================
   DARK MODE con memoria
============================================================ */
const toggleDark = document.getElementById("darkSwitch");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    toggleDark.checked = true;
}

document.body.style.transition = "background 0.4s ease, color 0.4s ease";

toggleDark.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
// === SIDEBAR ===
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// === MODALES ===
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("show");
}

// Cerrar modal cuando haces click fuera
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
    }
});

// === MODO OSCURO ===
document.getElementById("darkSwitch").addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


/* ============================================================
   MODALES con animación PRO
============================================================ */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";

    const content = modal.querySelector(".modal-content");
    content.style.opacity = "0";
    content.style.transform = "translateY(-20px)";

    setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 20);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector(".modal-content");

    content.style.opacity = "0";
    content.style.transform = "translateY(-20px)";

    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
}

window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) closeModal(modal.id);
    });
});


/* ============================================================
   FORMULARIO "CONTRÁTAME"
============================================================ */
const form = document.querySelector(".hire-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fields = form.querySelectorAll("input, textarea");
        let valid = true;

        fields.forEach(f => {
            if (f.value.trim() === "") {
                f.style.border = "2px solid #ff4e4e";
                valid = false;
            } else {
                f.style.border = "1px solid #ccc";
            }
        });

        if (!valid) return;

        alert("Tu solicitud fue enviada correctamente.");
        form.reset();
    });
}


/* ============================================================
   SCROLL SUAVE
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.getAttribute("href") === "#") return;

        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    sidebar.classList.toggle("active");
    body.classList.toggle("menu-open");
}


/* ============================================================
   FADE IN AL CARGAR
============================================================ */
document.body.style.opacity = "0";
window.onload = () => {
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "1";
};
