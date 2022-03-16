import React from "react";
import Carousel from '../components/carousel'
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ImageTab from "../components/simpleTab/simpleTab";
import Atendence from "../components/customerService";
import Questions from "../components/FrequentQuestions";


const Page1 = () => {

  const theme = createTheme({ typography: { useNextVariants: true } });

  return (
    <div >
      <ThemeProvider theme={theme}>
        <Carousel />
        <ImageTab />
        <Atendence />
        <Questions />
      </ThemeProvider>
    </div>
  );
}

export default Page1;
