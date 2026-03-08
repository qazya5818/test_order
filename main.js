// Menu Data
const menuItems = [
  // 커피
  { id: 1,  name: '아메리카노',      desc: '진한 에스프레소와 물의 조화',         priceHot: 1800, priceIce: 1800, emoji: '\u2615', image: 'images/menu_americano.png', category: 'coffee', hasCoffee: true },
  { id: 3,  name: '카페라떼',        desc: '부드러운 우유와 에스프레소',          priceHot: 3000, priceIce: 3200, emoji: '\ud83e\udd5b', image: 'images/menu_cafelatte.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 2,  name: '카페모카',        desc: '초콜릿과 에스프레소의 달콤한 만남',   priceHot: 3500, priceIce: 3700, emoji: '\ud83c\udf6b', image: 'images/menu_cafemoca.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 4,  name: '바닐라라떼',      desc: '달콤한 바닐라 시럽 라떼',             priceHot: 3500, priceIce: 3700, emoji: '\ud83c\udf6e', image: 'images/menu_Vanillalatte.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 5,  name: '카라멜 마끼야또',  desc: '카라멜 드리즐의 달콤함',              priceHot: 3500, priceIce: 3700, emoji: '\ud83c\udf6f', image: 'images/menu_Caramelmacchiato.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 6,  name: '카푸치노',        desc: '에스프레소와 우유 거품의 클래식',     priceHot: 3000, priceIce: 3200, emoji: '\ud83c\udf75', image: 'images/menu_cappuccino.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 7,  name: '연유라떼',        desc: '달콤한 연유와 에스프레소의 조화',     priceHot: 3800, priceIce: 4000, emoji: '\ud83e\udd5b', image: 'images/menu_milklatte.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  { id: 8,  name: '소이라떼',        desc: '고소한 두유 라떼',                   priceHot: 3500, priceIce: 3700, emoji: '\ud83c\udf31', image: 'images/menu_soilatte.png', category: 'coffee', hasCoffee: true, hasMilk: true },
  // 라떼&프라푸치노
  { id: 9,  name: '밀크티',            desc: '진한 홍차와 부드러운 우유',           priceHot: 3800, priceIce: 4000, emoji: '\ud83c\udf75', category: 'latte', hasMilk: true },
  { id: 10, name: '시나몬라떼',        desc: '따뜻한 시나몬 향의 라떼',             priceHot: 3800, priceIce: 4000, emoji: '\ud83e\uded6', category: 'latte', hasMilk: true },
  { id: 11, name: '딸기라떼',          desc: '[시즌] 상큼한 딸기 라떼',           priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf53', category: 'latte', hasMilk: true },
  { id: 12, name: '고구마라떼',        desc: '달콤한 고구마 라떼',                 priceHot: 3800, priceIce: 4000, emoji: '\ud83c\udf60', category: 'latte', hasMilk: true },
  { id: 13, name: '오곡라떼',          desc: '고소한 오곡 블렌딩 라떼',             priceHot: 3800, priceIce: 4000, emoji: '\ud83c\udf3e', category: 'latte', hasMilk: true },
  { id: 14, name: '초코라떼',          desc: '진한 초콜릿 라떼',                   priceHot: 3800, priceIce: 4000, emoji: '\ud83c\udf6b', category: 'latte', hasMilk: true },
  { id: 15, name: '토피넛라떼',        desc: '달콤 고소한 토피넛 라떼',             priceHot: 4300, priceIce: 4500, emoji: '\ud83e\udd5c', category: 'latte', hasMilk: true },
  { id: 16, name: '미숫가루',          desc: '[시즌] 구수하고 든든한 미숫가루',     priceHot: 4800, priceIce: 4800, emoji: '\ud83c\udf5a', category: 'latte', hasMilk: true },
  { id: 17, name: '자바칩 프라푸치노',    desc: '초코칩이 가득한 자바칩 프라푸치노',   priceHot: 4700, priceIce: 4700, emoji: '\ud83c\udf66', category: 'latte' },
  { id: 18, name: '초코 프라푸치노',    desc: '진한 초콜릿 블렌디드',               priceHot: 4700, priceIce: 4700, emoji: '\ud83c\udf6b', category: 'latte' },
  { id: 19, name: '바닐라 프라푸치노',  desc: '달콤한 바닐라 블렌디드',             priceHot: 4700, priceIce: 4700, emoji: '\ud83c\udf6e', category: 'latte' },
  // 요거트&스무디
  { id: 20, name: '플레인 요거트',     desc: '새콤하고 담백한 플레인 요거트',       priceHot: 5000, priceIce: 5000, emoji: '\ud83e\udd63', category: 'yogurt' },
  { id: 21, name: '딸기 요거트',       desc: '상큼한 딸기가 가득한 요거트',         priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf53', category: 'yogurt' },
  { id: 22, name: '망고 요거트',       desc: '달콤한 망고와 요거트의 조화',         priceHot: 5500, priceIce: 5500, emoji: '\ud83e\udd6d', category: 'yogurt' },
  { id: 23, name: '블루베리 요거트',   desc: '새콤달콤 블루베리 요거트',           priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf47', category: 'yogurt' },
  { id: 24, name: '딸기 스무디',       desc: '진한 딸기 스무디',                   priceHot: 4700, priceIce: 4700, emoji: '\ud83c\udf53', category: 'yogurt' },
  { id: 25, name: '망고 스무디',       desc: '달콤한 망고 스무디',                 priceHot: 4700, priceIce: 4700, emoji: '\ud83e\udd6d', category: 'yogurt' },
  { id: 26, name: '블루베리 스무디',       desc: '진한 블루베리 스무디',               priceHot: 4700, priceIce: 4700, emoji: '\ud83c\udf47', category: 'yogurt' },
  // 에이드&아이스티
  { id: 27, name: '레몬 에이드',          desc: '상큼 톡 쏘는 레몬 에이드',           priceHot: 4500, priceIce: 4500, emoji: '\ud83c\udf4b', category: 'ade' },
  { id: 28, name: '자몽 에이드',          desc: '새콤달콤 자몽 에이드',               priceHot: 4500, priceIce: 4500, emoji: '\ud83c\udf4a', category: 'ade' },
  { id: 29, name: '청포도 에이드',        desc: '청량한 청포도 에이드',               priceHot: 4500, priceIce: 4500, emoji: '\ud83c\udf47', category: 'ade' },
  { id: 30, name: '복숭아 아이스티',      desc: '달콤한 복숭아 아이스티',             priceHot: 3500, priceIce: 3500, emoji: '\ud83c\udf51', category: 'ade' },
  { id: 31, name: '복숭아 아이스티 제로', desc: '칼로리 걱정 없는 복숭아 아이스티',  priceHot: 3800, priceIce: 3800, emoji: '\ud83c\udf51', category: 'ade' },
  { id: 32, name: '매실 아이스티 제로',   desc: '깔끔하고 상큼한 매실 아이스티',     priceHot: 3800, priceIce: 3800, emoji: '\ud83c\udf3f', category: 'ade' },
  { id: 33, name: '복숭아 얼그레이',      desc: '홍차와 복숭아의 우아한 조화',        priceHot: 4000, priceIce: 4000, emoji: '\ud83c\udf75', category: 'ade' },
  // 차
  { id: 52, name: '얼그레이',            desc: '향긋한 베르가못 향의 홍차',          priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf75', category: 'tea' },
  { id: 53, name: '페퍼민트',            desc: '상쾌하고 깔끔한 민트티',             priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf3f', category: 'tea' },
  { id: 54, name: '카모마일',            desc: '마음이 편안해지는 허브티',           priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf3c', category: 'tea' },
  { id: 55, name: '녹차',                desc: '깔끔하고 구수한 녹차',               priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf75', category: 'tea' },
  { id: 56, name: '애플차',              desc: '달콤 상큼한 사과 티',                priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf4e', category: 'tea' },
  { id: 57, name: '히비스커스',          desc: '새콤하고 붉은 수색의 허브티',        priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf3a', category: 'tea' },
  { id: 58, name: '루이보스',            desc: '카페인 없는 건강한 허브티',          priceHot: 3000, priceIce: 3300, emoji: '\ud83c\udf42', category: 'tea' },
  { id: 34, name: '유자차',            desc: '새콤달콤 상큼한 유자차',             priceHot: 3200, priceIce: 3500, emoji: '\ud83c\udf4b', category: 'tea' },
  { id: 35, name: '모과차',            desc: '향긋하고 구수한 모과차',             priceHot: 3200, priceIce: 3500, emoji: '\ud83c\udf4e', category: 'tea' },
  { id: 36, name: '마차',              desc: '진하고 부드러운 말차',               priceHot: 3800, priceIce: 4000, emoji: '\ud83c\udf35', category: 'tea' },
  { id: 37, name: '레몬차',            desc: '상큼한 레몬 티',                     priceHot: 4000, priceIce: 4300, emoji: '\ud83c\udf4b', category: 'tea' },
  { id: 38, name: '자몽차',            desc: '새콤달콤 자몽 티',                   priceHot: 4000, priceIce: 4300, emoji: '\ud83c\udf4a', category: 'tea' },
  { id: 39, name: '애플유자',          desc: '사과와 유자의 상큼한 조화',           priceHot: 4000, priceIce: 4300, emoji: '\ud83c\udf4f', category: 'tea' },
  { id: 40, name: '레몬 히비스커스',    desc: '레몬과 히비스커스의 새콤한 블렌드',   priceHot: 4200, priceIce: 4500, emoji: '\ud83c\udf38', category: 'tea' },
  { id: 41, name: '대추차',            desc: '달콤하고 따뜻한 대추차',             priceHot: 4000, priceIce: 4000, emoji: '\ud83c\udf4e', category: 'tea' },
  { id: 42, name: '쌍화차',            desc: '진하고 든든한 쌍화차',               priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf3f', category: 'tea' },
  { id: 43, name: '생강차',            desc: '알싸하고 따뜻한 생강차',             priceHot: 3500, priceIce: 3500, emoji: '\ud83c\udf3f', category: 'tea' },
  { id: 44, name: '유자 생강차',       desc: '유자와 생강의 건강한 조화',           priceHot: 4000, priceIce: 4000, emoji: '\ud83c\udf4b', category: 'tea' },
  // 쥬스
  { id: 45, name: '딸기 바나나',       desc: '달콤한 딸기와 바나나의 조화',         priceHot: 5000, priceIce: 5000, emoji: '\ud83c\udf53', category: 'juice' },
  { id: 46, name: '망고 바나나',       desc: '달콤한 망고와 바나나의 조화',         priceHot: 5000, priceIce: 5000, emoji: '\ud83e\udd6d', category: 'juice' },
  { id: 47, name: '아보카도 바나나',   desc: '고소한 아보카도와 바나나',            priceHot: 5000, priceIce: 5000, emoji: '\ud83e\udd51', category: 'juice' },
  { id: 48, name: '바나나 쥬스',       desc: '진하고 고소한 바나나 쥬스',           priceHot: 5000, priceIce: 5000, emoji: '\ud83c\udf4c', category: 'juice' },
  { id: 49, name: '인삼 바나나 쥬스',  desc: '건강한 인삼과 바나나의 만남',         priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf4c', category: 'juice' },
  { id: 50, name: '계절과일',          desc: '신선한 제철 생과일 쥬스',               priceHot: 5500, priceIce: 5500, emoji: '\ud83c\udf4e', category: 'juice' },
];

// State
let cart = [];
let currentCategory = 'coffee';

// Elements
const menuGrid       = document.getElementById('menuGrid');
const categoryNav    = document.getElementById('categoryNav');
const ordererSelect  = document.getElementById('ordererSelect');
const cartBtn        = document.getElementById('cartBtn');
const cartBadge      = document.getElementById('cartBadge');
const fabCart        = document.getElementById('fabCart');
const fabTotal       = document.getElementById('fabTotal');
const overlay        = document.getElementById('overlay');
const cartSheet      = document.getElementById('cartSheet');
const sheetClose     = document.getElementById('sheetClose');
const cartItems      = document.getElementById('cartItems');
const cartFooter     = document.getElementById('cartFooter');
const totalPrice     = document.getElementById('totalPrice');
const orderBtn       = document.getElementById('orderBtn');
const modalOverlay   = document.getElementById('modalOverlay');
const sheetOrderer   = document.getElementById('sheetOrderer');
const modalMsg       = document.getElementById('modalMsg');
const modalCloseBtn  = document.getElementById('modalCloseBtn');

// Option Modal Elements
const optionModalOverlay = document.getElementById('optionModalOverlay');
const optClose           = document.getElementById('optClose');
const optEmoji           = document.getElementById('optEmoji');
const optName            = document.getElementById('optName');
const optDesc            = document.getElementById('optDesc');
const optQty             = document.getElementById('optQty');
const optMinus           = document.getElementById('optMinus');
const optPlus            = document.getElementById('optPlus');
const optTempRow         = document.getElementById('optTempRow');
const optSizeUp          = document.getElementById('optSizeUp');
const optAddShot         = document.getElementById('optAddShot');
const optSoyMilk         = document.getElementById('optSoyMilk');
const optDecaf           = document.getElementById('optDecaf');
const optStrengthRow     = document.getElementById('optStrengthRow');
const optTotalPrice      = document.getElementById('optTotalPrice');
const optConfirmBtn      = document.getElementById('optConfirmBtn');

// Modal State
let activeItem = null;
let modalState = {
  qty: 1,
  temp: 'ICED',
  sizeUp: false,
  addShot: false,
  soyMilk: false,
  decaf: false,
  strength: 'normal'
};

function getItemPrice(item, options) {
  let p = options.temp === 'HOT' ? item.priceHot : item.priceIce;
  if (options.sizeUp) p += 1000;
  if (options.addShot) p += 500;
  if (options.soyMilk) p += 500;
  if (options.decaf) p += 1000;
  return p;
}

// Render Menu
function renderMenu() {
  const filtered = menuItems.filter(item => item.category === currentCategory);

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <div class="card-media">
        ${item.image ? `<img src="${item.image}" class="card-img" alt="${item.name}">` : `<div class="card-emoji">${item.emoji}</div>`}
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <span class="card-price">${item.priceIce.toLocaleString()}원</span>
          <button class="add-btn" data-id="${item.id}" aria-label="${item.name} 추가">+</button>
        </div>
      </div>
    </div>
  `).join('');

  menuGrid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openOptionModal(parseInt(btn.dataset.id));
      animateBtn(btn);
    });
  });
}

function animateBtn(btn) {
  btn.classList.remove('pop');
  void btn.offsetWidth;
  btn.classList.add('pop');
}

// Option Modal Logic
function openOptionModal(id) {
  const item = menuItems.find(m => m.id === id);
  activeItem = item;
  modalState = {
    qty: 1,
    temp: 'ICED',
    sizeUp: false,
    addShot: false,
    soyMilk: false,
    decaf: false,
    strength: 'normal'
  };

  if (item.image) {
    optEmoji.innerHTML = `<img src="${item.image}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">`;
  } else {
    optEmoji.innerHTML = item.emoji;
  }
  
  optName.textContent = item.name;
  optDesc.textContent = item.desc;
  
  // Toggle visibility of specific options
  optAddShot.style.display = item.hasCoffee ? 'block' : 'none';
  optSoyMilk.style.display = item.hasMilk ? 'block' : 'none';
  optDecaf.style.display   = item.hasCoffee ? 'block' : 'none';

  updateOptionModalUI();
  optionModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOptionModal() {
  optionModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function updateOptionModalUI() {
  optQty.textContent = modalState.qty;
  
  optTempRow.querySelectorAll('.opt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === modalState.temp);
  });

  optStrengthRow.querySelectorAll('.opt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === modalState.strength);
  });

  optSizeUp.classList.toggle('active', modalState.sizeUp);
  optAddShot.classList.toggle('active', modalState.addShot);
  optSoyMilk.classList.toggle('active', modalState.soyMilk);
  optDecaf.classList.toggle('active', modalState.decaf);

  const price = getItemPrice(activeItem, modalState);
  optTotalPrice.textContent = (price * modalState.qty).toLocaleString() + '원';
}

optMinus.addEventListener('click', () => {
  if (modalState.qty > 1) {
    modalState.qty--;
    updateOptionModalUI();
  }
});

optPlus.addEventListener('click', () => {
  modalState.qty++;
  updateOptionModalUI();
});

optTempRow.querySelectorAll('.opt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modalState.temp = btn.dataset.val;
    updateOptionModalUI();
  });
});

optStrengthRow.querySelectorAll('.opt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modalState.strength = btn.dataset.val;
    updateOptionModalUI();
  });
});

optSizeUp.addEventListener('click', () => {
  modalState.sizeUp = !modalState.sizeUp;
  updateOptionModalUI();
});

optAddShot.addEventListener('click', () => {
  modalState.addShot = !modalState.addShot;
  updateOptionModalUI();
});

optSoyMilk.addEventListener('click', () => {
  modalState.soyMilk = !modalState.soyMilk;
  updateOptionModalUI();
});

optDecaf.addEventListener('click', () => {
  modalState.decaf = !modalState.decaf;
  updateOptionModalUI();
});

optConfirmBtn.addEventListener('click', () => {
  const cartItem = {
    ...activeItem,
    qty: modalState.qty,
    options: { ...modalState }
  };
  
  const existing = cart.find(c => 
    c.id === cartItem.id && 
    JSON.stringify(c.options) === JSON.stringify(cartItem.options)
  );

  if (existing) {
    existing.qty += cartItem.qty;
  } else {
    cart.push(cartItem);
  }

  updateCartUI();
  
  // Reset modal state and UI before closing
  modalState = {
    qty: 1,
    temp: 'ICED',
    sizeUp: false,
    addShot: false,
    soyMilk: false,
    decaf: false,
    strength: 'normal'
  };
  updateOptionModalUI();
  
  closeOptionModal();
});

optClose.addEventListener('click', closeOptionModal);
optionModalOverlay.addEventListener('click', (e) => {
  if (e.target === optionModalOverlay) closeOptionModal();
});

// Cart Logic
function updateCartUI() {
  const qty = cart.reduce((sum, c) => sum + c.qty, 0);
  cartBadge.textContent = qty;
  if (qty > 0) {
    fabCart.classList.add('visible');
    fabTotal.textContent = getTotal().toLocaleString() + '원';
  } else {
    fabCart.classList.remove('visible');
  }
}

function getTotal() {
  return cart.reduce((sum, c) => sum + getItemPrice(c, c.options) * c.qty, 0);
}

function renderCartSheet() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">담은 메뉴가 없어요.</p>';
    cartFooter.style.display = 'none';
    return;
  }

  cartItems.innerHTML = cart.map((item, idx) => {
    const o = item.options;
    const price = getItemPrice(item, o);
    return `
    <div class="cart-item">
      <div class="item-top">
        <div class="item-emoji">${item.emoji}</div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-price">${(price * item.qty).toLocaleString()}원</div>
        </div>
        <div class="item-qty">
          <button class="qty-btn" data-idx="${idx}" data-delta="-1">&#8722;</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-idx="${idx}" data-delta="1">+</button>
        </div>
      </div>
      <div class="item-options">
        <div class="option-row">
          <button class="opt-btn hot ${o.temp === 'HOT' ? 'active' : ''}" data-idx="${idx}" data-key="temp" data-val="HOT">HOT</button>
          <button class="opt-btn iced ${o.temp === 'ICED' ? 'active' : ''}" data-idx="${idx}" data-key="temp" data-val="ICED">ICED</button>
          <button class="opt-btn sizeup ${o.sizeUp ? 'active' : ''}" data-idx="${idx}" data-key="sizeUp">Size Up</button>
        </div>
        <div class="option-row">
          ${item.hasCoffee ? `<button class="opt-btn addshot ${o.addShot ? 'active' : ''}" data-idx="${idx}" data-key="addShot">샷 추가</button>` : ''}
          ${item.hasMilk ? `<button class="opt-btn soymilk ${o.soyMilk ? 'active' : ''}" data-idx="${idx}" data-key="soyMilk">두유 변경</button>` : ''}
        </div>
        <div class="option-row">
          <button class="opt-btn ${o.strength === 'light' ? 'active' : ''}" data-idx="${idx}" data-key="strength" data-val="light">연하게</button>
          <button class="opt-btn ${o.strength === 'normal' ? 'active' : ''}" data-idx="${idx}" data-key="strength" data-val="normal">보통</button>
        </div>
        ${item.hasCoffee ? `
        <div class="option-row decaf-row">
          <span class="option-label">디카페인</span>
          <label class="radio-label">
            <input type="radio" name="decaf-${idx}" value="false" ${!o.decaf ? 'checked' : ''} data-idx="${idx}" data-val="false">
            <span>일반</span>
          </label>
          <label class="radio-label">
            <input type="radio" name="decaf-${idx}" value="true" ${o.decaf ? 'checked' : ''} data-idx="${idx}" data-val="true">
            <span>디카페인</span>
          </label>
        </div>` : ''}
      </div>
    </div>`;
  }).join('');

  attachCartListeners();
  totalPrice.textContent = getTotal().toLocaleString() + '원';
  cartFooter.style.display = 'block';
}

function attachCartListeners() {
  cartItems.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      const delta = parseInt(btn.dataset.delta);
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
      updateCartUI();
      renderCartSheet();
    });
  });

  cartItems.querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      const key = btn.dataset.key;
      const val = btn.dataset.val;
      if (key === 'temp' || key === 'strength') {
        cart[idx].options[key] = val;
      } else {
        cart[idx].options[key] = !cart[idx].options[key];
      }
      renderCartSheet();
      updateCartUI();
    });
  });

  cartItems.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const idx = parseInt(radio.dataset.idx);
      cart[idx].options.decaf = radio.dataset.val === 'true';
      renderCartSheet();
      updateCartUI();
    });
  });
}

function openCart() {
  const name = ordererSelect.value;
  sheetOrderer.textContent = name ? `${name}님의 주문` : '';
  renderCartSheet();
  overlay.classList.add('active');
  cartSheet.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  overlay.classList.remove('active');
  cartSheet.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
fabCart.addEventListener('click', openCart);
sheetClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

categoryNav.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    categoryNav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderMenu();
  });
});

function optionSummary(options, hasCoffee, hasMilk) {
  const parts = [];
  parts.push(options.temp);
  if (options.sizeUp) parts.push('Size Up (+1.0)');
  if (hasCoffee && options.addShot) parts.push('샷 추가 (+0.5)');
  const strengthMap = { light: '연하게', normal: '보통' };
  parts.push(strengthMap[options.strength]);
  if (hasCoffee && options.decaf) parts.push('디카페인 (+0.5)');
  if (hasMilk && options.soyMilk) parts.push('두유 변경 (+0.5)');
  return parts.join(' · ');
}

async function sendToTelegram(orderer, cartData, total) {
  const now = new Date().toLocaleString('ko-KR', { hour12: false });
  const text =
    `☕ <b>새 주문이 들어왔어요!</b>\n` +
    `🕐 ${now}\n` +
    `👤 주문자: <b>${orderer}</b>\n\n` +
    cartData.map(c =>
      `• ${c.name} x${c.qty}\n  └ ${optionSummary(c.options, c.hasCoffee, c.hasMilk)}`
    ).join('\n') +
    `\n\n💰 합계: <b>${total}원</b>`;

  try {
    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' }),
    });
  } catch (e) {
    console.error('텔레그램 전송 실패:', e);
  }
}

orderBtn.addEventListener('click', async () => {
  if (!ordererSelect.value) {
    alert('주문자를 선택해주세요.');
    return;
  }
  const orderer = ordererSelect.value;
  const total = getTotal().toLocaleString();
  const lines = cart.map(c =>
    `• ${c.name} x${c.qty}  [${optionSummary(c.options, c.hasCoffee, c.hasMilk)}]`
  ).join('\n');

  orderBtn.disabled = true;
  orderBtn.textContent = '주문 중...';
  await sendToTelegram(orderer, cart, total);
  orderBtn.disabled = false;
  orderBtn.textContent = '주문하기';

  modalMsg.textContent = `주문자: ${orderer}\n\n${lines}\n\n총 ${total}원 결제가 완료되었습니다.\n잠시 후 준비됩니다!`;
  closeCart();
  setTimeout(() => { modalOverlay.classList.add('active'); }, 300);
});

modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  cart = [];
  updateCartUI();
});

ordererSelect.addEventListener('change', () => {
  if (cartSheet.classList.contains('open')) {
    sheetOrderer.textContent = ordererSelect.value ? `${ordererSelect.value}님의 주문` : '';
  }
});

renderMenu();
