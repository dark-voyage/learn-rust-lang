## O'rnatish

Birinchi qadam Rustni o'rnatishdir. `rustup` Rust versiyalarini va tegishli
vositalarni boshqarish uchun buyruq qatori vositasi bo'lgan Rust orqali yuklab
olamiz . Yuklab olish uchun sizga internet ulanishi kerak bo'ladi.

Quyidagi qadamlar Rust kompilyatorining so'nggi barqaror versiyasini o'rnatadi.
Rustning barqarorligi kafolatlari kitobdagi kompilyatsiya qilingan barcha
misollar Rustning yangi versiyalari bilan kompilyatsiya qilishda davom etishini
ta'minlaydi. Chiqish versiyalar orasida biroz farq qilishi mumkin, chunki Rust
ko'pincha xato xabarlari va ogohlantirishlarni yaxshilaydi. Boshqacha qilib
aytadigan bo'lsak, ushbu qadamlar yordamida o'rnatgan har qanday yangi, barqaror
Rust versiyasi ushbu kitob mazmuni bilan kutilganidek ishlashi kerak.

::: tip Buyruqlar qatori yozuvi Ushbu bobda va butun kitobda biz terminalda
ishlatiladigan ba'zi buyruqlarni ko'rsatamiz. Terminalga kiritishingiz kerak
bo'lgan qatorlar bilan boshlanadi $. Belgini kiritishingiz shart emas $; har bir
buyruqning boshlanishini ko'rsatish uchun ko'rsatilgan buyruq qatori so'rovi.
Boshlanmagan satrlar $ odatda oldingi buyruqning natijasini ko'rsatadi. Bundan
tashqari, PowerShell-ga xos misollar >dan ko'ra foydalanadi $. :::

`rustup` Linux yoki macOS-da o'rnatish Agar siz Linux yoki macOS dan
foydalansangiz, terminalni oching va quyidagi buyruqni kiriting:

```bash
$ curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh
```

Buyruq skriptni yuklab oladi va `rustup` Rustning so'nggi barqaror versiyasini
o'rnatadigan dasturni o'rnatishni boshlaydi. Sizdan parol so'ralishi mumkin.
O'rnatish muvaffaqiyatli bo'lsa, quyidagi qator paydo bo'ladi:

```bash
Rust is installed now. Great!
```

Shuningdek, sizga havola kerak bo'ladi , ya'ni Rust o'zining kompilyatsiya
qilingan natijalarini bitta faylga birlashtirish uchun foydalanadigan dastur.
Ehtimol, sizda allaqachon mavjud. Agar bog'lovchi xatolarga duch kelsangiz,
odatda bog'lovchini o'z ichiga olgan C kompilyatorini o'rnatishingiz kerak. AC
kompilyatori ham foydalidir, chunki ba'zi umumiy Rust paketlari C kodiga bog'liq
va C kompilyatoriga muhtoj bo'ladi.

MacOS-da siz C kompilyatorini ishga tushirish orqali olishingiz mumkin:

```bash
$ xcode-select --install
```

Linux foydalanuvchilari odatda tarqatish hujjatlariga muvofiq GCC yoki Clang-ni
o'rnatishlari kerak. Misol uchun, agar siz Ubuntu dan foydalansangiz,
`build-essential`paketni o'rnatishingiz mumkin.

## `rustup` Windows-da o'rnatish

Windows tizimida https://www.rust-lang.org/tools/install saytiga o'ting va
Rustni o'rnatish bo'yicha ko'rsatmalarga amal qiling. O'rnatishning bir
nuqtasida sizga Visual Studio 2013 yoki undan keyingi versiyalari uchun MSVC
qurish vositalari kerakligi haqida xabar keladi. Qurilish vositalarini olish
uchun Visual Studio 2022 ni o'rnatishingiz kerak bo'ladi . Qaysi ish yuklarini
o'rnatish kerakligi so'ralganda, quyidagilarni kiriting:

- "C++ bilan ish stolini ishlab chiqish"
- Windows 10 yoki 11 SDK
- Ingliz tili to'plami komponenti va siz tanlagan boshqa tillar to'plami Ushbu
  kitobning qolgan qismi cmd.exe va PowerShell-da ishlaydigan buyruqlardan
  foydalanadi. Agar aniq farqlar mavjud bo'lsa, qaysi birini ishlatish
  kerakligini tushuntiramiz.

## Muammolarni bartaraf qilish; nosozliklarni TUZATISH

Rust to'g'ri o'rnatilganligini tekshirish uchun shellni oching va quyidagi
qatorni kiriting:

```bash
$ rustc --version
```

Quyidagi formatda chiqarilgan soʻnggi barqaror versiya uchun versiya raqamini
koʻrishingiz, xeshni bajarishingiz va qabul qilingan sanani koʻrishingiz kerak:

```bash
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

Agar siz ushbu ma'lumotni ko'rsangiz, Rustni muvaffaqiyatli o'rnatdingiz! Agar
siz ushbu ma'lumotni ko'rmasangiz, Rust %PATH% tizim o'zgaruvchisida quyidagi
tarzda ekanligini tekshiring.

Windows CMD-da quyidagilardan foydalaning:

```bash
> echo %PATH%
```

PowerShell-da foydalaning:

```bash
> echo $env:Path
```

Linux va macOS-da quyidagilardan foydalaning:

```bash
echo $PATH
```

Agar hammasi to'g'ri bo'lsa va Rust hali ham ishlamasa, yordam olishingiz mumkin
bo'lgan bir qancha joylar mavjud.
[Eng osoni rasmiy Rust Discord](https://discord.com/invite/rust-lang) -dagi
#beginners kanali . U erda sizga yordam beradigan boshqa Rustacean (biz
o'zimizni ahmoqona taxallus) bilan suhbatlashishingiz mumkin. Boshqa ajoyib
resurslarga [Foydalanuvchilar forumi](https://users.rust-lang.org/) va
[Stack Overflow](https://stackoverflow.com/questions/tagged/rust) kiradi .

## Yangilash va o'chirish

Rust orqali o'rnatilgandan so'ng `rustup`, Rustning yangi versiyasi chiqqanda,
eng so'nggi versiyaga yangilash oson bo'ladi. Shellingizdan quyidagi yangilash
skriptini ishga tushiring:

```bash
$ rustup update
```

Rust va `rustup`ni o'chirish uchun shelldan quyidagi o'chirish skriptini ishga
tushiring:

```bash
$ rustup self uninstall
```

## Mahalliy hujjatlar

Rust-ning o'rnatilishi hujjatlarning mahalliy nusxasini ham o'z ichiga oladi,
shuning uchun uni oflayn rejimda o'qishingiz mumkin. `rustup doc`Brauzeringizda
mahalliy hujjatlarni ochish uchun ishga tushiring .

Istalgan vaqtda standart kutubxona tomonidan tur yoki funksiya taqdim etilsa va
siz u nima qilishini yoki undan qanday foydalanishni bilmasangiz, bilish uchun
amaliy dasturlash interfeysi (API) hujjatlaridan foydalaning!
