import './App.css';
// import logo from "./images/AF_LOGO.png";




function App() {
  
  const about = () => {
    return (
      <>
        <p>ABOUT</p>
      </>
    )
  }
  
  const theBody = ()=> {
    return (
      <>
        <div className="bgshape">
          <div className="bigcircle"></div>
        </div>
        <p>Check it out!</p>
      </>

    )

  }
  let body = theBody();
  
   const bodyChanger = () => {
    body = about();

  }



  return (
    <div className="App">
      <header >
        <div className="header">
          <div className="header-logo">
            <img src="/images/AF_LOGO.png" className="header-logo" alt="AFACTOR Media" />
          </div>
          <div className=""></div>
          <div className="header-menus">
            <div className="menu-links">
              <div className="menu-item" onClick={() => {console.log(about())}}>About</div>
              <div className="menu-item">Work</div>
              <div className="menu-item">Contact</div>
              <div className="menu-item">Client Login</div>
            </div>
          </div>
        </div>
        <div className="contentmain">
          {body}
          <h1>This is here?</h1>

        </div>
      </header>
    </div>
  );
}

export default App;
