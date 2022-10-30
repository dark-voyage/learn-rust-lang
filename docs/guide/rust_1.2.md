# Hello, World!
Endi siz Rust-ni o'rnatdingiz, keling, birinchi Rust dasturingizni yozamiz. Yangi tilni o'rganayotganda matnni ekranga chop etadigan kichik dastur yozish an'anaviy `Hello, world!`, shuning uchun biz bu yerda ham shunday qilamiz!

### Loyiha jildini yaratish
Rust kodingizni saqlash uchun jild yaratishdan boshlaysiz. Rust uchun kodingiz qayerda turishi muhim emas, lekin bu kitobdagi mashqlar va loyihalar uchun biz `home` jildingizda loyihalar jildini yaratishni va barcha loyihalaringizni shu yerda saqlashni tavsiya qilamiz.

Terminalni oching va loyihalar jildini va `Hello, world!` jildini yaratish uchun quyidagi buyruqlarni kiriting. loyihalar jildidagi loyiha .

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
Rust dasturini yozish va ishga tushirish
Keyin yangi manba faylini yarating va uni `main.rs` deb nomlang . Rust fayllari har doim `.rs` kengaytmasi bilan tugaydi. Agar fayl nomida bir nechta so'zlardan foydalansangiz, ularni ajratish uchun pastki chiziqdan foydalanish shart. Misol uchun, `helloworld.rs` o'rniga `hello_world.rs` dan foydalaning .

Endi siz yaratgan `main.rs` faylini oching va kodni 1-1 ro'yxatiga kiriting.

Fayl nomi: main.rs
```rust
fn main() {
    println!("Hello, world!");
}
```
Faylni saqlang va `~/projects/hello_world` katalogidagi terminal oynasiga qayting . Linux yoki macOS da faylni kompilyatsiya qilish va ishga tushirish uchun quyidagi buyruqlarni kiriting:
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
Operatsion tizimingizdan qat'i nazar, satr `Hello, world!` terminalga chop etilishi kerak. Agar siz ushbu natijani ko'rmasangiz, yordam olish yo'llari uchun O'rnatish bo'limining ["Muammolarni bartaraf etish"](/guide/rust_1.1.html#muammolarni-bartaraf-qilish-nosozliklarni-tuzatish) bo'limiga qayting.

Agar `Hello, world!` chop etilgan bo'lsa, tabriklaymiz! Siz rasmiy ravishda Rust dasturini yozdingiz. Bu sizni Rust dasturchisiga aylantiradi - xush kelibsiz!

Rust dasturi anatomiya
Keling, ushbu `"Hello, world!"` batafsil dastur. Mana jumboqning birinchi qismi: