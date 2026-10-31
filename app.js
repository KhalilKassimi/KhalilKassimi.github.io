/* ============================================================
   MATBAKHI — بيانات المتجر / Store data
   👉 بدّل هنا: زيد / بدّل / حيّد المنتجات، الأثمنة والصور
   👉 To edit: change products, prices and images below
   ============================================================ */
const WHATSAPP_NUMBER = "212696672715"; // رقم الواتساب لاستقبال الطلبيات

const PRODUCTS = [
  { id:1, img:IMAGES.cocotte, price:349, cat:"cuisson", badge:"new",
    ar:{name:"طنجرة الضغط 8 لتر", desc:"إينوكس عالي الجودة، آمنة وسريعة للطهي اليومي."},
    fr:{name:"Cocotte-minute 8 L", desc:"Inox haute qualité, cuisson rapide et sûre au quotidien."} },
  { id:2, img:IMAGES['set-cuisson'], price:599, cat:"cuisson", badge:"best",
    ar:{name:"طقم طناجر إينوكس — 10 قطع", desc:"طقم كامل لجميع الاستعمالات، قاعدة سميكة توزع الحرارة."},
    fr:{name:"Batterie inox — 10 pièces", desc:"Set complet, fond épais pour une chaleur homogène."} },
  { id:3, img:IMAGES.poele, price:129, cat:"cuisson", badge:"",
    ar:{name:"مقلاة غير لاصقة", desc:"طهي صحي بلا زيت كثير، سهلة التنظيف."},
    fr:{name:"Poêle antiadhésive", desc:"Cuisson saine, nettoyage facile."} },
  { id:4, img:IMAGES.tagine, price:89, cat:"traditionnel", badge:"best",
    ar:{name:"طاجين فخار تقليدي", desc:"فخار طبيعي، مثالي لطواجن بلدية بنكهة أصيلة."},
    fr:{name:"Tagine traditionnel en terre", desc:"Terre cuite naturelle, pour des tajines authentiques."} },
  { id:5, img:IMAGES.couscoussier, price:179, cat:"traditionnel", badge:"",
    ar:{name:"كسكاس ألمنيوم", desc:"حجم عائلي، تبخير مثالي للكسكس."},
    fr:{name:"Couscoussier aluminium", desc:"Format familial, vapeur parfaite pour le couscous."} },
  { id:6, img:IMAGES.berrad, price:149, cat:"the", badge:"new",
    ar:{name:"براد أتاي منقوش", desc:"تصميم مغربي أصيل، يحافظ على حرارة أتاي."},
    fr:{name:"Théière marocaine ciselée", desc:"Design marocain authentique, garde la chaleur du thé."} },
  { id:7, img:IMAGES['service-table'], price:329, cat:"table", badge:"",
    ar:{name:"طقم أطباق — 24 قطعة", desc:"سيراميك أنيق لـ 6 أشخاص، للاستعمال اليومي والضيوف."},
    fr:{name:"Service de table — 24 pièces", desc:"Céramique élégante pour 6 personnes."} },
  { id:8, img:IMAGES['verres-the'], price:99, cat:"the", badge:"",
    ar:{name:"كيسان أتاي مزخرفة — 6", desc:"زجاج مزخرف على الطريقة المغربية."},
    fr:{name:"Verres à thé décorés — 6", desc:"Verres décorés à la marocaine."} },
];

/* ------------------ Translations ------------------ */
const STRINGS = {
  ar: {
    brand:"مطبخي", nav_catalog:"الكتالوغ", nav_why:"علاش حنا", nav_contact:"اتصل بينا",
    hero_kicker:"توصيل لجميع المدن المغربية",
    hero_title:"كل ما يحتاجه مطبخك،<br>بجودة عالية وثمن مناسب",
    hero_sub:"طناجر، طواجن تقليدية، برارد أتاي، وأواني المائدة — اختار اللي عجبك وخلّص عند الاستلام.",
    hero_cta:"شوف الكتالوغ", hero_wa:"واتساب",
    b1:"توصيل سريع لجميع المدن", b2:"الدفع عند الاستلام", b3:"جودة مضمونة",
    cat_title:"الكتالوغ", cat_sub:"اختار المنتج وزيدو للسلة، ومن بعد صيفط الطلبية فواتساب.",
    why_title:"علاش تختار مطبخي؟",
    w1t:"أثمنة مناسبة", w1d:"منتجات مختارة بعناية بأثمنة في المتناول، بلا وسطاء.",
    w2t:"طلب ساهل", w2d:"زيد للسلة وصيفط الطلبية مباشرة فواتساب — بلا حساب وبلا تعقيد.",
    w3t:"توصيل للمغرب كامل", w3d:"كنوصلو لجميع المدن والقرى، والخلاص كيكون عند الاستلام.",
    c_title:"تواصل معانا", c_sub:"عندك سؤال على شي منتج؟ صيفط لينا رسالة فواتساب.",
    c_btn:"راسلنا على واتساب",
    footer:"© 2026 مطبخي — جميع الحقوق محفوظة",
    cart_title:"سلة التسوق", cart_total:"المجموع", cart_checkout:"صيفط الطلبية فواتساب",
    cart_empty:"السلة خاوية — زيد شي منتج!",
    currency:"درهم", add:"زيد للسلة", added:"تزاد للسلة ✅",
    all:"الكل", cuisson:"الطهي", traditionnel:"تقليدي", the:"أتاي", table:"المائدة",
    badge_new:"جديد", badge_best:"الأكثر مبيعاً",
    order_intro:"السلام عليكم، بغيت نطلب من *مطبخي* :",
    order_total:"*المجموع*",
    order_empty:"السلة خاوية!",
  },
  fr: {
    brand:"مطبخي", nav_catalog:"Catalogue", nav_why:"Pourquoi nous", nav_contact:"Contact",
    hero_kicker:"Livraison dans tout le Maroc",
    hero_title:"Tout pour votre cuisine,<br>qualité et bon prix",
    hero_sub:"Cocottes, tajines traditionnels, théières et arts de la table — choisissez et payez à la livraison.",
    hero_cta:"Voir le catalogue", hero_wa:"WhatsApp",
    b1:"Livraison rapide partout", b2:"Paiement à la livraison", b3:"Qualité garantie",
    cat_title:"Catalogue", cat_sub:"Ajoutez au panier, puis envoyez la commande sur WhatsApp.",
    why_title:"Pourquoi choisir Matbakhi ?",
    w1t:"Prix abordables", w1d:"Des produits sélectionnés avec soin, sans intermédiaires.",
    w2t:"Commande simple", w2d:"Ajoutez au panier et envoyez sur WhatsApp — sans compte, sans complication.",
    w3t:"Livraison partout au Maroc", w3d:"Nous livrons toutes les villes, paiement à la réception.",
    c_title:"Contactez-nous", c_sub:"Une question sur un produit ? Écrivez-nous sur WhatsApp.",
    c_btn:"Nous écrire sur WhatsApp",
    footer:"© 2026 Matbakhi — Tous droits réservés",
    cart_title:"Panier", cart_total:"Total", cart_checkout:"Envoyer la commande sur WhatsApp",
    cart_empty:"Panier vide — ajoutez un produit !",
    currency:"DH", add:"Ajouter", added:"Ajouté au panier ✅",
    all:"Tout", cuisson:"Cuisson", traditionnel:"Traditionnel", the:"Thé", table:"Table",
    badge_new:"Nouveau", badge_best:"Top ventes",
    order_intro:"Bonjour, je veux commander chez *Matbakhi* :",
    order_total:"*Total*",
    order_empty:"Panier vide !",
  }
};

let lang = localStorage.getItem("matbakhi_lang") || "ar";
let cart = JSON.parse(localStorage.getItem("matbakhi_cart") || "{}");
let activeFilter = "all";

const $ = s => document.querySelector(s);
const t = k => STRINGS[lang][k] || k;
const pname = p => p[lang].name;
const pdesc = p => p[lang].desc;

/* ------------------ Language ------------------ */
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    el.innerHTML = t(k);
  });
  document.title = lang === "ar"
    ? "مطبخي | Matbakhi — أواني المطبخ والمنزل"
    : "Matbakhi | مطبخي — Ustensiles de cuisine";
  $("#langToggle").textContent = lang === "ar" ? "FR" : "عربي";
  renderFilters(); renderProducts(); renderCart();
  localStorage.setItem("matbakhi_lang", lang);
}
$("#langToggle").addEventListener("click", ()=>{ lang = lang === "ar" ? "fr" : "ar"; applyLang(); });

/* ------------------ Products ------------------ */
function renderFilters(){
  const cats = ["all","cuisson","traditionnel","the","table"];
  $("#filters").innerHTML = cats.map(c=>
    `<button class="filter-btn ${c===activeFilter?"active":""}" data-cat="${c}">${t(c)}</button>`
  ).join("");
  document.querySelectorAll(".filter-btn").forEach(b=>
    b.addEventListener("click", ()=>{ activeFilter = b.dataset.cat; renderFilters(); renderProducts(); })
  );
}
function renderProducts(){
  const list = PRODUCTS.filter(p => activeFilter==="all" || p.cat===activeFilter);
  $("#productGrid").innerHTML = list.map(p=>`
    <div class="card">
      <div class="card-img">
        <img src="${p.img}" alt="${pname(p)}" loading="lazy">
        ${p.badge?`<span class="card-badge">${t("badge_"+p.badge)}</span>`:""}
      </div>
      <div class="card-body">
        <h3>${pname(p)}</h3>
        <p class="card-desc">${pdesc(p)}</p>
        <div class="card-foot">
          <span class="price">${p.price} <small>${t("currency")}</small></span>
          <button class="add-btn" data-id="${p.id}">${t("add")}</button>
        </div>
      </div>
    </div>`).join("");
  document.querySelectorAll(".add-btn").forEach(b=>
    b.addEventListener("click", ()=> addToCart(+b.dataset.id))
  );
}

/* ------------------ Cart ------------------ */
function saveCart(){ localStorage.setItem("matbakhi_cart", JSON.stringify(cart)); }
function cartQty(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartSum(){ return Object.entries(cart).reduce((s,[id,q])=>{
  const p = PRODUCTS.find(x=>x.id===+id); return s + (p?p.price*q:0); },0); }

function addToCart(id){
  cart[id] = (cart[id]||0)+1; saveCart(); renderCart();
  const toast = $("#toast"); toast.textContent = t("added");
  toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 1600);
}
function changeQty(id,d){
  cart[id]=(cart[id]||0)+d;
  if(cart[id]<=0) delete cart[id];
  saveCart(); renderCart();
}
function renderCart(){
  $("#cartCount").textContent = cartQty();
  const box = $("#cartItems");
  const ids = Object.keys(cart);
  if(!ids.length){ box.innerHTML = `<div class="cart-empty">${t("cart_empty")}</div>`; }
  else box.innerHTML = ids.map(id=>{
    const p = PRODUCTS.find(x=>x.id===+id); if(!p) return "";
    return `<div class="cart-item">
      <img src="${p.img}" alt="">
      <div class="cart-item-info"><strong>${pname(p)}</strong><span>${p.price} ${t("currency")}</span></div>
      <div class="qty">
        <button data-a="-" data-id="${id}">−</button><span>${cart[id]}</span><button data-a="+" data-id="${id}">+</button>
      </div></div>`;
  }).join("");
  document.querySelectorAll(".qty button").forEach(b=>
    b.addEventListener("click", ()=> changeQty(b.dataset.id, b.dataset.a==="+"?1:-1))
  );
  $("#cartTotal").textContent = `${cartSum()} ${t("currency")}`;
}

/* ------------------ Drawer ------------------ */
const drawer=$("#cartDrawer"), overlay=$("#cartOverlay");
const openCart=()=>{drawer.classList.add("open");overlay.classList.add("open");};
const closeCart=()=>{drawer.classList.remove("open");overlay.classList.remove("open");};
$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

/* ------------------ WhatsApp checkout ------------------ */
$("#checkoutBtn").addEventListener("click", ()=>{
  const ids = Object.keys(cart);
  if(!ids.length){ alert(t("order_empty")); return; }
  const lines = ids.map(id=>{
    const p = PRODUCTS.find(x=>x.id===+id);
    return `• ${pname(p)} × ${cart[id]} — ${p.price*cart[id]} ${t("currency")}`;
  });
  const msg = `${t("order_intro")}\n\n${lines.join("\n")}\n\n${t("order_total")} : ${cartSum()} ${t("currency")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
});

/* ------------------ Init ------------------ */
document.getElementById('heroImg').src = IMAGES.tagine;
applyLang();
