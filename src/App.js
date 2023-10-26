// import logo from "./logo.svg";

// import { Sun1 , Add } from "iconsax-react";
import "./App.css";

function App() {
  return (
    <div className="App container ">
      <nav className="flex">
        <ul className="flex margin-right">
          <li className="logo">PhotoStash </li> <li>Gallery</li>
        </ul>
        <ul className="flex">
          <li>Sign in</li>
        </ul>
      </nav>
      <main>
        <section>
          <label for="input-file">
            <div className="box"></div>
          </label>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="input-file"
            className="hide"
          />

          <label for="input-file" className="btn">
            Upload a photo
          </label>
             <a  href="#" className="terms"><p>only jpeg, png and jpg files</p></a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;

// photostash logo name color color: #61dafb;
// photostash font
// photostash dark md bg background-color: #282c34;
//import sun icon for darkmode and light mode from icon-sax
