import photo from "../images/Kima.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import sass from "../images/sass.png";
import react from "../images/react.png";
import firebase from "../images/firebase.png";
import scrum from "../images/scrum.png";
import git from "../images/git.png";
import rwd from "../images/rwd.png";
import { useEffect } from "react";

const About = () => {

  // PHOTO ANIMATION SETTINGS//
  function animatePhoto(pPhoto) {
    document.addEventListener("scroll", function () {
      pPhoto.style.width = 42 - window.pageYOffset / 20 + "vw";
    });
  }

  // ICONS ANIMATION SETTINGS//
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.intersectionRatio === 1) animateIcons();
      });
    },
    { root: null, rootMargin: "400px", threshold: 1 }
  );

  function animateIcons() {
    const iconOne = document.querySelectorAll(".iteration-one");
    const iconTwo = document.querySelectorAll(".iteration-two");
    const iconThree = document.querySelectorAll(".iteration-three");
    const iconFour = document.querySelectorAll(".iteration-four");
    const iconFive = document.querySelectorAll(".iteration-five");

    const allIcons = [iconOne, iconTwo, iconThree, iconFour, iconFive];

    allIcons.forEach((iconSet, i) => {
      setTimeout(() => {
        iconSet.forEach((icon) => icon.classList.remove("unanimated-icon"));
      }, 150 * i);
    });
  }

  // CALLING BOTH ANIMATIONS //
  useEffect(() => {
    const iconContainer = document.querySelector("#icons");
    scrollObserver.observe(iconContainer);
    let pPhoto = document.getElementById("photo");
    animatePhoto(pPhoto);
  }, []);


  return (
    <div className="about">
      <div className="about_main">
        <div className="about_main--text">
          <h1 className="heading">WHO AM I?</h1>
          <p className="paragraph">
            My name is Esila Adajewa. I'm a starting front-end developer. I
            enjoy creating clean, minimalistic and user friendly websites. Both
            designig and writing them is exciting. In my free time I enjoy
            drawing, reading books and hanging out with my family and friends.
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
          Even though I am only a few months into my programming adventure, I am
          quickly learning and advancing my skills and set of tools, which you
          can see listed <span className="for-computer">beside</span>
          <span className="for-mobile">above</span>. All of them, except for
          Firebase and Scrum, are used by me on a daily basis.
          <br />
          <br />
          Firebase I've only used twice, for my two bootcamp projects. As for
          Scrum, we had a week dedicated to this methodology where we had to
          work on a group project using it.
          <br />
          <br />
          I am also expanding my knowledge and skills of designing
          websites - from things like colors and fonts, all the way to overall
          composition and user experience.
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
          <div className="about_skills--icon unanimated-icon iteration-five">
            <img src={rwd} className="img" />
            <p className="p">RWD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
