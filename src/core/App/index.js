import SectionHeader from "../../common/SectionHeader/index.js";
import SectionSkills from "../../common/SectionSkills/index.js";
import SectionPortfolio from "../../common/SectionPortfolio/index.js";
import Footer from "../../common/Footer/index.js";
import { AppContainer } from "../../common/Container/styled.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/SectionHeader/ThemeSwitch/themeSlice.js";
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
