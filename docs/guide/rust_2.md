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
1-bobda ko'rganingizdek, `cargo new` "Hello, world!" sizning dasturingiz. `src/main.rs` faylini ko'rishingiz mumkin:

Fayl nomi: src/main.rs

```rust
fn main() {
    println!("Hello, world!");
}
```
Keling, ushbu "Hello, world!" dasturni yarating va `cargo run`  buyrug'i yordamida ishga tushiring :

```bash
$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 1.50s
     Running `target/debug/guessing_game`
Hello, world!
```
Buyruq `run` loyihani tezda takrorlash kerak bo'lganda foydali bo'ladi, biz ushbu o'yinda qilganimizdek, keyingisiga o'tishdan oldin har bir iteratsiyani tezda sinab ko'ramiz.

`src/main.rs` faylini qayta oching. Siz ushbu fayldagi barcha kodlarni yozasiz.

## Guessga ishlov berish
Taxmin qilish o'yini dasturining birinchi qismi foydalanuvchi kiritishini so'raydi, ushbu kiritishni qayta ishlaydi va kirish kutilgan shaklda ekanligini tekshiradi. Boshlash uchun biz o'yinchiga taxmin kiritishiga ruxsat beramiz. 2-1 ro'yxatidagi kodni `src/main.rs` ga kiriting .

Fayl nomi: src/main.rs

```rust
use std::io;

fn main() {
    println!("Raqamni toping!");

    println!("Iltimos, taxminingizni kiriting.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Satrni o‘qib bo‘lmadi");

    println!("Taxminingiz {guess}");
}
```
Ushbu kod juda ko'p ma'lumotlarni o'z ichiga oladi, shuning uchun uni satr satrga o'tkazamiz. Foydalanuvchi kiritishini olish va natijani chiqish sifatida chop etish uchun biz `io` kirish/chiqish kutubxonasini qamrab olishimiz kerak. Kutubxona quyidagi `io` nom bilan ma'lum bo'lgan standart kutubxonadan keladi `std:`

```rust
use std::io;
```
Keyingi safar ishga tushirganingizda `cargo build`, Cargo mavjud qutilar reestrini yangilaydi va siz `rand` ko'rsatgan yangi versiyaga muvofiq talablaringizni qayta ko'rib chiqadi.

[Cargo](https://doc.rust-lang.org/cargo/) va uning ekotizimlari haqida 14-bobda ko'rib chiqamiz, lekin hozircha bu faqat bilishingiz kerak. cargo kutubxonalarni qayta ishlatishni juda osonlashtiradi, shuning uchun Rustaceans bir nechta paketlardan yig'ilgan kichikroq loyihalarni yozishga qodir.

## Tasodifiy raqam yaratish
Keling, taxmin qilish uchun raqamni yaratish uchun `rand` dan foydalanishni boshlaylik. Keyingi qadam 2-3 ro'yxatda ko'rsatilganidek, `src/main.rs` ni yangilashdir.

Fayl nomi: src/main.rs

```rust
use std::io;
use rand::Rng;

fn main() {
    println!("Raqamni toping!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("Yashirin raqam: {secret_number}");

    println!("Iltimos, taxminingizni kiriting.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Satrni o‘qib bo‘lmadi");

    println!("Taxminingiz {guess}");
}
```
Birinchidan, biz line `use rand::Rng` qo'shamiz. Rng xususiyati tasodifiy sonlar generatorlari qo'llaydigan usullarni belgilaydi va bu xususiyat biz ushbu usullardan foydalanishimiz uchun tegishli bo'lishi kerak. 10-bobda xususiyatlar batafsil yoritiladi.

Keyinchalik, o'rtada ikkita qator qo'shamiz. Birinchi qatorda biz `rand::thread_rng` funksiyasini chaqiramiz, bu bizga biz foydalanmoqchi bo'lgan tasodifiy sonlar generatorini beradi: joriy ijro chizig'i uchun mahalliy va operatsion tizim tomonidan urug'langan. Keyin tasodifiy sonlar generatorida `gen_range` usulini chaqiramiz. Bu usul biz foydalanish `rand::Rng` bayonoti bilan qamrab olgan `Rng` xususiyati bilan aniqlanadi. `gen_range` usuli argument sifatida diapazon ifodasini oladi va diapazonda tasodifiy son hosil qiladi. Bu yerda biz ishlatayotgan diapazon ifodasi `start..=end` shaklini oladi va pastki va yuqori chegaralarni qamrab oladi, shuning uchun 1 dan 100 gacha bo‘lgan raqamni so‘rash uchun `1..=100` ni belgilashimiz kerak.

:::tip
Eslatma: Siz qaysi xususiyatlardan foydalanishni va qaysi usullar va funktsiyalarni cratedan chaqirishni bila olmaysiz, shuning uchun har bir carteda foydalanish bo'yicha ko'rsatmalar mavjud. Cargo-ning yana bir qulay xususiyati shundaki, `cargo doc --open` buyrug'ini ishga tushirish sizning barcha bog'liqliklaringiz tomonidan taqdim etilgan hujjatlarni mahalliy sifatida tuzadi va uni brauzeringizda ochadi. Agar siz `rand` cartedagi boshqa funksiyalarga qiziqsangiz, masalan, `cargo doc --open`-ni ishga tushiring va chap tomondagi yon paneldagi `rand` tugmasini bosing.
:::