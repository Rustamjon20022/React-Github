import React from "react";
import { Route, Routes } from "react-router-dom";
import "./About/About.css";
import Vol from "./Vol/Vol";
import VideoPlayer from "react-video-js-player";
import Car from "../assets/img4.jpg";
import { MuiCard } from "./Card/MuiCard";
const About = () => {
  const videoSrc = Car;
  const poster = "https://video.ibm.com/";
  return (
    <div className="A">
      <div className="B">
        <h1>About Us</h1>
        <p>
          Architecto nobis eos vel nam quidem vitae temporibus voluptates qui
          hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores
          incidunt enim voluptatem magnam cumque fuga.
        </p>
      </div>
      <div className="C">
        <h2>
          Neque officiis dolore maiores et exercitationem quae est seda lidera
          pat claero
        </h2>
      </div>
      <div className="Sapef">
        <Routes>
          <Route path="/" element={<Vol />} />
        </Routes>
      </div>
      <div className="co">
        <div className="card">
          <p className="cor"></p>
          <h1>Alias sunt quas Cupiditate oluptas hic minima</h1>
          <p className="po">
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit
          </p>

          <a href=" #">Call to Action</a>
        </div>
      </div>
      <div className="vid">
            <div className="te">
              <h1>Voluptatem dignissimos provident quasi corporis</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="check1">
              <input type="checkbox" id="even" chacked={false} />
              <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
              <input type="checkbox" id="even" chacked={false} />
            
              <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
            
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>

              <input type="checkbox" id="even" chacked={false} />
              <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
              
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
              <a href=" #">Read More</a>
            
            </div>
        <div className="vide">
          <div className="video">
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="600"
              height="600"
            />

          </div>
        </div>
      </div>
      <div className="Mui">
        <MuiCard />

      </div>
    </div>
  );
};

export default About;
