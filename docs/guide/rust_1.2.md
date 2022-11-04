# Hello, World!

Endi siz Rust-ni o'rnatdingiz, keling, birinchi Rust dasturingizni yozamiz.
Yangi tilni o'rganayotganda matnni ekranga chop etadigan kichik dastur yozish
an'anaviy `Hello, world!`, shuning uchun biz bu yerda ham shunday qilamiz!

### Loyiha jildini yaratish

Rust kodingizni saqlash uchun jild yaratishdan boshlaysiz. Rust uchun kodingiz
qayerda turishi muhim emas, lekin bu kitobdagi mashqlar va loyihalar uchun biz
`home` jildingizda loyihalar jildini yaratishni va barcha loyihalaringizni shu
yerda saqlashni tavsiya qilamiz.

Terminalni oching va loyihalar jildini va `Hello, world!` jildini yaratish uchun
quyidagi buyruqlarni kiriting. loyihalar jildidagi loyiha .

Windows tizimidagi Linux, macOS va PowerShell uchun quyidagilarni kiriting:

```bash
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
```

Windows CMD uchun quyidagilarni kiriting:

```cmd
> mkdir "%USERPROFILE%\projects"
> cd /d "%USERPROFILE%\projects"
> mkdir hello_world
> cd hello_world
```

Rust dasturini yozish va ishga tushirish Keyin yangi manba faylini yarating va
uni `main.rs` deb nomlang . Rust fayllari har doim `.rs` kengaytmasi bilan
tugaydi. Agar fayl nomida bir nechta so'zlardan foydalansangiz, ularni ajratish
uchun pastki chiziqdan foydalanish shart. Misol uchun, `helloworld.rs` o'rniga
`hello_world.rs` dan foydalaning .

Endi siz yaratgan `main.rs` faylini oching va kodni 1-1 ro'yxatiga kiriting.

Fayl nomi: main.rs

```rust
fn main() {
    println!("Hello, world!");
}
```

Faylni saqlang va `~/projects/hello_world` katalogidagi terminal oynasiga
qayting . Linux yoki macOS da faylni kompilyatsiya qilish va ishga tushirish
uchun quyidagi buyruqlarni kiriting:

```bash
$ rustc main.rs
$ ./main
Hello, world!
```

Windows-da `.\main.exe` o'rniga buyruqni kiriting `./main:`

```cmd
> rustc main.rs
> .\main.exe
Hello, world!
```

Operatsion tizimingizdan qat'i nazar, satr `Hello, world!` terminalga chop
etilishi kerak. Agar siz ushbu natijani ko'rmasangiz, yordam olish yo'llari
uchun O'rnatish bo'limining
["Muammolarni bartaraf etish"](/guide/rust_1.1.html#muammolarni-bartaraf-qilish-nosozliklarni-tuzatish)
bo'limiga qayting.

Agar `Hello, world!` chop etilgan bo'lsa, tabriklaymiz! Siz rasmiy ravishda Rust
dasturini yozdingiz. Bu sizni Rust dasturchisiga aylantiradi - xush kelibsiz!

Rust dasturi anatomiya Keling, ushbu `"Hello, world!"` batafsil dastur. Mana
jumboqning birinchi qismi:

```rust
fn main() {

}
```

Bu satrlar nomli funktsiyani belgilaydi `main.` Funktsiya `main` alohida: bu har
doim bajariladigan Rust dasturida ishlaydigan birinchi koddir. `main` Bu erda
birinchi qatorda parametrlari bo'lmagan va hech narsa qaytarmaydigan funksiya
e'lon qilinadi . Agar parametrlar mavjud bo'lsa, ular qavslar ichiga kiradi
`()`.

Funktsiya tanasi ichiga o'ralgan `{}` . Rust barcha funktsiya organlari atrofida
jingalak qavslarni talab qiladi. Ochilgan jingalak qavsni funksiya
deklaratsiyasi bilan bir qatorga qo'yib, orasiga bitta bo'sh joy qo'yish yaxshi
uslubdir. Funktsiya tanasi `main` quyidagi kodni o'z ichiga oladi:

```rust
    println!("Hello, world!");
```

Bu chiziq ushbu kichik dasturdagi barcha ishlarni bajaradi: u matnni ekranga
chop etadi. Bu erda to'rtta muhim tafsilotga e'tibor berish kerak.

Birinchidan, Rust uslubi yorliq emas, to'rtta bo'shliq bilan chekinishdir.

Ikkinchidan, `println!` Rust makrosini chaqiradi. Agar u funktsiyani o'rniga
chaqirgan bo'lsa, u `println`(siz `!`) sifatida kiritiladi. Rust makroslarini
19-bobda batafsilroq muhokama qilamiz. Hozircha siz shuni bilishingiz kerakki
`!` , siz oddiy funksiya o‘rniga makroni chaqirayotgan vositadan foydalanasiz va
makrolar har doim ham xuddi shunday qoidalarga amal qilmaydi. funktsiyalari.

Uchinchidan, siz "`Hello, world!"` ni ko'rasiz. Bu qatorni argument sifatida ga
o'tkazamiz `println!` va satr ekranga chop etiladi.

To'rtinchidan, satrni nuqtali vergul ( `;`) bilan tugatamiz, bu esa bu ifoda
tugaganligini va keyingisi boshlashga tayyorligini bildiradi. Rust kodining
aksariyat satrlari nuqtali vergul bilan tugaydi.

# Kompilyatsiya va ishga tushirish alohida bosqichlardir

Siz hozirgina yangi yaratilgan dasturni ishga tushirdingiz, shuning uchun
jarayonning har bir bosqichini ko'rib chiqamiz.

Rust dasturini ishga tushirishdan oldin uni Rust kompilyatoridan foydalanib,
`rustc` buyruqni kiritib, unga manba faylingiz nomini kiritishingiz kerak,
masalan:

```bash
$ rustc main.rs
```

Agar sizda C yoki C++ foni bo'lsa, bu `gcc` yoki ga o'xshashligini sezasiz
`clang`. Muvaffaqiyatli kompilyatsiyadan so'ng Rust ikkilik bajariladigan faylni
chiqaradi.

`ls` Linux, macOS va Windows-dagi PowerShell- da siz shelldagi buyruqni kiritish
orqali bajariladigan faylni ko'rishingiz mumkin . Linux va macOS-da siz ikkita
faylni ko'rasiz. Windows-dagi PowerShell bilan siz CMD-dan foydalangan holda
ko'rgan uchta faylni ko'rasiz.

```bash
$ ls
main  main.rs
```

Windows-da CMD bilan siz quyidagilarni kiritasiz:

```cmd
> dir /B %= the /B option says to only show the file names =%
main.exe
main.pdb
main.rs
```

Bu `.rs` kengaytmali manba kodi faylini, bajariladigan faylni ( Windowsda
main.exe , lekin boshqa barcha platformalarda asosiy ) va Windows-dan
foydalanganda `.pdb` kengaytmali disk raskadrovka ma'lumotlarini o'z ichiga
olgan faylni ko'rsatadi. Bu yerdan siz asosiy yoki `main.exe` faylini ishga
tushirasiz, masalan:

```bash
$ ./main # or .\main.exe on Windows
```

Agar `main.rs` sizning `"Hello, world!"` dastur, bu qator `Hello, world!`
terminalingizga chop etadi.

Agar siz Ruby, Python yoki JavaScript kabi dinamik tilni yaxshi bilsangiz,
dasturni alohida bosqichlar sifatida kompilyatsiya qilish va ishga tushirishga
odatlanmagan bo'lishingiz mumkin. Rust - bu oldindan tuzilgan kompilyatsiya
tili, ya'ni siz dasturni kompilyatsiya qilishingiz va bajariladigan faylni
boshqa birovga berishingiz mumkin va ular Rustni o'rnatmasdan ham uni ishga
tushirishlari mumkin. Agar kimgadir .rb , .py yoki .js faylini bersangiz, ularda
Ruby, Python yoki JavaScript ilovasi oʻrnatilgan boʻlishi kerak (mos ravishda).
Ammo bu tillarda dasturni kompilyatsiya qilish va ishga tushirish uchun faqat
bitta buyruq kerak bo'ladi. Til dizaynida hamma narsa o'zaro kelishuvdir.

Oddiy dasturlar uchun shunchaki kompilyatsiya `rustc` qilish yaxshi, lekin
loyihangiz o'sib borishi bilan siz barcha variantlarni boshqarishni va
kodingizni almashishni osonlashtirishni xohlaysiz. Keyinchalik, biz sizni
haqiqiy Rust dasturlarini yozishda yordam beradigan yuk vositasi bilan
tanishtiramiz.
