import SectionHeader from "../../common/Header/index.js";
import SectionSkills from "../../common/Skills/index.js";
import SectionPortfolio from "../../common/Portfolio/index.js";
import Footer from "../../common/Footer/index.js";
import { AppContainer } from "../../common/Container/styled.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/Header/ThemeSwitch/themeSlice.js";
import { darkTheme, lightTheme } from "./theme.js";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Normalize />
      <GlobalStyles />
      <AppContainer>
        <SectionHeader />
        <SectionSkills />
        <SectionPortfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
