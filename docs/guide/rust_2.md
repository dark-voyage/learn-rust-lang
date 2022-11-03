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
Odatda, Rust standart kutubxonada belgilangan elementlar to'plamiga ega bo'lib, u har bir dastur doirasiga kiradi. Ushbu to'plam muqaddima deb ataladi va siz undagi hamma narsani [standart kutubxona hujjatlarida](https://doc.rust-lang.org/std/prelude/index.html) ko'rishingiz mumkin.

Agar siz foydalanmoqchi bo'lgan tur muqaddimada bo'lmasa, siz ushbu turni foydalanish bayonoti bilan aniq ko'rsatishingiz kerak. `std::io` kutubxonasidan foydalanish sizga bir qator foydali xususiyatlarni, jumladan, foydalanuvchi kiritishini qabul qilish imkoniyatini beradi.

1-bobda ko'rganingizdek, mainfunktsiya dasturga kirish nuqtasidir:
```rust
fn main() {
```
Sintaksis `fn` yangi funktsiyani e'lon qiladi, qavslar, `()`, parametrlar yo'qligini bildiradi va jingalak qavs, `{`, funktsiyaning tanasini boshlaydi.

Siz 1-bobda ham bilib olganingizdek `println!`, ekranga satrni chop etadigan makros:
```rust
    println!("Raqamni toping!");

    println!("Iltimos, taxminingizni kiriting.");
```
Ushbu kod o'yin nima ekanligini ko'rsatuvchi va foydalanuvchidan ma'lumot so'rashni so'rashni chop etadi.

## O'zgaruvchilar bilan qiymatlarni saqlash

Keyinchalik, foydalanuvchi ma'lumotlarini saqlash uchun o'zgaruvchi yaratamiz , masalan:

```rust
    let mut guess = String::new();
```
Endi dastur qiziqarli bo'lib bormoqda! Bu kichik chiziqda juda ko'p narsa bor. `let` O'zgaruvchini yaratish uchun biz bayonotdan foydalanamiz . Mana yana bir misol:

```rust
let olmalar = 5;
```
Bu satr nomli yangi o'zgaruvchini yaratadi `olmalar` va uni 5 qiymatiga bog'laydi. Rustda o'zgaruvchilar standart bo'yicha o'zgarmasdir, ya'ni biz o'zgaruvchiga qiymat berganimizdan keyin qiymat o'zgarmaydi. Biz bu tushunchani 3-bobning “O‘zgaruvchilar va o‘zgaruvchanlik” `mut` bo‘limida batafsil muhokama qilamiz. O‘zgaruvchini o‘zgaruvchan qilish uchun o‘zgaruvchi nomi oldiga qo‘shamiz :

```rust
let olmalar = 5; // o'zgarmas
let mut banan = 5; // o'zgaruvchan
```

::: tip
Eslatma: `//` Sintaksis satr oxirigacha davom etadigan izohni boshlaydi. Rust izohlarda hamma narsani e'tiborsiz qoldiradi. Sharhlarni 3-bobda batafsilroq muhokama qilamiz .
:::

Taxmin qilish o'yini dasturiga qaytsak, endi bilasizki, `let mut guessu` ismli o'zgaruvchan o'zgaruvchini kiritadi `guess`. Teng belgisi ( `=`) Rustga biz hozir biror narsani o'zgaruvchiga bog'lamoqchi ekanligimizni bildiradi. Teng belgisining o'ng tomonida `guess` bog'langan qiymat mavjud bo'lib, bu funktsiyani chaqirish natijasi bo'lib `String::new`, a ning yangi nusxasini qaytaradi `String`. `String` standart kutubxona tomonidan taqdim etilgan satr turi bo'lib, u rivojlanadigan, `UTF-8` kodlangan matn bitidir.

`::new` qatoridagi `::` sintaksisi `new` ning `String` tipidagi bog‘langan funksiya ekanligini bildiradi.
Bog'langan funktsiya - bu turda amalga oshiriladigan funksiya, bu holda `String`.
Ushbu `new` funksiya yangi, bo'sh qatorni yaratadi.
Ko'p turdagi `new` funksiyani topasiz, chunki bu qandaydir yangi qiymatni yaratadigan funksiyaning umumiy nomi.

To'liq holda, `let mut guess = String::new();` line hozirda `String`ning yangi, bo'sh nusxasiga bog'langan o'zgaruvchan o'zgaruvchini yaratdi. Vou!

## Foydalanuvchi ma'lumotlarini qabul qilish
Eslatib o'tamiz, biz standart kutubxonadan `std::io;` dasturning birinchi qatorida. Endi biz `io` modulidan `stdin` funksiyasini chaqiramiz, bu bizga foydalanuvchi kiritishini boshqarish imkonini beradi:

```rust
    io::stdin()
        .read_line(&mut guess)
```
Agar biz dasturning boshida `std::io` yordamida `io` kutubxonasini import qilmagan bo‘lsak, bu funksiya chaqiruvini `std::io::stdin` sifatida yozish orqali funksiyadan foydalanishimiz mumkin edi.
`stdin` funktsiyasi `std::io::Stdin` misolini qaytaradi, bu sizning terminalingiz uchun standart kirish uchun tutqichni ifodalovchi tur.

Keyinchalik, `.read_line(&mut guess)` qatori foydalanuvchidan kiritish uchun standart kiritishdagi `read_line` usulini chaqiradi.
Shuningdek, biz `&mut guess` ni `read_line` ga argument sifatida o'tkazamiz, bu foydalanuvchi kiritgan ma'lumotni qaysi qatorda saqlash kerakligini aytadi.
`read_line` ning to'liq vazifasi foydalanuvchi kiritgan har qanday narsani standart kiritishga olish va uni satrga qo'shish (uning mazmunini qayta yozmasdan), shuning uchun biz ushbu qatorni argument sifatida o'tkazamiz.
String argumenti o'zgaruvchan bo'lishi kerak, shuning uchun usul string tarkibini o'zgartirishi mumkin.

`&` bu argument ma'lumotnoma ekanligini bildiradi, bu sizga kodingizning bir nechta qismlariga ushbu ma'lumotlarni xotiraga bir necha marta nusxalash kerak bo'lmasdan bitta ma'lumotga kirish imkonini beradi.Ma'lumotnomalar murakkab xususiyat bo'lib, Rustning asosiy afzalliklaridan biri havolalardan foydalanish qanchalik xavfsiz va oson ekanligidir.
Ushbu dasturni tugatish uchun ko'p tafsilotlarni bilishingiz shart emas. Hozircha siz bilishingiz kerak bo'lgan narsa shundaki, o'zgaruvchilar singari, havolalar ham standart bo'yicha o'zgarmasdir.
Demak, uni o'zgaruvchan qilish uchun `&gues` o'rniga `&mut guess` yozish kerak. (4-bobda havolalar batafsilroq tushuntiriladi.)

## Potensial nosozlikni Natija turi bilan hal qilish

Biz hali ham ushbu kod qatori ustida ishlayapmiz.Biz hozir matnning uchinchi qatorini muhokama qilmoqdamiz, lekin u hali ham bitta mantiqiy kod qatorining bir qismi ekanligini unutmang.Keyingi qism bu usul:

```rust
        .expect("Satrni o‘qib bo‘lmadi");
```
Biz ushbu kodni quyidagicha yozishimiz mumkin edi:
```rust
io::stdin().read_line(&mut guess).expect("Satrni o‘qib bo‘lmadi");
```
Biroq, bitta uzun qatorni o'qish qiyin, shuning uchun uni bo'lish yaxshidir. Ko'pincha `.method_name`() sintaksisi bilan methodni chaqirganda uzun qatorlarni ajratishga yordam berish uchun yangi qator va boshqa bo'shliqlarni kiritish oqilona. Endi bu chiziq nima qilishini muhokama qilaylik.

Yuqorida aytib o'tilganidek, `read_line` foydalanuvchi kiritgan barcha narsani biz unga o'tkazgan qatorga qo'yadi, lekin u Natija qiymatini ham qaytaradi. `Result` ko'pincha [enum](https://doc.rust-lang.org/book/ch06-00-enums.html) deb ataladigan ro'yxat bo'lib, u bir nechta mumkin bo'lgan holatlardan birida bo'lishi mumkin. Har bir mumkin bo'lgan holatni variant deb ataymiz.

6-bobda enumlar batafsilroq yoritiladi. Ushbu `Result` turlarining maqsadi xatolarga oid ma'lumotlarni kodlashdir.

`Result` variantlari `Ok` va `Err`. `Ok` varianti operatsiya muvaffaqiyatli bo'lganligini bildiradi va `Ok` ichida muvaffaqiyatli yaratilgan qiymat mavjud.
`Err` varianti operatsiya bajarilmaganligini bildiradi va `Err` operatsiya qanday yoki nima uchun bajarilmagani haqida ma'lumotni o'z ichiga oladi.

`Result` turidagi qiymatlar, har qanday turdagi qiymatlar kabi, ularda aniqlangan usullarga ega.
`Result` misolida siz tekshirib ko'rishingiz mumkin bo'lgan [`expect method`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect) mavjud.
Agar `Result`ning ushbu namunasi `Err` qiymati bo'lsa, `expect` dasturning ishdan chiqishiga olib keladi va `expect` uchun argument sifatida siz uzatgan xabarni ko'rsatadi.
Agar `read_line` usuli `Err`ni qaytarsa, bu asosiy operatsion tizimdan kelgan xato natijasi bo'lishi mumkin.
Agar `Result`ning ushbu namunasi `Ok` qiymati bo'lsa, `expect` `Ok` ushlab turgan qaytish qiymatini oladi va siz undan foydalanishingiz uchun aynan shu qiymatni sizga qaytaradi. Bunday holda, bu qiymat foydalanuvchi kiritishidagi baytlar soni.

Agar siz `expect`ga murojaat qilmasangiz, dastur tuziladi, lekin siz ogohlantirish olasiz:

```bash
$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
warning: unused `Result` that must be used
  --> src/main.rs:10:5
   |
10 |     io::stdin().read_line(&mut guess);
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_must_use)]` on by default
   = note: this `Result` may be an `Err` variant, which should be handled

warning: `guessing_game` (bin "guessing_game") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.59s
```

<!-- Keyingi safar ishga tushirganingizda `cargo build`, Cargo mavjud qutilar reestrini yangilaydi va siz `rand` ko'rsatgan yangi versiyaga muvofiq talablaringizni qayta ko'rib chiqadi.

[Cargo](https://doc.rust-lang.org/cargo/) va uning ekotizimlari haqida 14-bobda ko'rib chiqamiz, lekin hozircha bu faqat bilishingiz kerak. cargo kutubxonalarni qayta ishlatishni juda osonlashtiradi, shuning uchun Rustaceans bir nechta paketlardan yig'ilgan kichikroq loyihalarni yozishga qodir. -->

<!-- ## Tasodifiy raqam yaratish
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

Ikkinchi yangi qator maxfiy raqamni chop etadi. Bu dasturni ishlab chiqishda uni sinab ko'rishimiz uchun foydalidir, lekin biz uni oxirgi versiyadan o'chirib tashlaymiz. Agar dastur boshlanishi bilanoq javobni chop etsa, bu unchalik o'yin emas!

Dasturni bir necha marta ishga tushirishga harakat qiling:

```bash
$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 2.53s
     Running `target/debug/guessing_game`
Raqamni toping!
Yashirin raqam: 7
Iltimos, taxminingizni kiriting.
4
Taxminingiz: 4

$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/guessing_game`
Raqamni toping!
Yashirin raqam: 83
Iltimos, taxminingizni kiriting.
5
Taxminingiz: 5
```
Siz turli xil tasodifiy raqamlarni olishingiz kerak va ularning barchasi 1 dan 100 gacha raqamlar bo'lishi kerak. Ajoyib ish!
 -->
