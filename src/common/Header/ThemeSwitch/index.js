import {
  Wrapper,
  BackgroundText,
  ThemeSwitchButton,
  SwitchElement,
} from "./styled";
import light from "./icon/light.svg";
import dark from "./icon/dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <BackgroundText>Dark mode {isDarkTheme ? "on" : "off"} </BackgroundText>
      <ThemeSwitchButton
        onClick={() => dispatch(toggleTheme())}
        title="change a theme"
      >
        <SwitchElement
          src={isDarkTheme ? dark : light}
          alt="Change Theme"
          moveRight={isDarkTheme}
        />
      </ThemeSwitchButton>
    </Wrapper>
  );
};

export default ThemeSwitch;
