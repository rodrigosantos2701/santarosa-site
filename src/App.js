import React, { useState } from "react";
import Header from "./components/headers/header";
import Footer from "./components/footer";
import { Page1, Page2, Page3, Page4, Page5, Page6 } from './pages'
import './App.css';


const App = () => {

  const [page, setPage] = useState(0)
  let pagina = <Page1 />

  switch (page) {
    case 0:
      pagina = <Page1 />;
      break;
    case 1:
      pagina = <Page2 />;
      break;
    case 2:
      pagina = <Page3 />;
      break;
    case 3:
      pagina = <Page4 />;
      break;
    case 4:
      pagina = <Page5 />;
      break;
    case 5:
      pagina = <Page6 />;
      break;


    default:
      pagina = <Page1 />;
  }

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {pagina}
      <Footer />
    </div>
  );
}

export default App;
