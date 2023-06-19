"use client";

import "react-toggle/style.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useLocalStorage from "use-local-storage";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Toggle from "react-toggle";
import { ChangeEventHandler, useEffect } from "react";
import { MEDIA_PREFERS_SCHEME, THEMES } from "@/consts";
import { disableDark, enableDark } from "@/redux/features/themeSlice";

export default function ThemeSwitcherButton() {
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", "");
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const onSelectDark = () => {
    // 2. DOM updates
    document.documentElement.classList.add(THEMES.DARK);
    // 3. Store updates
    dispatch(enableDark());
  };
  const onSelectLight = () => {
    // 2. DOM updates
    document.documentElement.classList.remove(THEMES.DARK);
    // 3. Store updates
    dispatch(disableDark());
  };

  const onToggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      onSelectDark();
      setStoredTheme(THEMES.DARK);
      return;
    }
    onSelectLight();
    setStoredTheme(THEMES.LIGHT);
  };

  const onDetectTheme = () => {
    // look if previous or system preferences exist
    const isDark =
      storedTheme === THEMES.DARK ||
      (!storedTheme && window?.matchMedia(MEDIA_PREFERS_SCHEME).matches);

    if (isDark) {
      onSelectDark();
    } else {
      onSelectLight();
    }
  };

  useEffect(() => {
    onDetectTheme();

    // add listener for incoming changes
    window
      .matchMedia(MEDIA_PREFERS_SCHEME)
      .addEventListener("change", ({ matches }) => {
        if (!storedTheme) {
          if (matches) {
            onSelectDark();
          } else {
            onSelectLight();
          }
        }
      });
  }, []);

  return (
    <Toggle
      className="react-toggle--custom"
      checked={theme === THEMES.DARK}
      icons={{
        checked: (
          <span className="flex items-center justify-center h-full text-white">
            <BsMoonStarsFill />
          </span>
        ),
        unchecked: (
          <span className="flex items-center justify-center h-full text-white">
            <BsSunFill />
          </span>
        ),
      }}
      onChange={onToggleTheme}
    />
  );
}
