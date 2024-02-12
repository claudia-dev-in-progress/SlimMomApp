import { ThemeProvider, createTheme } from "@mui/material";

import { Helmet } from "react-helmet";
import { Hero } from "components/Herosection/Herosection";
import { DailyCaloriesForm } from "components/DailyCaloriesForm/DailyCaloriesForm";

const theme = createTheme({
  typography: {
    button: {
      fontFamily: "Verdana",
    },
    fontSize: "34px",
  },
  palette: {
    ochre: {
      main: "rgb(252, 132, 45)",
      contrastText: "white",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <DailyCaloriesForm />
    </ThemeProvider>
  );
};

export default Home;
