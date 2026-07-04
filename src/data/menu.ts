import type { AddOn, Category, Dish, Restaurant } from "@/types";

const u = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ── фото (Unsplash — заменить на фирменные из Instagram) ── */
const IMG = {
  hero: u("photo-1414235077428-338989a2e8c0", 1600),
  steak1: u("photo-1600891964092-4316c288032e"),
  steak2: u("photo-1546964124-0cce460f38ef"),
  grill1: u("photo-1544025162-d76694265947"),
  grill2: u("photo-1555939594-58d7cb561ad1"),
  burger1: u("photo-1568901346375-23c9450c58cd"),
  burger2: u("photo-1553979459-d2229ba7433b"),
  tomyam: u("photo-1548943487-a2e4e43b4853"),
  soup2: u("photo-1547592166-23ac45744acd"),
  salad1: u("photo-1512621776951-a57141f2eefd"),
  salad2: u("photo-1546069901-ba9599a7e63c"),
  breakfast1: u("photo-1525351484163-7529414344d8"),
  breakfast2: u("photo-1493770348161-369560ae357d"),
  dessert1: u("photo-1578985545062-69928b1d9587"),
  dessert2: u("photo-1563805042-7684c019e1cb"),
  drink1: u("photo-1544145945-f90425340c7e"),
  drink2: u("photo-1437418747212-8d9709afab22"),
};

/** номер WhatsApp/телефона — при необходимости замените на прямой номер Maarek */
export const PHONE = "+996503860000";
export const WHATSAPP = "996503860000";
export const TWO_GIS = "https://2gis.kg/bishkek/firm/70000001104039407";
export const INSTAGRAM = "https://www.instagram.com/maarek_bishkek/";

export const RESTAURANT: Restaurant = {
  name: "Maarek",
  tagline: "Ресторан · Панорама города · Халал",
  heroImage: IMG.hero,
  rating: 4.7,
  reviews: 804,
  deliveryTime: "40–50 мин",
  hours: "11:00 – 24:00",
  distance: "2,4 км",
  deliveryFee: 250,
  freeDeliveryOver: 4000,
  minOrder: 1500,
  address: "БЦ Россия, ул. Раззакова, 19 · 17 этаж",
};

export const CATEGORIES: Category[] = [
  { id: "breakfasts", label: "Завтраки" },
  { id: "steaks", label: "Стейки" },
  { id: "grill", label: "Гриль" },
  { id: "burgers", label: "Бургеры" },
  { id: "soups", label: "Супы" },
  { id: "salads", label: "Салаты" },
  { id: "desserts", label: "Десерты" },
  { id: "drinks", label: "Напитки" },
];

/* ── добавки ─────────────────────────────────────────────── */
const SAUCES: AddOn[] = [
  { id: "pepper", name: "Перечный соус", price: 150 },
  { id: "mushroom", name: "Грибной соус", price: 150 },
  { id: "bbq", name: "Дымный BBQ", price: 120 },
  { id: "garlic", name: "Чесночный соус", price: 100 },
];

const X = {
  breakfasts: [
    { id: "avocado", name: "Авокадо", price: 180 },
    { id: "beefbacon", name: "Говяжий бекон", price: 220 },
    { id: "bread", name: "Домашний хлеб", price: 90 },
  ],
  steaks: [
    { id: "veg", name: "Овощи на углях", price: 350 },
    { id: "potato", name: "Картофельное пюре с трюфелем", price: 290 },
    { id: "salat", name: "Микс-салат", price: 250 },
  ],
  grill: [
    { id: "veg", name: "Овощи на углях", price: 350 },
    { id: "fries", name: "Картофель фри", price: 220 },
    { id: "bread", name: "Домашний хлеб", price: 90 },
  ],
  burgers: [
    { id: "patty", name: "Дополнительная котлета", price: 290 },
    { id: "cheese", name: "Двойной сыр", price: 120 },
    { id: "jalapeno", name: "Халапеньо", price: 80 },
  ],
  soups: [
    { id: "shrimp", name: "Дополнительные креветки", price: 320 },
    { id: "bread", name: "Домашний хлеб", price: 90 },
  ],
  salads: [
    { id: "shrimp", name: "Тигровые креветки", price: 320 },
    { id: "beef", name: "Ростбиф", price: 290 },
  ],
  desserts: [
    { id: "berries", name: "Свежие ягоды", price: 180 },
    { id: "icecream", name: "Шарик пломбира", price: 120 },
  ],
  drinks: [
    { id: "shot", name: "Двойной эспрессо", price: 120 },
    { id: "mint", name: "Свежая мята", price: 60 },
  ],
} satisfies Record<string, AddOn[]>;

/* ── меню ────────────────────────────────────────────────── */
export const DISHES: Dish[] = [
  // Завтраки (до 12:00, но в меню весь день)
  {
    id: "maarek-breakfast",
    category: "breakfasts",
    name: "Завтрак Маарек",
    description:
      "Яйца от фермеров, говяжий бекон, печёные томаты и домашний хлеб. Завтрак от бренд-шефа с видом на город.",
    price: 650, weight: 380, kcal: 560, protein: 28, fat: 34, carbs: 36,
    rating: 4.9, reviews: 412, cookTime: 15,
    images: [IMG.breakfast1, IMG.breakfast2],
    badges: ["popular"],
    ingredients: ["Яйца", "Говяжий бекон", "Печёные томаты", "Домашний хлеб", "Микрозелень"],
    allergens: ["Глютен", "Яйцо"],
    extras: X.breakfasts, sauces: [],
  },
  {
    id: "syrniki",
    category: "breakfasts",
    name: "Сырники со сметаной",
    description:
      "Пышные, из фермерского творога, с домашней сметаной и вареньем из горной малины.",
    price: 450, weight: 260, kcal: 430, protein: 22, fat: 20, carbs: 42,
    rating: 4.8, reviews: 356, cookTime: 12,
    images: [IMG.breakfast2, IMG.dessert2],
    badges: [],
    ingredients: ["Творог", "Сметана", "Малиновое варенье", "Мука"],
    allergens: ["Глютен", "Молоко", "Яйцо"],
    extras: X.breakfasts, sauces: [],
  },
  {
    id: "truffle-omelet",
    category: "breakfasts",
    name: "Омлет с трюфелем",
    description:
      "Кремовый омлет с трюфельным маслом и пармезаном. Простые вещи, сделанные безупречно.",
    price: 590, weight: 240, kcal: 410, protein: 20, fat: 32, carbs: 8,
    rating: 4.8, reviews: 189, cookTime: 12,
    images: [IMG.breakfast1, IMG.breakfast2],
    badges: ["new"],
    ingredients: ["Яйца", "Трюфельное масло", "Пармезан", "Шнитт-лук"],
    allergens: ["Молоко", "Яйцо"],
    extras: X.breakfasts, sauces: [],
  },

  // Стейки
  {
    id: "ribeye",
    category: "steaks",
    name: "Рибай на углях",
    description:
      "Мраморная говядина зернового откорма, угли и смоук от бренд-шефа. Отдых под фольгой — обязателен.",
    price: 2900, weight: 300, kcal: 720, protein: 56, fat: 54, carbs: 2,
    rating: 4.9, reviews: 324, cookTime: 25,
    images: [IMG.steak1, IMG.steak2],
    badges: ["popular"],
    ingredients: ["Говядина зернового откорма", "Дымная соль", "Тимьян", "Масло гхи"],
    allergens: ["Молоко"],
    sizes: [
      { id: "g300", label: "300 г", priceDelta: 0 },
      { id: "g450", label: "450 г", priceDelta: 1300 },
    ],
    extras: X.steaks, sauces: SAUCES,
  },
  {
    id: "striploin",
    category: "steaks",
    name: "Стриплойн",
    description:
      "Нью-Йорк с плотной текстурой и ярким мясным вкусом. Для тех, кто любит пожёстче характером.",
    price: 2200, weight: 280, kcal: 640, protein: 52, fat: 44, carbs: 2,
    rating: 4.8, reviews: 217, cookTime: 22,
    images: [IMG.steak2, IMG.steak1],
    badges: [],
    ingredients: ["Говядина", "Розмарин", "Чеснок", "Морская соль"],
    allergens: [],
    extras: X.steaks, sauces: SAUCES,
  },
  {
    id: "filet-mignon",
    category: "steaks",
    name: "Филе-миньон",
    description:
      "Самая нежная вырезка, минимум жира, максимум деликатности. Готовим не выше medium.",
    price: 2600, weight: 220, kcal: 480, protein: 46, fat: 28, carbs: 1,
    rating: 4.9, reviews: 156, cookTime: 20,
    images: [IMG.steak1, IMG.grill1],
    badges: ["new"],
    ingredients: ["Говяжья вырезка", "Сливочное масло", "Тимьян"],
    allergens: ["Молоко"],
    extras: X.steaks, sauces: SAUCES,
  },

  // Гриль
  {
    id: "lamb-rack",
    category: "grill",
    name: "Каре ягнёнка",
    description:
      "Молодой ягнёнок в травах, обожжённый на углях. Розовый внутри, карамельный снаружи.",
    price: 1900, weight: 320, kcal: 680, protein: 48, fat: 50, carbs: 4,
    rating: 4.9, reviews: 268, cookTime: 25,
    images: [IMG.grill1, IMG.grill2],
    badges: ["popular"],
    ingredients: ["Каре ягнёнка", "Розмарин", "Чеснок", "Дижонская горчица"],
    allergens: ["Горчица"],
    extras: X.grill, sauces: SAUCES,
  },
  {
    id: "grilled-chicken",
    category: "grill",
    name: "Цыплёнок на углях",
    description:
      "Фермерский цыплёнок в цитрусовом маринаде, хрустящая кожа и сочное мясо.",
    price: 1100, weight: 400, kcal: 620, protein: 54, fat: 38, carbs: 6,
    rating: 4.8, reviews: 342, cookTime: 30,
    images: [IMG.grill2, IMG.grill1],
    badges: [],
    ingredients: ["Цыплёнок", "Цитрусовый маринад", "Паприка", "Чеснок"],
    allergens: [],
    extras: X.grill, sauces: SAUCES,
  },
  {
    id: "lulya-lamb",
    category: "grill",
    name: "Люля из ягнёнка",
    description:
      "Рубленый ягнёнок с курдюком и специями, дым и хруст лука. Классика мангала в вечернем костюме.",
    price: 850, weight: 240, kcal: 520, protein: 32, fat: 40, carbs: 5,
    rating: 4.8, reviews: 298, cookTime: 18,
    images: [IMG.grill2, IMG.steak2],
    badges: ["spicy"],
    ingredients: ["Ягнёнок", "Курдюк", "Лук", "Кинза", "Специи"],
    allergens: [],
    extras: X.grill, sauces: SAUCES,
  },

  // Бургеры
  {
    id: "maarek-burger",
    category: "burgers",
    name: "Маарек бургер",
    description:
      "Мраморная котлета, трюфельный соус, карамельный лук и выдержанный чеддер на фирменной булке.",
    price: 890, weight: 380, kcal: 760, protein: 40, fat: 46, carbs: 48,
    rating: 4.9, reviews: 451, cookTime: 15,
    images: [IMG.burger1, IMG.burger2],
    badges: ["popular"],
    ingredients: ["Мраморная говядина", "Трюфельный соус", "Чеддер", "Карамельный лук", "Бриошь"],
    allergens: ["Глютен", "Молоко", "Яйцо"],
    sizes: [
      { id: "single", label: "Одинарный", priceDelta: 0 },
      { id: "double", label: "Двойной", priceDelta: 290 },
    ],
    extras: X.burgers, sauces: SAUCES,
  },
  {
    id: "cheese-smash",
    category: "burgers",
    name: "Чиз-смэш",
    description:
      "Две тонкие котлеты с хрустящей корочкой, плавленый чеддер и солёные огурцы.",
    price: 690, weight: 320, kcal: 680, protein: 36, fat: 42, carbs: 44,
    rating: 4.8, reviews: 387, cookTime: 12,
    images: [IMG.burger2, IMG.burger1],
    badges: [],
    ingredients: ["Говядина", "Чеддер", "Солёные огурцы", "Горчичный соус", "Бриошь"],
    allergens: ["Глютен", "Молоко", "Горчица"],
    extras: X.burgers, sauces: SAUCES,
  },
  {
    id: "chicken-crunch",
    category: "burgers",
    name: "Чикен кранч",
    description:
      "Хрустящее куриное бедро, острый майонез и свежий слоу из капусты.",
    price: 650, weight: 340, kcal: 640, protein: 34, fat: 36, carbs: 46,
    rating: 4.7, reviews: 276, cookTime: 14,
    images: [IMG.burger1, IMG.burger2],
    badges: ["spicy"],
    ingredients: ["Куриное бедро", "Острый майонез", "Капустный слоу", "Бриошь"],
    allergens: ["Глютен", "Яйцо"],
    extras: X.burgers, sauces: SAUCES,
  },

  // Супы
  {
    id: "tom-yam",
    category: "soups",
    name: "Том-ям с креветками",
    description:
      "Тигровые креветки, кокосовое молоко, лемонграсс и галангал. Наш безалкогольный хит вечера.",
    price: 790, weight: 400, kcal: 420, protein: 24, fat: 26, carbs: 24,
    rating: 4.9, reviews: 512, cookTime: 15,
    images: [IMG.tomyam, IMG.soup2],
    badges: ["popular", "spicy"],
    ingredients: ["Тигровые креветки", "Кокосовое молоко", "Лемонграсс", "Галангал", "Грибы"],
    allergens: ["Ракообразные", "Рыба"],
    extras: X.soups, sauces: [],
  },
  {
    id: "pumpkin-cream",
    category: "soups",
    name: "Крем-суп из тыквы",
    description:
      "Печёная тыква, кокосовые сливки и тыквенные семечки. Бархат в тарелке.",
    price: 490, weight: 350, kcal: 320, protein: 8, fat: 18, carbs: 34,
    rating: 4.7, reviews: 203, cookTime: 10,
    images: [IMG.soup2, IMG.tomyam],
    badges: ["veg"],
    ingredients: ["Тыква", "Кокосовые сливки", "Тыквенные семечки", "Имбирь"],
    allergens: [],
    extras: X.soups, sauces: [],
  },
  {
    id: "shorpo",
    category: "soups",
    name: "Наваристый шорпо",
    description:
      "Дань кыргызской классике: молодая баранина, томлёный бульон и свежая зелень.",
    price: 590, weight: 450, kcal: 460, protein: 30, fat: 26, carbs: 22,
    rating: 4.8, reviews: 244, cookTime: 15,
    images: [IMG.soup2, IMG.grill1],
    badges: [],
    ingredients: ["Баранина", "Картофель", "Морковь", "Зелень"],
    allergens: [],
    extras: X.soups, sauces: [],
  },

  // Салаты
  {
    id: "caesar-shrimp",
    category: "salads",
    name: "Цезарь с креветками",
    description:
      "Тигровые креветки на гриле, ромэн, пармезан и соус на анчоусах по классике.",
    price: 750, weight: 300, kcal: 480, protein: 28, fat: 32, carbs: 20,
    rating: 4.8, reviews: 367, cookTime: 12,
    images: [IMG.salad2, IMG.salad1],
    badges: ["popular"],
    ingredients: ["Тигровые креветки", "Ромэн", "Пармезан", "Гренки", "Соус цезарь"],
    allergens: ["Ракообразные", "Глютен", "Молоко", "Яйцо", "Рыба"],
    extras: X.salads, sauces: [],
  },
  {
    id: "roastbeef-salad",
    category: "salads",
    name: "Салат с ростбифом",
    description:
      "Розовый ростбиф, печёный перец, руккола и горчичная заправка.",
    price: 790, weight: 280, kcal: 420, protein: 30, fat: 28, carbs: 12,
    rating: 4.8, reviews: 198, cookTime: 12,
    images: [IMG.salad1, IMG.steak2],
    badges: ["new"],
    ingredients: ["Ростбиф", "Руккола", "Печёный перец", "Пармезан", "Горчичная заправка"],
    allergens: ["Молоко", "Горчица"],
    extras: X.salads, sauces: [],
  },
  {
    id: "burrata",
    category: "salads",
    name: "Буррата с томатами",
    description:
      "Кремовая буррата, сладкие томаты, базилик и оливковое масло первого отжима.",
    price: 690, weight: 260, kcal: 380, protein: 16, fat: 28, carbs: 14,
    rating: 4.9, reviews: 285, cookTime: 8,
    images: [IMG.salad1, IMG.salad2],
    badges: ["veg", "popular"],
    ingredients: ["Буррата", "Томаты", "Базилик", "Оливковое масло"],
    allergens: ["Молоко"],
    extras: X.salads, sauces: [],
  },

  // Десерты
  {
    id: "medovik",
    category: "desserts",
    name: "Медовик Маарек",
    description:
      "Двенадцать тонких коржей, крем на горном мёде и карамельная крошка.",
    price: 450, weight: 170, kcal: 470, protein: 7, fat: 24, carbs: 56,
    rating: 4.9, reviews: 421, cookTime: 5,
    images: [IMG.dessert1, IMG.dessert2],
    badges: ["popular"],
    ingredients: ["Медовые коржи", "Сливочный крем", "Горный мёд", "Карамель"],
    allergens: ["Глютен", "Молоко", "Яйцо"],
    extras: X.desserts, sauces: [],
  },
  {
    id: "fondant",
    category: "desserts",
    name: "Шоколадный фондан",
    description:
      "Тёплый фондан с жидким центром из бельгийского шоколада и шариком пломбира.",
    price: 490, weight: 180, kcal: 520, protein: 8, fat: 30, carbs: 54,
    rating: 4.8, reviews: 312, cookTime: 14,
    images: [IMG.dessert1, IMG.dessert2],
    badges: [],
    ingredients: ["Бельгийский шоколад", "Сливочное масло", "Пломбир"],
    allergens: ["Глютен", "Молоко", "Яйцо"],
    extras: X.desserts, sauces: [],
  },
  {
    id: "san-sebastian",
    category: "desserts",
    name: "Чизкейк Сан-Себастьян",
    description:
      "Подпалённый баскский чизкейк с кремовой серединой. Без коржа — только характер.",
    price: 520, weight: 160, kcal: 450, protein: 9, fat: 32, carbs: 34,
    rating: 4.9, reviews: 267, cookTime: 5,
    images: [IMG.dessert2, IMG.dessert1],
    badges: ["new"],
    ingredients: ["Сливочный сыр", "Сливки", "Яйца", "Ваниль"],
    allergens: ["Молоко", "Яйцо"],
    extras: X.desserts, sauces: [],
  },

  // Напитки (безалкогольные — халал)
  {
    id: "raf",
    category: "drinks",
    name: "Авторский раф",
    description:
      "Сливочный раф на колумбийской арабике с ноткой карамели и морской соли.",
    price: 350, weight: 300, kcal: 260, protein: 6, fat: 14, carbs: 28,
    rating: 4.8, reviews: 389, cookTime: 6,
    images: [IMG.drink1, IMG.drink2],
    badges: ["popular"],
    ingredients: ["Эспрессо", "Сливки", "Карамель", "Морская соль"],
    allergens: ["Молоко"],
    extras: X.drinks, sauces: [],
  },
  {
    id: "citrus-lemonade",
    category: "drinks",
    name: "Цитрусовый лимонад",
    description:
      "Апельсин, лайм и розмарин со льдом. Кувшин на компанию или бокал для себя.",
    price: 390, weight: 400, kcal: 140, protein: 0, fat: 0, carbs: 34,
    rating: 4.7, reviews: 254, cookTime: 5,
    images: [IMG.drink2, IMG.drink1],
    badges: ["veg"],
    sizes: [
      { id: "glass", label: "Бокал 0,4 л", priceDelta: 0 },
      { id: "jug", label: "Кувшин 1 л", priceDelta: 350 },
    ],
    ingredients: ["Апельсин", "Лайм", "Розмарин", "Содовая"],
    allergens: [],
    extras: X.drinks, sauces: [],
  },
  {
    id: "matcha",
    category: "drinks",
    name: "Матча латте",
    description:
      "Церемониальная матча на выбор с коровьим или растительным молоком.",
    price: 370, weight: 300, kcal: 180, protein: 6, fat: 8, carbs: 20,
    rating: 4.7, reviews: 176, cookTime: 5,
    images: [IMG.drink1, IMG.drink2],
    badges: ["new"],
    ingredients: ["Матча", "Молоко", "Тростниковый сахар"],
    allergens: ["Молоко"],
    extras: X.drinks, sauces: [],
  },
];

export const DISH_MAP = new Map(DISHES.map((d) => [d.id, d]));

/** имитация API — даёт TanStack Query настоящее ожидание */
export async function fetchMenu(): Promise<Dish[]> {
  await new Promise((r) => setTimeout(r, 900));
  return DISHES;
}
