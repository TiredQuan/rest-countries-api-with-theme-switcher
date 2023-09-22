// import { useState } from "react";

export default function ThemeSwitch() {
  let getCurrentTheme = () => window.matchMedia("(prefers-color-scheme:dark)");
  //   const [theme, setTheme] = useState(getCurrentTheme().matches);
  let theme = getCurrentTheme().matches;
  console.log(theme);
}
//SET theme switcher:TODO
