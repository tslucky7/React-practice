/** @type {import('tailwindcss').Config} */
module.exports = {
  //tailwindcss がどのファイルを解析して、使用されているクラスを抽出するかを指定します。
  content: ["./src/**/*.{html,js,ts,tsx}"],
  //Tailwind CSS のデフォルトテーマをカスタマイズするための設定
  theme: {
    //extend を使うことで、デフォルトのテーマに新しいスタイルを追加できます。
    extend: {},
  },
  //Tailwind CSS のプラグインを追加するための設定
  plugins: [],
}
