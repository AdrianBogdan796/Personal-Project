const localStorageKey = "isDarkTheme";

export const saveThemeInLocalStorage = (isDarkTheme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDarkTheme));

export const getThemeFromLocalStorage = (init) =>
  JSON.parse(localStorage.getItem(localStorageKey)) || init;
