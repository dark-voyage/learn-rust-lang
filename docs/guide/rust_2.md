# Guessing o'yinini dasturlash

Keling, birgalikda amaliy loyiha orqali Rustga o'taylik! Ushbu bob sizni bir nechta umumiy Rust tushunchalari bilan tanishtirib, ulardan haqiqiy dasturda qanday foydalanishni ko'rsatib beradi. Siz `let`, `match`, usullari, bog'langan funksiyalar, tashqi qutilardan foydalanish va boshqalar haqida bilib olasiz! Keyingi boblarda biz ushbu fikrlarni batafsilroq ko'rib chiqamiz. Ushbu bobda siz asoslarni mashq qilasiz.

Biz klassik boshlang'ich dasturlash muammosini amalga oshiramiz: taxmin qilish o'yini. Bu shunday ishlaydi: dastur 1 dan 100 gacha bo'lgan tasodifiy butun sonni hosil qiladi. Keyin u o'yinchidan taxmin kiritishni taklif qiladi. Tahmin kiritilgandan so'ng, dastur taxmin juda past yoki juda yuqori ekanligini ko'rsatadi. Agar taxmin to'g'ri bo'lsa, o'yin tabrik xabarini chop etadi va chiqadi.

## Yangi loyihani yaratish
Yangi loyihani yaratish uchun 1-bobda yaratgan loyihalar katalogiga oʻting va Cargo-dan foydalanib yangi loyiha yarating, masalan:

```bash
$ cargo new guessing_game
$ cd guessing_game
```
Birinchi buyruq, , birinchi argument sifatida `cargo new` loyiha nomini `( )` oladi . `guessing_game` Ikkinchi buyruq yangi loyihaning katalogiga o'zgaradi.

Yaratilgan Cargo.toml fayliga qarang:

Fayl nomi: Cargo.toml

```toml
[package]
name = "guessing_game"
version = "0.1.0"
edition = "2021"

# Qo'shimcha kalitlar va ularning ta'riflari https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

