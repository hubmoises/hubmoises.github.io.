// ============================================================
// Portfólio — Moises da Silva Melo
// main.js — animações e interações
// ============================================================

// ── Navbar — muda cor ao scrollar ──
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = "rgba(239,159,39,0.2)"
  } else {
    navbar.style.borderBottomColor = "rgba(255,255,255,0.08)"
  }
})

// ── Animação de entrada dos elementos ──
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel")
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

// Observa os elementos que devem animar
document.querySelectorAll(
  ".sobre-card, .skill-group, .projeto-card, .contato-card"
).forEach(function (el) {
  el.classList.add("animar")
  observer.observe(el)
})

// ── CSS das animações via JS ──
const style = document.createElement("style")
style.textContent = `
  .animar {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .animar.visivel {
    opacity: 1;
    transform: translateY(0);
  }
`
document.head.appendChild(style)

// ── Link ativo na navbar conforme scroll ──
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", function () {
  let atual = ""

  sections.forEach(function (section) {
    const top = section.offsetTop - 80
    if (window.scrollY >= top) {
      atual = section.getAttribute("id")
    }
  })

  navLinks.forEach(function (link) {
    link.style.color = ""
    if (link.getAttribute("href") === "#" + atual) {
      link.style.color = "#EF9F27"
    }
  })
})
