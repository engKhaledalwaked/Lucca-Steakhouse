import { ref, computed, watchEffect } from 'vue'

const saved = (() => { try { return localStorage.getItem('lucca-lang') } catch { return null } })()
export const lang = ref(saved === 'en' ? 'en' : 'ar')

watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
  try { localStorage.setItem('lucca-lang', lang.value) } catch {}
})
export const toggleLang = () => { lang.value = lang.value === 'ar' ? 'en' : 'ar' }

const dict = {
  ar: {
    ribbon: 'نسخة عرض تجريبية — مُعدّة لـ Lucca',
    nav: { cuts: 'القطع', signature: 'أطباقنا', menu: 'القائمة', experience: 'التجربة', visit: 'الموقع', reserve: 'احجز طاولة' },
    hero: {
      eyebrow: 'ستيك هاوس · بار · جريل — جبل عمّان',
      title1: 'هناك طريقة واحدة',
      title2: 'صحيحة لأكل الستيك',
      lead: 'بشهية مفتوحة وابتسامة على وجهك. قطع بلاك أنجس ودراي إيج وواغيو، يحضّرها الشيف أمامك.',
      cta1: 'احجز طاولتك', cta2: 'شاهد القطع',
      g: 'تقييم Google', gr: 'مراجعة', ta: 'Tripadvisor',
    },
    strip: ['بلاك أنجس', 'دراي إيج', 'واغيو', 'عرض الشيف على الطاولة', 'تراس خارجي', 'خدمة صف السيارات'],
    cuts: {
      eyebrow: 'من الجريل', title: 'اختر قطعتك',
      sub: 'نختار كل قطعة بعناية، ونطهوها بالدرجة التي تريدها تماماً. اطلب قطعتين وشاهد الشيف يحضّرها أمامك.',
      angus: 'قطع بلاك أنجس', aged: 'لحم معتّق (دراي إيج)',
      note: 'الأوزان حسب قائمة المطعم. الأسعار داخل المطعم.',
    },
    sig: { eyebrow: 'أطباق لوكا', title: 'ما يعود الناس من أجله' },
    menu: {
      eyebrow: 'القائمة', title: 'قائمة لوكا',
      sub: 'أصناف من قائمة لوكا. تُحدَّث مع القائمة والأسعار الحالية عند الإطلاق.',
    },
    exp: {
      eyebrow: 'التجربة', title: 'أكثر من عشاء',
      items: [
        { t: 'عرض الشيف', d: 'اطلب قطعتين من اللحم، ويحضّرها الشيف أمامك في وسط المطعم.' },
        { t: 'مواقد وتراس', d: 'جلسات خارجية دافئة حول النار، في قلب جبل عمّان.' },
        { t: 'ليالي موسيقى حية', d: 'أمسيات موسيقية مختارة. تابعنا لمعرفة المواعيد القادمة.' },
        { t: 'غرفة خاصة', d: 'لعشاء العائلة، أعياد الميلاد، واجتماعات العمل. نجهّز لك القائمة.' },
      ],
    },
    gallery: { cta: 'تابعنا على إنستغرام' },
    reserve: {
      eyebrow: 'الحجز', title: 'طاولتك جاهزة',
      p: 'املأ التفاصيل ويصلنا طلبك مباشرة على واتساب، ونؤكد الحجز خلال دقائق ضمن ساعات العمل.',
      points: ['بدون تطبيقات أو تسجيل', 'اذكر مناسبتك ونجهّز لك مفاجأة', 'للغرفة الخاصة والمجموعات فوق ١٢ شخصاً نتواصل معك'],
      orCall: 'أو اتصل',
      f: {
        name: 'الاسم', phone: 'رقم الهاتف', date: 'التاريخ', time: 'الوقت', guests: 'عدد الأشخاص',
        type: 'المناسبة', seat: 'الجلسة', notes: 'ملاحظات (اختياري)', submit: 'أرسل الحجز عبر واتساب',
        types: { dinner: 'عشاء عادي', birthday: 'عيد ميلاد', anniversary: 'ذكرى سنوية', business: 'عشاء عمل', private: 'الغرفة الخاصة' },
        seats: { indoor: 'داخلي', terrace: 'التراس', any: 'لا يهم' },
        err: 'يرجى تعبئة الاسم ورقم هاتف صحيح والتاريخ.',
        sent: 'تم فتح واتساب — أرسل الرسالة لتأكيد حجزك.',
      },
      msg: { head: 'طلب حجز — Lucca Steakhouse', name: 'الاسم', phone: 'الهاتف', date: 'التاريخ', time: 'الوقت', guests: 'الأشخاص', type: 'المناسبة', seat: 'الجلسة', notes: 'ملاحظات' },
    },
    visit: {
      eyebrow: 'زورونا', title: 'في قلب جبل عمّان',
      addrL: 'العنوان', addr: 'جبل عمّان، الدوار الثالث — شارع متقال الفايز',
      hoursL: 'ساعات العمل', hours: 'يومياً من ١٢ ظهراً حتى ١٢ منتصف الليل',
      parkL: 'الاصطفاف', park: 'خدمة صف السيارات متوفرة',
      phoneL: 'الهاتف', dir: 'الاتجاهات', wa: 'واتساب',
    },
    footer: { tag: 'Steakhouse · Bar · Grill', demo: 'تصميم تجريبي مقترح' },
  },

  en: {
    ribbon: 'Demo preview — prepared for Lucca',
    nav: { cuts: 'Cuts', signature: 'Signatures', menu: 'Menu', experience: 'Experience', visit: 'Visit', reserve: 'Book a table' },
    hero: {
      eyebrow: 'Steakhouse · Bar · Grill — Jabal Amman',
      title1: 'There is only one',
      title2: 'right way to eat a steak',
      lead: 'With greed in your heart and a smile on your face. Black Angus, dry-aged and Wagyu cuts, finished in front of you by our chef.',
      cta1: 'Book your table', cta2: 'See the cuts',
      g: 'Google rating', gr: 'reviews', ta: 'Tripadvisor',
    },
    strip: ['Black Angus', 'Dry Aged', 'Wagyu', 'Chef’s tableside show', 'Outdoor terrace', 'Valet parking'],
    cuts: {
      eyebrow: 'From the grill', title: 'Choose your cut',
      sub: 'Every cut is selected with care and cooked exactly the way you like it. Order two and watch the chef prepare them in front of you.',
      angus: 'Black Angus cuts', aged: 'Dry aged beef',
      note: 'Weights as per Lucca’s menu. Prices at the restaurant.',
    },
    sig: { eyebrow: 'Lucca signatures', title: 'What people come back for' },
    menu: {
      eyebrow: 'Menu', title: 'The Lucca menu',
      sub: 'Items from Lucca’s menu. Will be synced with the current menu and prices at launch.',
    },
    exp: {
      eyebrow: 'The experience', title: 'More than dinner',
      items: [
        { t: 'The chef’s show', d: 'Order two cuts and our chef prepares them in the middle of the dining room.' },
        { t: 'Fire pits & terrace', d: 'Warm outdoor seating around the fire, in the heart of Jabal Amman.' },
        { t: 'Live music nights', d: 'Curated evenings of live music. Follow us for upcoming dates.' },
        { t: 'Private room', d: 'For family dinners, birthdays and business meetings, with a tailored menu.' },
      ],
    },
    gallery: { cta: 'Follow us on Instagram' },
    reserve: {
      eyebrow: 'Reservations', title: 'Your table is waiting',
      p: 'Fill in the details and your request reaches us instantly on WhatsApp. We confirm within minutes during opening hours.',
      points: ['No apps, no sign-up', 'Tell us the occasion — we’ll prepare a surprise', 'Private room & groups over 12: we’ll get in touch'],
      orCall: 'Or call',
      f: {
        name: 'Name', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Guests',
        type: 'Occasion', seat: 'Seating', notes: 'Notes (optional)', submit: 'Send booking via WhatsApp',
        types: { dinner: 'Regular dinner', birthday: 'Birthday', anniversary: 'Anniversary', business: 'Business dinner', private: 'Private room' },
        seats: { indoor: 'Indoor', terrace: 'Terrace', any: 'Any' },
        err: 'Please enter your name, a valid phone number and a date.',
        sent: 'WhatsApp opened — send the message to confirm your booking.',
      },
      msg: { head: 'Booking request — Lucca Steakhouse', name: 'Name', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Guests', type: 'Occasion', seat: 'Seating', notes: 'Notes' },
    },
    visit: {
      eyebrow: 'Visit', title: 'In the heart of Jabal Amman',
      addrL: 'Address', addr: 'Jabal Amman, 3rd Circle — Methqal Al Fayez St.',
      hoursL: 'Hours', hours: 'Daily, 12 PM – midnight',
      parkL: 'Parking', park: 'Valet parking available',
      phoneL: 'Phone', dir: 'Directions', wa: 'WhatsApp',
    },
    footer: { tag: 'Steakhouse · Bar · Grill', demo: 'Proposed demo design' },
  },
}
export const t = computed(() => dict[lang.value])

// القطع — من قائمة لوكا
export const cuts = {
  angus: [
    { en: 'Rib-Eye', ar: 'ريب آي', w: '350 g' },
    { en: 'T-Bone', ar: 'تي بون', w: '650 g' },
    { en: 'Striploin', ar: 'ستربلوين', w: '300 g' },
    { en: 'Flap', ar: 'فلاپ', w: '300 g' },
    { en: 'Tomahawk', ar: 'توماهوك', w: '1.5 kg', hot: true },
  ],
  aged: [
    { en: 'Dry Aged T-Bone', ar: 'تي بون معتّق', w: '450 g' },
    { en: 'Dry Aged New York', ar: 'نيويورك معتّق', w: '300 g' },
    { en: 'Dry Aged Delmonico', ar: 'ديلمونيكو معتّق', w: '300 g' },
    { en: 'Dry Aged Dallas', ar: 'دالاس معتّق (ريب آي بالعظم)', w: '450 g', hot: true },
  ],
}

// أطباق مميزة بصور حقيقية من صفحة المطعم
export const signatures = [
  { img: 'hanger-steak.jpg', en: 'Hanger Steak', ar: 'هانغر ستيك', den: 'Chargrilled, over buttery mash with chimichurri.', dar: 'مشوي على الفحم، فوق بطاطا مهروسة بالزبدة وصوص تشيميتشوري.' },
  { img: 'beef-wellington.jpg', en: 'Beef Wellington', ar: 'بيف ولينغتون', den: 'Tenderloin wrapped in golden puff pastry.', dar: 'تندرلوين ملفوف بعجينة البف الذهبية.' },
  { img: 'wagyu-carpaccio.jpg', en: 'Wagyu Carpaccio', ar: 'كارباتشيو واغيو', den: 'Thin-sliced Wagyu, herb oil, fresh greens.', dar: 'شرائح واغيو رقيقة مع زيت الأعشاب.' },
  { img: 'brisket-tacos.jpg', en: 'Brisket Tacos', ar: 'تاكو بريسكت', den: 'Slow-cooked brisket, pickled onion, micro greens.', dar: 'بريسكت مطهو ببطء مع بصل مخلل.' },
  { img: 'salmon.jpg', en: 'Grilled Salmon', ar: 'سلمون مشوي', den: 'Fresh salmon fillet over a silky purée.', dar: 'فيليه سلمون طازج فوق بيوريه ناعم.' },
  { img: 'mini-sliders.jpg', en: 'Mini Sliders', ar: 'ميني سلايدرز', den: 'A guest favourite — three bites, zero regrets.', dar: 'المفضلة عند الزوار — ثلاث لقمات لا تُنسى.' },
  { img: 'chocolate-fondant.jpg', en: 'Chocolate Fondant', ar: 'فوندان شوكولاتة', den: 'Warm molten centre, raspberries and cream.', dar: 'قلب ذائب دافئ مع التوت والكريمة.' },
]

// القائمة — أسماء الأصناف من قائمة لوكا (بدون أسعار)
export const menu = [
  { id: 'cold', en: 'Cold Appetizers', ar: 'مقبلات باردة', items: [
    { en: 'Steak Tartar', ar: 'ستيك تارتار' },
    { en: 'Wagyu Carpaccio', ar: 'كارباتشيو واغيو', tag: 'new' },
    { en: 'Smoked Beef & Cheese Platter', ar: 'طبق اللحم المدخن والأجبان' },
    { en: 'Çiğ Köfte', ar: 'تشي كفتة' },
    { en: 'Dolma Mix', ar: 'دولما مشكّلة' },
    { en: 'Houmous · Moutabal · Muhammara', ar: 'حمص · متبل · محمّرة' },
    { en: 'Meze Platter (for two)', ar: 'طبق مازة (لشخصين)' },
  ]},
  { id: 'hot', en: 'Hot Appetizers', ar: 'مقبلات ساخنة', items: [
    { en: 'Brisket Rolls', ar: 'رولات البريسكت', den: 'Slow cooked brisket wraps', dar: 'بريسكت مطهو ببطء' },
    { en: 'Beef Bone Marrow', ar: 'نخاع العظم', den: 'Baked bones', dar: 'مخبوز بالفرن', tag: 'fav' },
    { en: 'Manti', ar: 'مانتي', den: 'Crispy meat pastry', dar: 'معجنات لحم مقرمشة' },
    { en: 'Sucuk', ar: 'سجق', den: 'Homemade sucuk', dar: 'سجق بيتي' },
    { en: 'Butter Shrimp', ar: 'روبيان بالزبدة', den: 'Garlic, butter & dried red peppers', dar: 'ثوم، زبدة وفلفل أحمر مجفف' },
    { en: 'Potato Gratin', ar: 'بطاطا غراتان', den: 'Fresh cream and anchovies', dar: 'بالكريمة الطازجة' },
    { en: 'Lucca Homemade Potatoes', ar: 'بطاطا لوكا البيتية', den: 'Sweet potatoes with herbs & garlic', dar: 'بطاطا حلوة بالأعشاب والثوم' },
  ]},
  { id: 'salads', en: 'Soups & Salads', ar: 'شوربات وسلطات', items: [
    { en: 'Lucca Famous Salad', ar: 'سلطة لوكا الشهيرة', den: 'Goat cheese and pomegranate', dar: 'جبنة الماعز والرمان', tag: 'fav' },
    { en: 'Ba’leh Salad', ar: 'سلطة البقلة', den: 'Dill, garlic yogurt dressing', dar: 'شبت وصلصة اللبن بالثوم' },
    { en: 'Kısır Salad', ar: 'سلطة كِسِر', den: 'Healthy bulgur salad', dar: 'سلطة برغل صحية' },
    { en: 'Tabbouleh', ar: 'تبولة' },
    { en: 'Tomato & Coconut Milk Soup', ar: 'شوربة الطماطم وحليب جوز الهند' },
    { en: 'Turkish Lentil Soup', ar: 'شوربة العدس التركية' },
  ]},
  { id: 'signature', en: 'Lucca Signatures', ar: 'أطباق لوكا', items: [
    { en: 'Lokum', ar: 'لوكوم', den: '230 g beef tenderloin', dar: 'تندرلوين ٢٣٠ غم', tag: 'fav' },
    { en: 'Lucca Special', ar: 'لوكا سبيشال', den: '300 g tenderloin sliced and griddled on a hot plate with butter', dar: 'تندرلوين ٣٠٠ غم مشرّح على صاج ساخن بالزبدة' },
    { en: 'Wagyu Striploin', ar: 'ستربلوين واغيو', den: '220 g', dar: '٢٢٠ غم' },
    { en: 'Shashlik', ar: 'شاشليك', den: '300 g marinated tenderloin in a creamy sauce', dar: 'تندرلوين متبّل بصوص كريمي' },
    { en: 'Kafes', ar: 'كفس', den: 'A whole rack of lamb', dar: 'ريش غنم كاملة' },
    { en: 'Kuzu Beyti', ar: 'كوزو بيتي', den: 'Grilled lamb skewers', dar: 'أسياخ لحم خروف مشوية' },
    { en: 'Beef Wellington', ar: 'بيف ولينغتون', tag: 'new' },
    { en: 'Chicken Tagine', ar: 'طاجن دجاج', den: 'Olives, lemon sauce, couscous', dar: 'زيتون وصوص الليمون مع الكسكس' },
  ]},
  { id: 'burgers', en: 'Burgers & Pastas', ar: 'برغر وباستا', items: [
    { en: 'Lucca Gourmet Burger', ar: 'برغر لوكا غورميه', tag: 'fav' },
    { en: 'Lokum Burger', ar: 'برغر لوكوم' },
    { en: 'Mini Sliders', ar: 'ميني سلايدرز' },
    { en: 'Lucca Spaghetti', ar: 'سباغيتي لوكا', den: 'Beef strips, olive oil & sea salt', dar: 'شرائح لحم، زيت زيتون وملح بحري' },
    { en: 'Linguine Aglio e Olio', ar: 'لينغويني أليو إي أوليو' },
    { en: 'Gnocchi', ar: 'نيوكي', den: 'Fontina cheese and sage', dar: 'بجبنة الفونتينا والمريمية' },
  ]},
  { id: 'desserts', en: 'Desserts & Coffee', ar: 'حلويات وقهوة', items: [
    { en: 'Chocolate Fondant', ar: 'فوندان شوكولاتة' },
    { en: 'Cookie in a Pan', ar: 'كوكي بالمقلاة', tag: 'fav' },
    { en: 'Homemade Baklava', ar: 'بقلاوة بيتية' },
    { en: 'Kunafe', ar: 'كنافة' },
    { en: 'Ice Cream Ghazle', ar: 'آيس كريم بغزل البنات', den: 'Caramel sauce and nuts', dar: 'صوص الكراميل والمكسرات' },
    { en: 'Turkish Coffee · Turkish Tea', ar: 'قهوة تركية · شاي تركي' },
  ]},
]
