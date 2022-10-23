import './App.css';
import logo from "./images/AF_LOGO.png";

function App() {
  return (
    <div className="App">
      <header >
        <div className="header">
          <div className="header-logo">
            <img src={logo} className="header-logo" alt="AFACTOR Media" />
          </div>
          <div className=""></div>
          <div className="header-menus">
            <div className="menu-links">
              <div className="menu-item">About</div>
              <div className="menu-item">Work</div>
              <div className="menu-item">Contact</div>
              <div className="menu-item">Client Login</div>

            </div>

          </div>
        </div>
        <div className="contentmain">
          Meat

        </div>
      </header>
    </div>
  );
}

export default App;
