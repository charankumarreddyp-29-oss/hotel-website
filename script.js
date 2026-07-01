/* ============================================================
   KAIA COVE — script.js
   Mobile menu, sticky header, scroll reveal, room filter,
   testimonial carousel, gallery lightbox, FAQ accordion,
   booking form validation.
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open", isOpen);
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
      });
    });
  }

  /* ---------- Sticky header ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Room filter (rooms.html) ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var roomCards = document.querySelectorAll(".room-card");
  if (filterBtns.length && roomCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        roomCards.forEach(function (card) {
          var match = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  /* ---------- Testimonial carousel (index.html) ---------- */
  var testimonials = document.querySelectorAll(".testimonial");
  var dotsWrap = document.querySelector(".dots");
  if (testimonials.length && dotsWrap) {
    var current = 0;
    var dots = [];
    testimonials.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", function () { showTestimonial(i); });
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
    function showTestimonial(index) {
      testimonials.forEach(function (t, i) { t.classList.toggle("is-active", i === index); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === index); });
      current = index;
    }
    var autoplay = setInterval(function () {
      showTestimonial((current + 1) % testimonials.length);
    }, 5500);
    dotsWrap.addEventListener("click", function () { clearInterval(autoplay); });
  }

  /* ---------- Gallery lightbox (gallery.html) ---------- */
  var galleryItems = document.querySelectorAll(".gallery-item");
  var lightbox = document.getElementById("lightbox");
  if (galleryItems.length && lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCap = lightbox.querySelector(".lightbox-cap");
    var items = Array.prototype.slice.call(galleryItems);
    var activeIndex = 0;

    function openLightbox(index) {
      activeIndex = index;
      var img = items[index].querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCap.textContent = img.alt;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function step(delta) {
      activeIndex = (activeIndex + delta + items.length) % items.length;
      openLightbox(activeIndex);
    }

    items.forEach(function (item, i) {
      item.addEventListener("click", function () { openLightbox(i); });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function () { step(-1); });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Booking form validation (contact.html) ---------- */
  var form = document.getElementById("bookingForm");
  var toast = document.getElementById("toast");

  function setError(fieldEl, message) {
    var wrap = fieldEl.closest(".field");
    wrap.classList.add("error");
    wrap.querySelector(".error-msg").textContent = message;
  }
  function clearError(fieldEl) {
    var wrap = fieldEl.closest(".field");
    wrap.classList.remove("error");
  }
  function showToast(title, message) {
    if (!toast) return;
    toast.querySelector("strong").textContent = title;
    toast.querySelector("span").textContent = message;
    toast.classList.add("is-visible");
    setTimeout(function () { toast.classList.remove("is-visible"); }, 4200);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var name = form.querySelector("#fullName");
      var email = form.querySelector("#email");
      var phone = form.querySelector("#phone");
      var checkin = form.querySelector("#checkin");
      var checkout = form.querySelector("#checkout");
      var guests = form.querySelector("#guests");

      [name, email, phone, checkin, checkout, guests].forEach(clearError);

      if (!name.value.trim()) { setError(name, "Please tell us your name."); valid = false; }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) { setError(email, "Enter a valid email address."); valid = false; }

      var phonePattern = /^[0-9+\-\s]{7,15}$/;
      if (!phonePattern.test(phone.value.trim())) { setError(phone, "Enter a valid phone number."); valid = false; }

      if (!checkin.value) { setError(checkin, "Choose a check-in date."); valid = false; }
      if (!checkout.value) { setError(checkout, "Choose a check-out date."); valid = false; }
      if (checkin.value && checkout.value && checkout.value <= checkin.value) {
        setError(checkout, "Check-out must be after check-in."); valid = false;
      }
      if (!guests.value) { setError(guests, "Select number of guests."); valid = false; }

      if (valid) {
        showToast("Request received", "Thank you, " + name.value.trim().split(" ")[0] + ". Our reservations team will confirm by email shortly.");
        form.reset();
      } else {
        showToast("Almost there", "Please check the highlighted fields and try again.");
      }
    });
  }
});
