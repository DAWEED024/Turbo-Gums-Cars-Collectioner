const STORAGE_KEY = 'turbo-gums-qty-v1';

const CARD_DEFS = [
  ['Mercedes', 'GLK 220'], ['Alfa Romeo', 'Giulietta'], ['Alfa Romeo', 'MiTo'], ['Audi', 'A5'], ['Audi', 'A7'],
  ['Audi', 'Q7'], ['Audi', 'Q5'], ['Audi', 'R8'], ['Audi', 'TT'], ['BMW', '118'],
  ['BMW', '328'], ['BMW', '520'], ['BMW', '640'], ['BMW', '730'], ['BMW', 'Z4'],
  ['Mercedes-Benz', 'A 180'], ['Mercedes-Benz', 'CLA 220'], ['Mercedes-Benz', 'E 220'], ['Mercedes-Benz', 'G 500'], ['Subaru', 'BRZ'],
  ['Mercedes-Benz', 'ML 350'], ['Ford', 'Kuga'], ['Ford', 'Mondeo'], ['Opel', 'Astra'], ['Opel', 'Cascada'],
  ['Volkswagen', 'Beetle'], ['Volkswagen', 'Touareg'], ['Volkswagen', 'Scirocco'], ['Porsche', '911 Turbo'], ['Porsche', 'Cayenne Turbo'],
  ['Porsche', 'Panamera Turbo'], ['Toyota', 'Land Cruiser V8'], ['Bentley', 'Mulsanne'], ['Ferrari', 'F430'], ['Aston Martin', 'Rapide'],
  ['Range Rover', 'Sport'], ['Ferrari', '458'], ['Ferrari', 'FF'], ['Aston Martin', 'One-77'], ['Bugatti', 'Veyron'],
  ['Lamborghini', 'Gallardo LP570-4'], ['Bentley', 'Continental GT'], ['Rolls-Royce', 'Ghost'], ['Chevrolet', 'Corvette ZR1'], ['Hummer', 'H3'],
  ['Acura', 'NSX'], ['Dodge', 'Challenger'], ['Dodge', 'Viper'], ['Honda', 'CR-Z'], ['Mazda', 'Shinari'],
  ['Aston Martin', 'V8 Vantage'], ['Porsche', '918 Spyder'], ['Lamborghini', 'Egoista'], ['Mini', 'Cooper Paceman'], ['Audi', 'S5 Cabriolet'],
  ['Chevrolet', 'Camaro SS'], ['Aston Martin', 'Rapide S'], ['Maserati', 'GranCabrio'], ['Volvo', 'S60'], ['Jeep', 'Wrangler Rubicon'],
  ['Chrysler', 'PT Cruiser Classic'], ['Chrysler', '200'], ['Infiniti', 'G37 Convertible'], ['Ford', 'Edge Sport'], ['Suzuki', 'Kizashi'],
  ['Dodge', 'Charger'], ['Cadillac', 'CTS-V'], ['Lamborghini', 'Gallardo LP570-4'], ['Lotus', 'Elise'], ['Jaguar', 'C-X17'],
  ['Jaguar', 'F-Type Coupe'], ['Suzuki', 'Grand Vitara'], ['Lexus', 'LF-LC'], ['Citroën', 'Metropolis'], ['Citroën', 'DS5'],
  ['Dodge', 'Durango'], ['Buick', 'Encore'], ['Buick', 'Enclave'], ['Cadillac', 'Elmiraj'], ['Lancia', 'Delta'],
  ['Kia', 'Cross GT'], ['Audi', 'A4'], ['Audi', 'A3 Cabriolet'], ['Toyota', 'FT-86 Open Concept'], ['Chevrolet', 'Tahoe'],
  ['Subaru', 'Legacy'], ['Chevrolet', 'Trailblazer'], ['Infiniti', 'Emerg-E'], ['Honda', 'EV-Ster'], ['Lamborghini', 'Gallardo LP550-2 Spyder'],
  ['Aston Martin', 'Vanquish'], ['Alfa Romeo', '4C Launch Edition'], ['Aston Martin', 'Lagonda'], ['Aston Martin', 'V12 Zagato'], ['BMW', 'i8 Spyder'],
  ['Honda', 'Urban SUV'], ['Audi', 'A5'], ['Kia', 'Pro Cee’d'], ['BMW', 'X5 Security Plus'], ['Kia', 'Sportage'],
  ['Toyota', 'RAV4'], ['Toyota', 'Hilux Invincible'], ['BMW', 'i8'], ['Peugeot', '5008'], ['BMW', '4 Series M Performance'],
  ['Nissan', '370Z'], ['Mercedes', 'SL 400'], ['Nissan', 'GT-R'], ['Volkswagen', 'Scirocco'], ['Jaguar', 'C-X17'],
  ['BMW', 'X6'], ['Honda', 'Civic Type R'], ['Viper', 'SRT'], ['BMW', 'Z4'], ['Jaguar', 'XK Coupe'],
  ['Lotus', 'Exige Roadster'], ['Alfa Romeo', '4C Spider'], ['Mazda', 'MX-5'], ['Citroën', 'DS3'], ['Bravado', 'Banshee'],
  ['Chevrolet', 'Corvette Z06'], ['Chevrolet', 'Corvette Stingray'], ['Chevrolet', 'Corvette Z06'], ['Audi', 'RS7'], ['Audi', 'Sport Quattro'],
  ['Ford', 'Focus ST'], ['Dodge', 'Magnum'], ['Kia', 'Optima'], ['Kia', 'Optima'], ['Škoda', 'VisionC'],
  ['Jaguar', 'XJ'], ['Jaguar', 'XK Dynamic'], ['Opel', 'Insignia'], ['Jaguar', 'XK Coupe'], ['Honda', 'Fit'],
  ['Honda', 'Crosstour'], ['Subaru', 'Tribeca'], ['Mazda', 'CX-5'], ['Ford', 'Explorer'], ['Audi', 'SQ5'],
  ['Nissan', 'Armada'], ['Nissan', 'Juke'], ['Noble', 'M600'], ['Nissan', 'X-Trail'], ['Peugeot', '508'],
  ['Peugeot', '4008'], ['Peugeot', 'RCZ R'], ['Peugeot', '108'], ['Mitsubishi', 'Eclipse Spyder'], ['Mitsubishi', 'ASX'],
  ['Spyker', 'B6 Spyder Concept'], ['Volvo', 'V40'], ['Volkswagen', 'Touareg'], ['Spyker', 'B6 Spyder Concept'], ['Chevrolet', 'Corvette Z06'],
  ['Mini', 'Superleggera Vision'], ['Lamborghini', 'Huracan LP610-4'], ['Volkswagen', 'Golf'], ['BMW', 'M3'], ['Koenigsegg', 'CCX']
];

const CARDS = CARD_DEFS.map(([brand, model], index) => {
  const id = index + 1;
  const idStr = String(id).padStart(3, '0');
  return { id, idStr, brand, model };
});

CARDS[118] = { ...CARDS[118], brand: 'Citroën', model: 'C5' };
CARDS.splice(119, 0, { id: 119, idStr: '119s', displayId: '119', brand: 'Citroën', model: 'C5 Airscape Concept' });

const qtyMap = loadQtyMap();
let modalCard = null;
let lastTap = 0;

const refs = {
  grid: document.getElementById('cardGrid'),
  empty: document.getElementById('emptyState'),
  searchInput: document.getElementById('searchInput'),
  brandFilter: document.getElementById('brandFilter'),
  sortSelect: document.getElementById('sortSelect'),
  ownedOnly: document.getElementById('ownedOnly'),
  missingOnly: document.getElementById('missingOnly'),
  duplicatesOnly: document.getElementById('duplicatesOnly'),
  uniqueCount: document.getElementById('uniqueCount'),
  totalCount: document.getElementById('totalCount'),
  missingCount: document.getElementById('missingCount'),
  previewModal: document.getElementById('previewModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalImage: document.getElementById('modalImage'),
  modalFallback: document.getElementById('modalFallback'),
  modalTitle: document.getElementById('modalTitle'),
  modalSubtitle: document.getElementById('modalSubtitle'),
  modalQty: document.getElementById('modalQty'),
  minusQty: document.getElementById('minusQty'),
  plusQty: document.getElementById('plusQty'),
  resetQty: document.getElementById('resetQty'),
  quickQty: document.getElementById('quickQty'),
  applyQuickQty: document.getElementById('applyQuickQty'),
  modalStats: document.getElementById('modalStats'),
  exportBtn: document.getElementById('exportBtn'),
  importBtn: document.getElementById('importBtn'),
  importDialog: document.getElementById('importDialog'),
  closeImportBtn: document.getElementById('closeImportBtn'),
  importTextarea: document.getElementById('importTextarea'),
  confirmImport: document.getElementById('confirmImport'),
  importMessage: document.getElementById('importMessage')
};

initialize();

function initialize() {
  preventZoomOnMobile();
  fillBrandFilter();
  wireEvents();
  render();
}

function preventZoomOnMobile() {
  document.addEventListener('gesturestart', (event) => event.preventDefault(), { passive: false });
  document.addEventListener('gesturechange', (event) => event.preventDefault(), { passive: false });
  document.addEventListener('gestureend', (event) => event.preventDefault(), { passive: false });

  document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTap <= 300) {
      event.preventDefault();
    }
    lastTap = now;
  }, { passive: false });
}

function fillBrandFilter() {
  const brands = [...new Set(CARDS.map((card) => card.brand))].sort((a, b) => a.localeCompare(b, 'pl'));
  for (const brand of brands) {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    refs.brandFilter.append(option);
  }
}

function wireEvents() {
  [refs.searchInput, refs.brandFilter, refs.sortSelect, refs.ownedOnly, refs.missingOnly, refs.duplicatesOnly].forEach((el) => {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });

  refs.grid.addEventListener('click', (event) => {
    const tile = event.target.closest('[data-id-str]');
    if (!tile) return;
    const idStr = tile.dataset.idStr;

    if (event.target.matches('.quick-toggle')) {
      event.stopPropagation();
      const card = CARDS.find((entry) => entry.idStr === idStr);
      if (!card) return;
      const qty = getQty(card.idStr);
      setQty(card.idStr, qty === 0 ? 1 : 0);
      render();
      return;
    }

    const card = CARDS.find((entry) => entry.idStr === idStr);
    if (!card) return;
    openModal(card);
  });

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.previewModal.addEventListener('click', (event) => {
    if (event.target === refs.previewModal) closeModal();
  });

  refs.previewModal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  refs.minusQty.addEventListener('click', () => modalAdjustQty(-1));
  refs.plusQty.addEventListener('click', () => modalAdjustQty(1));
  refs.resetQty.addEventListener('click', () => modalSetQty(0));
  refs.applyQuickQty.addEventListener('click', () => {
    const value = Number.parseInt(refs.quickQty.value, 10);
    modalSetQty(Number.isFinite(value) && value >= 0 ? value : 0);
  });

  refs.exportBtn.addEventListener('click', exportJson);
  refs.importBtn.addEventListener('click', () => {
    refs.importDialog.showModal();
    refs.importMessage.textContent = '';
  });
  refs.closeImportBtn.addEventListener('click', () => refs.importDialog.close());
  refs.importDialog.addEventListener('click', (event) => {
    if (event.target === refs.importDialog) refs.importDialog.close();
  });
  refs.confirmImport.addEventListener('click', importJson);
}

function render() {
  const filtered = applyFiltersAndSort();
  const fragment = document.createDocumentFragment();

  for (const card of filtered) {
    fragment.appendChild(createCardTile(card));
  }

  refs.grid.replaceChildren(fragment);
  refs.empty.hidden = filtered.length > 0;
  updateStats();
  if (modalCard) refreshModal();
}

function applyFiltersAndSort() {
  const searchTokens = normalize(refs.searchInput.value)
    .split(' ')
    .map((token) => token.trim())
    .filter(Boolean);

  const brand = refs.brandFilter.value;
  const ownedOnly = refs.ownedOnly.checked;
  const missingOnly = refs.missingOnly.checked;
  const duplicatesOnly = refs.duplicatesOnly.checked;

  const filtered = CARDS.filter((card) => {
    const qty = getQty(card.idStr);
    if (brand && card.brand !== brand) return false;
    if (ownedOnly && qty <= 0) return false;
    if (missingOnly && qty !== 0) return false;
    if (duplicatesOnly && qty < 2) return false;

    if (searchTokens.length === 0) return true;

    const displayId = card.displayId ?? card.idStr;
    const searchable = normalize(`${card.id} ${card.idStr} ${displayId} #${displayId} ${card.brand} ${card.model}`);
    return searchTokens.every((token) => searchable.includes(token));
  });

  const sort = refs.sortSelect.value;
  filtered.sort((a, b) => {
    const qa = getQty(a.idStr);
    const qb = getQty(b.idStr);

    switch (sort) {
      case 'id-desc': return b.id - a.id;
      case 'brand-asc': return a.brand.localeCompare(b.brand, 'pl') || a.model.localeCompare(b.model, 'pl') || a.id - b.id;
      case 'brand-desc': return b.brand.localeCompare(a.brand, 'pl') || b.model.localeCompare(a.model, 'pl') || a.id - b.id;
      case 'missing-first': return Number(qa > 0) - Number(qb > 0) || a.id - b.id;
      case 'duplicates-first': return Number(qb >= 2) - Number(qa >= 2) || a.id - b.id;
      case 'id-asc':
      default: return a.id - b.id;
    }
  });

  return filtered;
}

function createCardTile(card) {
  const qty = getQty(card.idStr);
  const tile = document.createElement('article');
  tile.className = `card-tile ${qty > 0 ? 'owned' : 'missing'}`;
  tile.dataset.idStr = card.idStr;

  const displayId = card.displayId ?? card.idStr;

  const imagePath = `./assets/cards/${card.idStr}.png`;

  tile.innerHTML = `
    <div class="thumb-slot">
      <img src="${imagePath}" alt="Karta ${displayId}: ${escapeHtml(card.brand)} ${escapeHtml(card.model)}" loading="lazy" decoding="async" />
      <div class="img-fallback" hidden>Brak obrazka</div>
      ${qty >= 2 ? `<span class="qty-badge">${qty}x</span>` : ''}
    </div>
    <div class="card-meta">
      <p class="card-sub">#${displayId}</p>
      <h3 class="card-title">${escapeHtml(card.brand)} ${escapeHtml(card.model)}</h3>
      <div class="card-row">
        <label class="quick-check">
          <input class="quick-toggle" type="checkbox" ${qty > 0 ? 'checked' : ''} aria-label="Przełącz posiadanie #${displayId}" />
          Posiadam
        </label>
        <small>Ilość: ${qty}</small>
      </div>
    </div>
  `;

  const img = tile.querySelector('img');
  const fallback = tile.querySelector('.img-fallback');
  img.addEventListener('error', () => {
    img.hidden = true;
    fallback.hidden = false;
  });

  return tile;
}

function openModal(card) {
  modalCard = card;
  refreshModal();
  refs.previewModal.showModal();
}

function refreshModal() {
  if (!modalCard) return;
  const qty = getQty(modalCard.idStr);
  const displayId = modalCard.displayId ?? modalCard.idStr;
  refs.modalTitle.textContent = `#${displayId} — ${modalCard.brand}`;
  refs.modalSubtitle.textContent = modalCard.model;
  refs.modalQty.textContent = String(qty);
  refs.quickQty.value = String(qty);

  refs.modalImage.hidden = false;
  refs.modalFallback.hidden = true;
  refs.modalImage.src = `./assets/cards/${modalCard.idStr}.png`;
  refs.modalImage.alt = `Karta ${displayId}: ${modalCard.brand} ${modalCard.model}`;
  refs.modalImage.onerror = () => {
    refs.modalImage.hidden = true;
    refs.modalFallback.hidden = false;
  };

  const { unique, total, missing } = computeStats();
  refs.modalStats.textContent = `Unikalne: ${unique}/${CARDS.length} · Łącznie: ${total} szt. · Brakuje: ${missing}`;
}

function closeModal() {
  modalCard = null;
  refs.previewModal.close();
}

function modalAdjustQty(delta) {
  if (!modalCard) return;
  const current = getQty(modalCard.idStr);
  modalSetQty(Math.max(0, current + delta));
}

function modalSetQty(nextQty) {
  if (!modalCard) return;
  setQty(modalCard.idStr, Math.max(0, nextQty));
  render();
}

function updateStats() {
  const { unique, total, missing } = computeStats();
  refs.uniqueCount.textContent = `${unique}/${CARDS.length}`;
  refs.totalCount.textContent = `${total} szt.`;
  refs.missingCount.textContent = String(missing);
}

function computeStats() {
  let unique = 0;
  let total = 0;

  for (const card of CARDS) {
    const qty = getQty(card.idStr);
    if (qty > 0) unique += 1;
    total += qty;
  }

  return { unique, total, missing: CARDS.length - unique };
}

function getQty(idStr) {
  return Math.max(0, Number(qtyMap[idStr] || 0));
}

function setQty(idStr, qty) {
  qtyMap[idStr] = Math.max(0, Math.floor(Number(qty) || 0));
  persistQtyMap();
}

function loadQtyMap() {
  const defaults = Object.fromEntries(CARDS.map((card) => [card.idStr, 0]));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return defaults;

    for (const card of CARDS) {
      const value = parsed[card.idStr];
      defaults[card.idStr] = Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
    }

    return defaults;
  } catch {
    return defaults;
  }
}

function persistQtyMap() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(qtyMap));
}

function exportJson() {
  const data = JSON.stringify(qtyMap, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'turbo-gums-backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importJson() {
  refs.importMessage.textContent = '';

  try {
    const parsed = JSON.parse(refs.importTextarea.value.trim());
    if (!isValidImportMap(parsed)) {
      refs.importMessage.textContent = 'Błąd walidacji: użyj mapy z kluczami kart i wartościami >= 0.';
      return;
    }

    for (const card of CARDS) {
      qtyMap[card.idStr] = Math.floor(parsed[card.idStr] ?? 0);
    }

    persistQtyMap();
    refs.importMessage.textContent = 'Import zakończony sukcesem.';
    render();
  } catch {
    refs.importMessage.textContent = 'Niepoprawny JSON.';
  }
}

function isValidImportMap(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return false;

  for (const card of CARDS) {
    const value = input[card.idStr];
    if (value === undefined) continue;
    if (!Number.isFinite(value) || value < 0) return false;
  }

  const validKeys = new Set(CARDS.map((card) => card.idStr));
  for (const key of Object.keys(input)) {
    if (!validKeys.has(key)) return false;
  }

  return true;
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`´]/g, '')
    .replace(/[-_/.,:;()\[\]{}+]/g, ' ')
    .replace(/[^a-z0-9# ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
