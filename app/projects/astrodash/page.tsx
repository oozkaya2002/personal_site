import Image from "next/image";
import astrodashPic from "C:/Users/oozka/OneDrive/Desktop/School + Personal/Code/personal_site/assets/Astro Dash.jpg";
import "../../globals.css";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
        </style>
      </Head>
      <div className="wrapper">
        <div className="content" role="main">
          <div className="topnav">
            <a href="index.html" className="topnav-text">
              Home
            </a>
            <a href="projects.html" className="topnav-text">
              Projects
            </a>
            <a href="bio.html" className="topnav-text">
              Bio
            </a>
            <a
              target="blank"
              href="Resume Omer Fall 2022.pdf"
              className="topnav-text"
            >
              Resume
            </a>
          </div>
          <h1>Astro Dash</h1>
          <div className="astro-dash-container">
            {/* <!-- div for our image --> */}

            <div className="astro-dash-img">
              <Image
                className="slideshow-imgs"
                src={astrodashPic}
                alt="Astro Dash - Listen or read the description of the project"
              />
            </div>

            {/* <!-- div for our text --> */}

            <div className="astro-dash-info">
              <h3>Description of the project</h3>
              <p>
                Astro dash is a 2D game where the player controls a spaceship
                via tapping to change the direction of the ship. The goal of the
                game is to avoid asteroids and survive as long as possible. The
                game was made in Unity using C#. Watch the demo video of the
                game
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/19_sCGUPRig0m2ZuNAGTPspwWGtpRr3Wa/view"
                  id="click-button"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
