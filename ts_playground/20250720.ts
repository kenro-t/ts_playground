type NavItem = {
  label: string;
  href: `/${string}` | `${"http" | "https"}://${string}`
};

const items: NavItem[] = [
  // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "AbeHiroshi", href: "http://abehiroshi.la.coocan.jp/" },
  { label: "Google", href: "https://www.google.com" },
  { label: "Twitter (Currently X)", href: "https://twitter.com" },

  // ❌ 以下はエラーにしてください
  { label: "Contact", href: "contact" },
  { label: "Contact", href: "./contact" },
  { label: "Example", href: "www.example.com" },
];

const dateList: `${number}/${number}/${number}`[] = [
  // ✅ 以下は想定通りの形式。エラーにならないようにしてください
  "2001/8/24",
  "2006/11/30",
  "2009/9/1",

  // ❌ 以下はエラーにしたいです
  "2012-8-16", // 区切り文字が違うのでエラーにしたい
  "20150729", // 区切り文字がないのでエラーにしたい
  "2021/10", // 日の部分がないのでエラーにしたい
];