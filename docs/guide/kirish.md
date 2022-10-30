# Kirish
Rust dasturlash tiliga xush kelibsiz, Rust haqida kirish kitobi. Rust dasturlash tili tezroq va ishonchli dasturlarni yozishga yordam beradi. Yuqori darajadagi ergonomika va past darajadagi boshqaruv ko'pincha dasturlash tilini loyihalashda bir-biriga zid keladi; Rust bu ziddiyatga qarshi turadi. Kuchli texnik imkoniyatlar va ishlab chiquvchilarning ajoyib tajribasini muvozanatlash orqali Rust sizga an'anaviy ravishda bunday nazorat bilan bog'liq bo'lgan barcha qiyinchiliklarsiz past darajadagi tafsilotlarni (masalan, xotiradan foydalanish) boshqarish imkoniyatini beradi.

## Rust kim uchun
Rust turli sabablarga ko'ra ko'p odamlar uchun idealdir. Keling, eng muhim guruhlarning bir nechtasini ko'rib chiqaylik.
## Dasturchilar jamoalari

Rust turli darajadagi tizimlarni dasturlash bo'yicha bilimga ega bo'lgan yirik ishlab chiquvchilar guruhlari o'rtasida hamkorlik qilish uchun samarali vosita ekanligini isbotlamoqda. Low leveldagi kod turli xil nozik xatolarga moyil bo'lib, ko'pchilik boshqa tillarda ularni faqat keng ko'lamli sinov va tajribali ishlab chiquvchilar tomonidan sinchkovlik bilan tekshirish orqali aniqlash mumkin. Rust-da kompilyator ushbu qiyin xatolar, jumladan, parallellik xatolari bilan kodni kompilyatsiya qilishni rad etib, darvozabon rolini o'ynaydi. Kompilyator bilan birga ishlash orqali jamoa o'z vaqtini xatolarni ta'qib qilishdan ko'ra dastur mantig'iga e'tibor qaratishga sarflashi mumkin.

Rust shuningdek, tizim dasturlash dunyosiga zamonaviy ishlab chiquvchilar vositalarini olib keladi:

* Kiritilgan qaramlik menejeri va qurish vositasi bo'lib, Rust ekotizimida bog'liqliklarni qo'shish, kompilyatsiya qilish va boshqarishni qiyinchiliklarisz va izchil qiladi.
* Rustfmt ishlab chiquvchilar orasida izchil kodlash uslubini ta'minlaydi.
* Rust Language Server kodni toʻldirish va inline xato xabarlari uchun Integrated Development Environment (IDE) integratsiyasini quvvatlaydi.
Rust ekotizimidagi ushbu va boshqa vositalardan foydalangan holda, ishlab chiquvchilar tizim darajasidagi kodni yozishda samarali bo'lishi mumkin.

## Talabalar
Rust talabalar va tizim tushunchalarini o'rganishga qiziquvchilar uchun. Rust-dan foydalanib, ko'p odamlar operatsion tizimlarni ishlab chiqish kabi mavzular haqida bilib oldilar. Jamiyat juda mehmondo'st va talabalar savollariga javob berishdan xursand. Ushbu kitob kabi sa'y-harakatlar orqali Rust guruhlari tizim tushunchalarini ko'proq odamlar, ayniqsa dasturlash uchun yangi bo'lganlar uchun qulayroq qilishni xohlashadi.

## Kompaniyalar
Yuzlab yirik va kichik kompaniyalar turli vazifalar uchun ishlab chiqarishda Rustdan foydalanadilar. Bu vazifalar qatoriga buyruq qatori vositalari, veb-xizmatlar, DevOps asboblari, o‘rnatilgan qurilmalar, audio va video tahlil va transkodlash, kriptovalyutalar, bioinformatika, qidiruv tizimlari, Internet-narsalar ilovalari, machine learning va hatto Firefox veb-brauzerining asosiy qismlari kiradi.

## Open Sourse  dasturchilar
Rust Rust dasturlash tilini, hamjamiyatini, ishlab chiquvchilar vositalarini va kutubxonalarini yaratmoqchi bo'lgan odamlar uchundir. Rust tiliga o‘z hissangizni qo‘shishingizni istardik.

## Tezlik va barqarorlikni qadrlaydigan odamlar
Rust tilda tezlik va barqarorlikni xohlaydigan odamlar uchundir. Tezlik deganda biz Rust yordamida yaratishingiz mumkin bo'lgan dasturlarning tezligi va Rust ularni yozish imkonini beradigan tezligini nazarda tutamiz. Rust kompilyatorining tekshiruvlari qo'shimcha funktsiyalar va refaktoring orqali barqarorlikni ta'minlaydi. Bu ishlab chiquvchilar ko'pincha o'zgartirishdan qo'rqadigan ushbu tekshiruvlarsiz tillardagi mo'rt eski koddan farqli o'laroq. Nol xarajatli abstraktsiyalarga, qo'lda yozilgan kod kabi tezroq quyi darajadagi kodni kompilyatsiya qiladigan yuqori darajadagi funktsiyalarga intilish orqali Rust xavfsiz kodni ham tezkor kod qilishga intiladi.

Rust tili boshqa ko'plab foydalanuvchilarni ham qo'llab-quvvatlashga umid qiladi; Bu yerda tilga olinganlar faqat eng katta manfaatdor tomonlardan biri hisoblanadi. Umuman olganda, Rustning eng katta ambitsiyalari xavfsizlik va mahsuldorlik, tezlik va ergonomikani ta'minlash orqali dasturchilar o'nlab yillar davomida qabul qilgan kelishuvlarni bartaraf etishdir. Rust-ni sinab ko'ring va uning tanlovlari sizga mos keladimi yoki yo'qligini tekshiring.

## Bu kitob kim uchun
Ushbu kitobda siz boshqa dasturlash tilida kod yozgansiz deb taxmin qilinadi, lekin qaysi biri haqida hech qanday taxminlar yo'q. Biz materialni turli xil dasturlash tajribasiga ega bo'lganlar uchun keng foydalanishga imkon berishga harakat qildik. Biz dasturlash nima va u haqida qanday fikr yuritish haqida gapirishga ko'p vaqt sarflamaymiz . Agar siz dasturlashda mutlaqo yangi bo'lsangiz, dasturlashga kirishni ta'minlovchi kitobni o'qisangiz yaxshi bo'lardi.