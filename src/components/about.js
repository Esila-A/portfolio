import photo from "../images/Kima.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import sass from "../images/sass.svg";
import react from "../images/react.svg";
import firebase from "../images/firebase.svg";
import scrum from "../images/scrum.svg";
import git from "../images/git.svg";
import { useEffect } from "react";

const About = () => {

  // PHOTO ANIMATION //
  function animatePhoto(pPhoto) {
    document.addEventListener("scroll", function () {
      let scrollPosition = window.pageYOffset;
      if (scrollPosition <= 400) {
        pPhoto.style.opacity = 1 - scrollPosition / 400;
      } else {
        pPhoto.style.opacity = 0;
      }
    });
  }

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.intersectionRatio === 1) animateIcons();
      });
    },
    { root: null, rootMargin: "0px", threshold: 1 }
  );

  useEffect(() => {
    const iconContainer = document.querySelector("#icons");
    scrollObserver.observe(iconContainer);
    let pPhoto = document.getElementById("photo");
    animatePhoto(pPhoto);
  }, []);

  function animateIcons() {
    const iconsOne = document.querySelectorAll(".iteration-one");
    const iconsTwo = document.querySelectorAll(".iteration-two");
    const iconsThree = document.querySelectorAll(".iteration-three");
    const iconsFour = document.querySelectorAll(".iteration-four");

    const allIcons = [iconsOne, iconsTwo, iconsThree, iconsFour];

    console.log(allIcons);

    allIcons.forEach((iconSet, i) => {
      setTimeout(() => {
        iconSet.forEach((icon) => icon.classList.remove("unanimated-icon"));
      }, 150 * i);
    });
  }

  return (
    <div className="about">
      <div className="about_main">
        <div className="about_main--text">
          <h1 className="heading">WHO AM I?</h1>
          <p className="paragraph">
            My name is Esila Adajewa. I'm a front-end developer
            <br />
            living in Poland. I enjoy creating clean, minimalistic
            <br />
            websites that are both user and search engine friendly.
          </p>
          <a href="#about" id="about" className="anchor">
            SKILLS & TOOLS
          </a>
        </div>
        <img
          src={photo}
          className="about_main--photo"
          id="photo"
          alt="profile photo"
        />
      </div>
      <div className="about_skills">
        <p className="about_skills--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis
          optio ducimus voluptas atque impedit, culpa esse velit deserunt rem
          asperiores voluptates quam aliquid omnis ad cupiditate totam
          distinctio tenetur?
        </p>
        <div className="about_skills--icons icons" id="icons">
          <div className="about_skills--icon unanimated-icon iteration-one">
            <img src={html} className="img" />
            <p className="p">HTML</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-two">
            <img src={css} className="img" />
            <p className="p">CSS</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-three">
            <img src={js} className="img" />
            <p className="p">JAVASCRIPT</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-two">
            <img src={react} className="img" />
            <p className="p">REACT</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-three">
            <img src={firebase} className="img" />
            <p className="p">FIREBASE</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-four">
            <img src={sass} className="img" />
            <p className="p">SASS</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-three">
            <img src={git} className="img" />
            <p className="p">GIT</p>
          </div>
          <div className="about_skills--icon unanimated-icon iteration-three">
            <img src={scrum} className="img" />
            <p className="p">SCRUM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
