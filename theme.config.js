// theme.config.js
export default {
  projectLink: "https://github.com/rust-lang-uz/learn-rust-lang",
  docsRepositoryBase:
    "https://github.com/rust-lang-uz/learn-rust-lang/blob/master",
  titleSuffix: " – Rust Uzbekistan",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Rust Uzbekistan.`,
  footerEditLink: `GitHub da o'zgartirish kiritish`,
  logo: (
    <>
      <span>
        <b>Rust O'zbekiston</b>
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Rust O'zbekiston Hamjamiyati tomonidan yozilgan qo'llanmalar"
      />
      <meta name="og:title" content="Rust O'zbekiston" />
    </>
  ),
};
