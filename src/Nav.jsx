import "./App.css";

function Nav() {
  return (
    <div className="nav">
      <div className="navbar nav-left">
        <img className="logo grab" src="./images/logos/logo1.png" alt="logo" />
      </div>
      <div className="navbar nav-right">
        <a href="/">Login</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Nav;
