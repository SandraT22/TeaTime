import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeCarousel from "./HomeCarousel";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TeaControl />
      <HomeCarousel />
    </React.Fragment>
  );
}

export default App;
