# Lucca Steakhouse — Demo

نسخة عرض (واجهة أمامية) لموقع Lucca Steakhouse في جبل عمّان. مبنية بـ Vue 3 + Vite.

## التشغيل
```bash
npm install
npm run dev
```

## الرفع على Vercel
ارفع المجلد على GitHub، ثم من Vercel: **Add New → Project → Import**. يتعرّف على Vite تلقائياً (Build: `npm run build`، Output: `dist`).

## الصور
الصور في `public/img/` مأخوذة من صفحة المطعم على فيسبوك. ما زالت ناقصة (لا توجد لها صور في الصفحة): `beef-wellington.jpg`، `chocolate-fondant.jpg`، `skillet-cookie.jpg`. الأسماء المطلوبة:

| الملف | مكانه |
|---|---|
| `hero.jpg` | خلفية الواجهة |
| `butcher.jpg`, `wagyu-cut.jpg` | قسم القطع |
| `hanger-steak.jpg`, `beef-wellington.jpg`, `wagyu-carpaccio.jpg`, `brisket-tacos.jpg`, `salmon.jpg`, `mini-sliders.jpg`, `chocolate-fondant.jpg`, `skillet-cookie.jpg` | أطباق لوكا |
| `chef-plating.jpg`, `interior.jpg`, `evening.jpg`, `table.jpg` | قسم التجربة |
| `carving.jpg`, `kebab.jpg`, `wine.jpg`, `wellington-cut.jpg` | شريط الصور |

أي صورة غير موجودة يظهر مكانها خلفية لونية بديلة، فالموقع لا ينكسر.

## أين أعدّل؟
- `src/site.js`: واتساب الحجوزات، الهواتف، الروابط، الإحداثيات، التقييمات.
- `src/i18n.js`: النصوص بالعربي والإنجليزي، القطع، الأطباق المميزة، القائمة.
- `src/styles.css`: الألوان والخطوط (المتغيرات أعلى الملف).

## قبل الإطلاق الرسمي
- احذف `<meta name="robots" content="noindex, nofollow">` من `index.html`.
- احذف شريط "نسخة عرض" (`demo-ribbon` في `src/App.vue`).
- حدّث القائمة من القائمة الحالية وأضف الأسعار (المأخوذة من صورة قائمة قديمة بلا أسعار).
- استبدل الشعار النصي بملف شعارهم الرسمي.
