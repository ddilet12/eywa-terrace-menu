export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Предложения от Chef",
    items: [
      {
        name: "Бизнес-ланчи",
        description: "Каждый будний день. Идеальный перерыв со сбалансированным меню.",
        price: "от 4 390 ₸",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Cloud Lounge",
        description: "Дымные облака. Комплимент от EYWA: Каждый 10-й cloud — в подарок!",
        price: "от 4 000 ₸",
        image: "https://images.unsplash.com/photo-1582260655099-23ba5fb58cd8?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Закуски",
    items: [
      { name: "Индейка с кремом из пармезана", price: "3 490 ₸" },
      { name: "Паштет из конины", description: "с думбой из копченого курдюка и сальсой из маринованных огурчиков", price: "3 190 ₸" },
      { name: "Тыквенный хумус", description: "с овощами, жареными на углях и сыром фетакса", price: "3 190 ₸" },
      { name: "Тар-тар из семги", description: "с сырным соусом и хрустящим хлебом", price: "4 590 ₸" },
      { name: "Тигровые креветки в соусе спайси", description: "с микс салатом", price: "3 690 ₸", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop" },
      { name: "Fish & Chips", description: "из судака с хрустящим картофелем фри", price: "3 390 ₸" },
      { name: "Сыр гауда в хрустящем тесте фило", description: "с сырным соусом", price: "2 890 ₸" },
      { name: "Темпура из курицы", description: "с капустой кимчи и ананасовой сальсой", price: "2 890 ₸" },
    ]
  },
  {
    title: "Салаты",
    items: [
      { name: "Салат пипирана с кремом из сыра фетакса", description: "альтернатива классическому греческому салату", price: "3 490 ₸" },
      { name: "«Цезарь» в авторской подаче", description: "подается с кебабом из курицы, приготовленным на углях, листьями салата айсберг и гренками из хлеба бриошь", price: "3 190 ₸" },
      { name: "Салат из хрустящих баклажанов", description: "с кремом из творожного сыра и острым маринованным ананасом", price: "4 690 ₸" },
      { name: "Салат из жареной телятины", description: "с маринованными овощами и кремом из тыквенного хумуса", price: "3 590 ₸" },
      { name: "Салат с тигровыми креветками", description: "с соусом из манго, авокадо и свежей зеленью", price: "5 190 ₸", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
      { name: "Морепродукты обжаренные с лаймом и петрушкой", description: "на подушке из микса салата", price: "5 190 ₸" },
    ]
  },
  {
    title: "Супы и Паста",
    items: [
      { name: "Сливочный рыбный суп", description: "с семгой и томатами в собственном соку", price: "4 190 ₸" },
      { name: "Традиционный японский Рамен", description: "с ростбифом", price: "4 490 ₸" },
      { name: "Суп из белых грибов", description: "и шампиньонов", price: "2 190 ₸" },
      { name: "Том Ям классический", description: "с морепродуктами", price: "4 790 ₸", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b485f?q=80&w=600&auto=format&fit=crop" },
      { name: "Лингвини с морепродуктами", description: "с семгой и томатами в собственном соку", price: "4 290 ₸" },
      { name: "Пенне с лесными грибами", description: "и трюфельной пастой с ростбифом", price: "3 190 ₸" },
    ]
  },
  {
    title: "Блюда на гриле",
    items: [
      { name: "Стейк Ribeye (Говядина)", price: "7 890 ₸", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop" },
      { name: "Стейк T-bone (Говядина)", price: "7 890 ₸" },
      { name: "Стейк New York (Говядина)", price: "7 890 ₸" },
      { name: "Стейк Ribeye (Конина)", price: "7 890 ₸" },
      { name: "Дорадо на углях (Рыба)", price: "6 890 ₸" },
      { name: "Колбаски с картофелем фри (Микс)", description: "и квашенной капустой", price: "3 690 ₸" },
      { name: "Овощи гриль", price: "1 590 ₸" },
    ]
  },
  {
    title: "Шашлык",
    items: [
      { name: "Из рубленной ягнятины", description: "с овощами и зеленью", price: "4 690 ₸", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" },
      { name: "Из мякоти баранины", price: "5 790 ₸" },
      { name: "Антрекот баранины", price: "6 290 ₸" },
      { name: "Куриные крылышки", price: "2 390 ₸" },
      { name: "Из рубленной курицы", description: "с сыром чеддер", price: "2 990 ₸" },
      { name: "Из бедра курицы", price: "2 590 ₸" },
      { name: "Из печени в сетке", description: "из внутреннего жира", price: "1 990 ₸" },
    ]
  },
  {
    title: "Street Food",
    items: [
      { name: "Пикантная кесадилья с курицей", price: "2 890 ₸" },
      { name: "Бургер из рваной говядины", price: "3 890 ₸", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" },
      { name: "Бургер - Золотой слиток", price: "2 890 ₸" },
      { name: "Тост с слабосоленой семгой", price: "3 790 ₸" },
      { name: "Тост с ростбифом", price: "2 990 ₸" },
    ]
  },
  {
    title: "Горячие блюда",
    items: [
      { name: "Томленая ягнятина", description: "с тыквенным хумусом, луковым мармеладом и хрустящими луковыми кольцами", price: "6 690 ₸" },
      { name: "Ягнятина запеченная в слоеном тесте", description: "с сахарной косточкой и пряными овощами", price: "7 190 ₸" },
      { name: "Томленые говяжьи щечки", description: "с картофельным кремом и соусом из шпината", price: "5 790 ₸" },
      { name: "Шницель из цыпленка", description: "с картофельным кремом, запеченными томатами черри", price: "4 290 ₸" },
      { name: "Судак в панировке", description: "из пармезана и зелени", price: "5 690 ₸" },
      { name: "Семга в соусе Биск", description: "с маслинами, томатами и хрустящим картофельным гратеном", price: "6 690 ₸", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    title: "Блюда на компанию",
    items: [
      { name: "Хрустящая тарелка", description: "Судак в темпуре, луковые кольца, картофель фри, куриный поп-корн", price: "9 490 ₸", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop" },
      { name: "Мясной сет", description: "Ассорти колбасок, шашлык из баранины, шашлык из бедра курицы, T-Bone, овощи гриль", price: "21 890 ₸" },
      { name: "Пивные креветки", price: "10 190 ₸" },
    ]
  },
  {
    title: "Для души и Гарниры",
    items: [
      { name: "Картофельное пюре / фри / рис", price: "1 290 ₸" },
      { name: "Десерт", price: "3 690 ₸", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop" },
      { name: "Фруктовое ассорти", price: "6 990 ₸" },
      { name: "Хлебная корзина", price: "1 090 ₸" },
    ]
  }
];
