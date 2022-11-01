# Hello, Cargo!
Cargo - bu Rustning qurish tizimi va paketlar menejeri. Aksariyat Rustaceanlar o'zlarining Rust loyihalarini boshqarish uchun ushbu vositadan foydalanadilar, chunki Cargo siz uchun kodni yaratish, kodingizga bog'liq kutubxonalarni yuklab olish va ushbu kutubxonalarni yaratish kabi ko'plab vazifalarni bajaradi. (Biz sizning kodingizga bog'liqliklar kerak bo'lgan kutubxonalarni chaqiramiz .)

Biz hozirgacha yozganimiz kabi eng oddiy Rust dasturlarida hech qanday bog'liqlik yo'q. Agar biz "Hello, world!" Cargo bilan loyiha bo'lsa, u faqat sizning kodingizni yaratish bilan shug'ullanadigan Cargo qismidan foydalanadi. Murakkab Rust dasturlarini yozganingizda, siz bog'liqliklar qo'shasiz va agar siz Cargo yordamida loyihani boshlasangiz, bog'liqliklarni qo'shish ancha oson bo'ladi.

Rust loyihalarining aksariyati yuklardan foydalanganligi sababli, ushbu kitobning qolgan qismida siz ham cargolardan foydalanasiz deb taxmin qilinadi. Agar siz ["O'rnatish"](guide/rust_1.1.html#o-rnatish) bo'limida muhokama qilingan rasmiy o'rnatuvchilardan foydalansangiz, yuk Rust bilan birga keladi . Agar siz Rust-ni boshqa vositalar orqali o'rnatgan bo'lsangiz, terminalingizga quyidagilarni kiritish orqali Cargo o'rnatilganligini tekshiring:

```bash
$ cargo --version
```
Agar siz versiya raqamini ko'rsangiz, sizda bor! kabi xatolikni ko'rsangiz, `command not found` cargoni qanday qilib alohida o'rnatishni aniqlash uchun o'rnatish usuli bo'yicha hujjatlarni ko'rib chiqing.
## Cargo bilan loyiha yaratish
Keling, Cargo-dan foydalanib yangi loyiha yarataylik va u bizning asl "Hello, world!" dan qanday farq qilishini ko'rib chiqaylik. loyiha. Loyihangiz katalogiga (yoki kodingizni saqlashga qaror qilgan joyingizga) qayting . Keyin istalgan operatsion tizimda quyidagilarni bajaring:

```bash
$ cargo new hello_cargo
$ cd hello_cargo
```
Birinchi buyruq hello_cargo deb nomlangan yangi katalog va loyihani yaratadi . Biz loyihamizga hello_cargo deb nom berdik va Cargo o'z fayllarini xuddi shu nomdagi katalogda yaratadi.

hello_cargo katalogiga o'ting va fayllarni ro'yxatlang. Siz Cargo biz uchun ikkita fayl va bitta katalog yaratganini ko'rasiz: `Cargo.toml` fayli va ichida `main.rs` fayli bo'lgan `src` katalogi .

Shuningdek, u `.gitignore` fayli bilan birga yangi Git omborini ishga tushirdi. `cargo new` Agar mavjud Git omborida ishlasangiz, Git fayllari yaratilmaydi ; yordamida bu xatti-harakatni bekor qilishingiz mumkin `cargo new --vcs=git`.

::: tip
Eslatma: Git keng tarqalgan versiya boshqaruv tizimidir. Siz bayroqdan `cargo new` foydalanib, boshqa versiyani boshqarish tizimidan foydalanishga yoki versiyani boshqarish tizimisiz foydalanishga o'zgartirishingiz mumkin. Mavjud variantlarni ko'rish uchun `--vcs` ishga tushiring `.cargo new --help`
:::
Siz tanlagan matn muharririda Cargo.toml ni oching . U 1-2 ro'yxatdagi kodga o'xshash bo'lishi kerak.

Fayl nomi: Cargo.toml
```bash
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

[dependencies]
```
Ushbu fayl [TOML](https://toml.io/en/) ( Tom's Obvious, Minimal Language ) formatida bo'lib, u Cargo konfiguratsiya formati hisoblanadi.

Birinchi qator, `[package]`, bo'lim sarlavhasi bo'lib, quyidagi iboralar paketni sozlayotganligini bildiradi. Ushbu faylga qo'shimcha ma'lumot qo'shsak, boshqa bo'limlarni ham qo'shamiz.

Keyingi uchta qatorda cargo dasturingizni kompilyatsiya qilish uchun kerak bo'lgan konfiguratsiya ma'lumotlarini o'rnatadi: Rustning nomi, versiyasi va foydalanish uchun nashri. [E ilovasida](https://doc.rust-lang.org/book/appendix-05-editions.html) edition kalit haqida gapiramiz .

Oxirgi qator, `[dependencies]`, loyihangizning har qanday bog'liqliklarini sanab o'tish uchun bo'limning boshlanishi. Rustda kod paketlari `crates` deb ataladi . Ushbu loyiha uchun bizga boshqa qutilar kerak bo'lmaydi, lekin biz 2-bobdagi birinchi loyihada bo'lamiz, shuning uchun biz ushbu bog'liqliklar bo'limidan foydalanamiz.

Endi `src/main.rs` ni oching va qarang:

Fayl nomi: src/main.rs

```rust
fn main() {
    println!("Hello, world!");
}
```
Cargo `"Hello, world!"` siz uchun dastur, xuddi biz Listing 1-1 da yozganimiz kabi! Hozircha, bizning loyihamiz va yaratilgan Cargo loyihasi o'rtasidagi farq shundaki, Cargo kodni `src` katalogiga joylashtirgan va bizda `Cargo.toml` konfiguratsiya fayli yuqori katalogda mavjud.

Cargo sizning manba fayllaringiz `src` katalogida saqlanishini kutadi . Yuqori darajadagi loyiha katalogi faqat README fayllari, litsenziya maʼlumotlari, konfiguratsiya fayllari va kodingizga aloqador boʻlmagan boshqa narsalar uchun moʻljallangan. Cargo-dan foydalanish loyihalaringizni tartibga solishga yordam beradi. Hamma narsaning o'z o'rni bor va hamma narsa o'z o'rnida.

Agar siz `“Hello, world!”` bilan qilganimizdek, Cargo-dan foydalanmaydigan loyihani boshlagan bo'lsangiz. loyihasi bo'lsa, uni Cargo-dan foydalanadigan loyihaga aylantirishingiz mumkin. Loyiha kodini `src` katalogiga o'tkazing va tegishli `Cargo.toml` faylini yarating.

## Cargo tashish loyihasini qurish va ishga tushirish
Keling, `“Hello, world!”` dasturini qurish va ishga tushirishda nima farq qilishini ko'rib chiqaylik. cargo bilan dastur! `Hello_cargo` katalogidan quyidagi buyruqni kiritib loyihangizni yarating :

```bash
$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs
```
Bu buyruq bajariladigan faylni joriy katalogingizda emas, balki `target/debug/hello_cargo` (yoki Windows-da `target\debug\hello_cargo.exe` ) da yaratadi. Odatiy tuzilish disk raskadrovka tuzilishi bo'lgani uchun Cargo ikkilik faylni `debug` nomli katalogga joylashtiradi . Ushbu buyruq bilan bajariladigan faylni ishga tushirishingiz mumkin:
```bash
$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!
```
Agar hamma narsa yaxshi bo'lsa `Hello, world!`, terminalga chop etish kerak. `cargo build` Birinchi marta ishga tushirish, shuningdek, Cargo yuqori darajadagi yangi faylni yaratishga olib keladi : `Cargo.lock` . Ushbu fayl loyihangizdagi bog'liqliklarning aniq versiyalarini kuzatib boradi. Ushbu loyihada bog'liqliklar yo'q, shuning uchun fayl biroz siyrak. Siz hech qachon bu faylni qo'lda o'zgartirishingiz shart emas; Cargo uning tarkibini siz uchun boshqaradi.

Biz hozirgina loyihani yaratdik `cargo build` va u bilan ishga tushirdik , lekin kodni kompilyatsiya qilish va natijada bajariladigan faylni bitta buyruqda ishga tushirish uchun `./target/debug/hello_cargo` ham foydalanishimiz mumkin `:cargo run`

```bash
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
     Running `target/debug/hello_cargo`
Hello, world!
```
`cargo run` Foydalanish , ishga tushirishni eslab qolishdan ko'ra qulayroqdir `cargo build` va keyin butun yo'lni ikkilik faylga o'tkazing, shuning uchun ko'pchilik ishlab chiquvchilar foydalanadi `cargo run`.

E'tibor bering, bu safar biz Cargo kompilyatsiya qilayotganini ko'rsatadigan natijani ko'rmadik `hello_cargo`. Cargo fayllar o'zgarmaganligini aniqladi, shuning uchun u qayta tiklanmadi, balki ikkilik faylni ishga tushirdi. Agar siz manba kodingizni o'zgartirgan bo'lsangiz, Cargo loyihani ishga tushirishdan oldin uni qayta qurgan bo'lar edi va siz ushbu natijani ko'rgan bo'lar edingiz:
 ```bash
 $ cargo run
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs
     Running `target/debug/hello_cargo`
Hello, world!
```
Cargo, shuningdek, quyidagidek nomlangan buyruq beradi `cargo check`. Bu buyruq kompilyatsiya qilish uchun kodingizni tezda tekshiradi, lekin bajariladigan faylni yaratmaydi:
```bash
$ cargo check
   Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs
```
Nima uchun bajariladigan faylni xohlamaysiz? Ko'pincha `cargo check` `cargo build`dan ko'ra tezroq bo'ladi,, chunki u bajariladigan faylni yaratish bosqichini o'tkazib yuboradi. Agar siz kod yozish paytida ishingizni doimiy ravishda tekshirib tursangiz, undan foydalanish `cargo check` loyihangiz hali ham kompilyatsiya qilinayotganligini bildirish jarayonini tezlashtiradi! Shunday qilib, ko'plab Rustaceanlar `cargo check` o'z dasturlarini kompilyatsiya qilishiga ishonch hosil qilish uchun yozayotganda vaqti-vaqti bilan ishlaydi. Keyin ular `cargo build` bajariladigan fayldan foydalanishga tayyor bo'lganda ishlaydi.

Keling, cargo haqida shu paytgacha o'rganganlarimizni takrorlaymiz:

* Biz `cargo new` yordamida loyiha yaratishimiz mumkin.
* Biz `cargo build` yordamida loyihani qurishimiz mumkin.
* Biz `cargo run` yordamida bir bosqichda loyihani qurishimiz va ishga tushirishimiz mumkin.
* Biz `cargo check` yordamida xatolarni tekshirish uchun ikkilik ishlab chiqarmasdan loyihani qurishimiz mumkin.
* Qurilish natijasini bizning kodimiz bilan bir xil katalogda saqlash o'rniga, Cargo uni `target/debug`  katalogida saqlaydi.
Cargo-dan foydalanishning qo'shimcha afzalligi shundaki, qaysi operatsion tizimda ishlayotganingizdan qat'i nazar, buyruqlar bir xil bo'ladi. Shunday qilib, biz endi Linux va MacOS uchun Windows-ga nisbatan maxsus ko'rsatmalar bermaymiz.