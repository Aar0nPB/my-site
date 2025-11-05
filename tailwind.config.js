/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFFF",     // 天蓝 (DeepSkyBlue)
        secondary: "#1E90FF",   // 海蓝 (DodgerBlue)
        accent: "#8A2BE2",      // Obsidian 紫 (BlueViolet)
        highlight: "#FF8C00",   // Folo 橙 (DarkOrange)
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],     // 推荐用于标题
        body: ["Inter", "sans-serif"],           // 推荐用于正文
        mono: ["Fira Code", "monospace"],        // 展示代码使用
      },
      spacing: {
        18: "4.5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
      },
      fontSize: {
        "2xl-heading": ["2.5rem", { lineHeight: "1.2" }],
        "4xl-heading": ["3.5rem", { lineHeight: "1.1" }],
      }
    }
  },
  plugins: [],
}
