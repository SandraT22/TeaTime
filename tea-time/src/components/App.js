import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TeaControl />
    </React.Fragment>
  );
}

export default App;
