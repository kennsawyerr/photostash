// import picture from "./nothing-to-see-icon.png";

import { TickCircle } from "iconsax-react";
import { EmojiHappy } from "iconsax-react";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageOk , setImageOk] = useState(null);
  const handleImage = (event) => {
    if (
      event.target.files[0].type !== "image/jpeg" &&
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png"
    ) {
      alert("invalid file type");
      console.log(event.target.files[0]);
    } else {
      console.log(event.target.files[0]);
      setSelectedImage(event.target.files[0]);
      setImageOk()
    }

    // if (file.type !=="image/jpeg" || file.type !=="image/jpg"  || file.type !=="image/png" ) {
    //   alert("invalid file type") }

    //   else{
    //         alert ("sucess")
    //   //   <div className="  success flex">
    //   //   <div className="container flex">
    //   //   <TickCircle /> Upload successful
    //   // </div>
    //   // </div>
    //   }
  };

  return (
    <div className="App container ">
      <nav className="flex">
        <div className="container flex">
          <ul className="flex margin-right">
            <li className="logo">PhotoStash</li> <li>Gallery</li>
          </ul>
          <ul className="flex">
            <li>Sign in</li>
          </ul>
        </div>
      </nav>
      {imageOk && ( 
      <div className="  success flex">
        <div className="container flex">
          <TickCircle /> Upload successful
        </div>
      </div> )}
      <main>
        <section>
          <div className="box grid">
            <label htmlFor="input-file">
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="add button"
                  className="input-img"
                />
              )}
            </label>
            <EmojiHappy />
            <p className="justify-f-strt">Drag and drop here ;)</p>
          </div>

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="input-file"
            className="hide"
            onChange={handleImage}
          />

          <label htmlFor="input-file" className="btn">
            Upload a photo
          </label>
          <a href="/src/gallery" className="terms">
            <p>only jpeg, png and jpg files</p>
          </a>
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
