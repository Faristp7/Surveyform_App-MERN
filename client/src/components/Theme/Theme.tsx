export default function Theme() {
  return (
    <div className="absolute right-5 sm:right-6 top-5">
      <img
        className="w-7 h-7 cursor-pointer hidden dark:block"
        src="https://img.icons8.com/ios-glyphs/30/ffffff/sun--v1.png"
        alt="sun--v1"
        onClick={() => document.documentElement.classList.remove("dark")}
      />
      <img
        className="w-7 h-7 cursor-pointer block dark:hidden"
        src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png"
        alt="sun--v1"
        onClick={() => document.documentElement.classList.add("dark")}
      />
    </div>
  );
}
