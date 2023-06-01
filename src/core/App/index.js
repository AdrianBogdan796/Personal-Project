import SectionHeader from "../../components/SectionHeader/index.js";
import SectionSkills from "../../components/SectionSkills/index.js";
import SectionPortfolio from "../../components/SectionPortfolio/index.js";
import Footer from "../../components/Footer/index.js";
import { AppContainer } from "../../components/Container/styled.js";
import { GlobalStyles } from "./GlobalStyles.js";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../components/SectionHeader/ThemeSwitch/themeSlice.js";
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
