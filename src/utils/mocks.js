const changeValue = () => {
  const container = document.querySelector("#todovue-theme-button");
  const firstChild = container.firstElementChild;
  const secondChild = firstChild.firstElementChild;
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";

  firstChild.classList.toggle("light-mode", !isDark);
  firstChild.classList.toggle("dark-mode", isDark);
  secondChild.classList.toggle("light-mode", !isDark);
  secondChild.classList.toggle("dark-mode", isDark);
};

export const demos = [
  {
    id: 1,
    title: "TvThemeButton Default",
    propsData: { onClick: changeValue },
    html: `<!-- Emits the "change-theme" event
Which takes the current theme as its value
Saves it in the localStorage   -->
<tv-theme-button @change-theme="changeValue"/>`,
  },
];
