/* =========================================================
   PATCH — Privilege Travel
   À charger APRÈS script.js
   - supprime la barre de recherche du hero
   - dates sélectionnables
   - message WhatsApp avec prix, date, personnes
   - demande de réservation envoyée sur WhatsApp
   ========================================================= */

let activeDate = "";

/* ---------- Styles ---------- */
(function () {
  const st = document.createElement("style");
  st.textContent = `
    #tmDates span{cursor:pointer;user-select:none;}
    #tmDates span.selected{background:var(--turquoise);border-color:var(--turquoise);color:#fff;}
    .booking-modal select{border:1px solid var(--border);border-radius:8px;padding:12px 13px;font-size:14px;color:var(--navy);font-weight:600;background:var(--surface);}
    .booking-modal select:focus{outline:none;border-color:var(--turquoise);background:white;}
  `;
  document.head.appendChild(st);
})();

/* ---------- Suppression de la barre de recherche ---------- */
(function () {
  const form = document.getElementById("heroSearchForm");
  if (form) form.remove();
})();

/* ---------- Date du formulaire = liste déroulante ---------- */
(function () {
  const input = document.querySelector('#bookingForm input[name="date"]');
  if (!input) return;
  const sel = document.createElement("select");
  sel.name = "date";
  sel.id = "bookingDateSelect";
  sel.required = true;
  input.replaceWith(sel);
})();

/* ---------- Message WhatsApp ---------- */
window.tourWhatsappMessage = function (tour, date, qty) {
  return (
    "Bonjour Privilege Travel 👋\n\n" +
    "Je souhaite réserver :\n\n" +
    `Excursion : ${tour.name}\n` +
    `Prix : à partir de ${formatPrice(tour.price)} / personne\n` +
    `Date : ${date || "à confirmer"}\n` +
    `Nombre de personnes : ${qty || "à confirmer"}\n` +
    (qty ? `Total estimé : ${formatPrice(tour.price * qty)}\n` : "") +
    "\nMerci."
  );
};

function updateTmWhatsapp() {
  const wa = document.getElementById("tmWhatsapp");
  if (wa && activeTour) {
    wa.href = buildWhatsappLink(
      tourWhatsappMessage(activeTour, activeDate, bookingQty)
    );
  }
}

/* ---------- Ouverture de la fiche voyage ---------- */
const __openTourModal = window.openTourModal;
window.openTourModal = function (id) {
  __openTourModal(id);
  activeDate = "";
  updateTmWhatsapp();
};

/* ---------- Clic sur une date ---------- */
(function () {
  const wrap = document.getElementById("tmDates");
  if (!wrap) return;
  wrap.addEventListener("click", e => {
    const item = e.target.closest(".tm-date-item");
    if (!item) return;
    wrap.querySelectorAll(".tm-date-item").forEach(d => d.classList.remove("selected"));
    item.classList.add("selected");
    activeDate = item.textContent.trim();
    updateTmWhatsapp();
  });
})();

/* ---------- Nombre de personnes ---------- */
["tmQtyMinus", "tmQtyPlus"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", () => setTimeout(updateTmWhatsapp, 0));
});

/* ---------- Formulaire de réservation ---------- */
const __openBookingModal = window.openBookingModal;
window.openBookingModal = function (tour) {
  __openBookingModal(tour);
  const sel = document.getElementById("bookingDateSelect");
  if (sel && tour) {
    sel.innerHTML =
      '<option value="">Choisir une date</option>' +
      (tour.dates || []).map(d => `<option value="${d}">${d}</option>`).join("");
    sel.value = activeDate || "";
  }
};

(function () {
  const form = document.getElementById("bookingForm");
  if (!form) return;
  form.addEventListener("submit", () => {
    const f = new FormData(form);
    const qty = parseInt(f.get("travelers")) || 1;
    const t = activeTour;

    const msg =
      "Bonjour Privilege Travel 👋\n\n" +
      "Nouvelle demande de réservation :\n\n" +
      `Nom : ${f.get("fullname")}\n` +
      `Téléphone : ${f.get("phone")}\n` +
      `Email : ${f.get("email")}\n\n` +
      `Excursion : ${f.get("tour")}\n` +
      (t ? `Prix : à partir de ${formatPrice(t.price)} / personne\n` : "") +
      `Date : ${f.get("date")}\n` +
      `Nombre de personnes : ${qty}\n` +
      (t ? `Total estimé : ${formatPrice(t.price * qty)}\n` : "") +
      (f.get("message") ? `\nMessage : ${f.get("message")}\n` : "") +
      "\nMerci.";

    window.open(buildWhatsappLink(msg), "_blank");
  });
})();
