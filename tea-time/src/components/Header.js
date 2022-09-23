import React from "react";




function Header(){
  const headerStyle = {
    fontfamily: 'Impact, Haettenschweiler',
    backgroundColor: 'rgb(255,204,153)',
    paddingLeft: '.5rem',
  };
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>TeaTime co.</h1>
        <p>Welcome to TeaTime tea co. where natural loose leaf teas are our top priority!</p>
      </div>
    </React.Fragment>
  );
}

export default Header;