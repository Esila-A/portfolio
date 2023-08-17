import tlumaczenia from "../images/tlumaczenia.png";
import serlo from "../images/serlo.png";
import oddam from "../images/oddam.png";
import elsi from "../images/elsi.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import sass from "../images/sass.png";
import react from "../images/react.png";
import firebase from "../images/firebase.png";
import Face from "./face";

const Work = () => {
  return (
    <div className="work">
      <div className="work_main">
        <div className="work_main--text">
          <h1 className="heading">HI, I'M ESILA</h1>
          <p className="paragraph">
            A front-end developer based in Poland
            <br />
            and an amateur digital artist
          </p>
          <div className="for-mobile">
            <Face />
          </div>
          <a href="#work" id="work" className="anchor">
            SELECTED WORKS
          </a>
        </div>
        <div className="for-desktop">
          <Face />
        </div>
      </div>

      <div className="work_websites">
        <div className="work_websites--screenshot">
          <img src={tlumaczenia} alt="website's screenshot" className="image" />
        </div>
        <div className="work_websites--info">
          <a
            href="https://tlumaczenia-a-wagner.pl/"
            target="_blank"
            rel="noreferrer"
          >
            TŁUMACZENIA A.WAGNER
          </a>
          <p className="mini-description">Professional translator</p>
          <h4>About</h4>
          <p className="about-website">
            This is my first website for a real client. I was asked to both
            write and design it. I went for a minimalistic, toned-down style. As
            for the code, it was pretty straightforward. The most challenging
            part was adding reCaptcha to the website, since it was my first time
            using it.
          </p>
          <div className="technologies-and-links">
            <div className="technologies">
              <img src={html} className="technologies_icon" />
              <img src={css} className="technologies_icon" />
              <img src={sass} className="technologies_icon" />
              <img src={js} className="technologies_icon" />
              <img src={react} className="technologies_icon" />
            </div>
            <div>
              <a
                href="https://github.com/Esila-A/Aleksandra_Wagner--Website"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://tlumaczenia-a-wagner.pl/"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work_websites reverse">
        <div className="work_websites--info">
          <a href="https://esila-a.github.io/serlo-website/" target="_blank" rel="noreferrer">
            SERLO
          </a>
          <p className="mini-description">Renovation and finishing</p>
          <h4>About</h4>
          <p className="about-website">
            This website is for my second real client. I was tasked
            with designing and coding it and the copywriting. The main thing I learned with this project was
            conducting the necessary reaserch and the communication with
            challenging clients. The firm has since closed so I moved the website to gh-pages.
          </p>
          <div className="technologies-and-links">
            <div className="technologies">
              <img src={html} className="technologies_icon" />
              <img src={css} className="technologies_icon" />
              <img src={sass} className="technologies_icon" />
              <img src={js} className="technologies_icon" />
              <img src={react} className="technologies_icon" />
            </div>
            <div>
              <a
                href="https://github.com/Esila-A/serlo-website"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://esila-a.github.io/serlo-website/"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="work_websites--screenshot">
          <img src={serlo} alt="website's screenshot" className="image" />
        </div>
      </div>
      <div className="work_websites">
        <div className="work_websites--screenshot">
          <img src={oddam} alt="website's screenshot" className="image" />
        </div>
        <div className="work_websites--info">
          <a
            href="https://esila-a.github.io/oddam-rzeczy-project/"
            target="_blank"
            rel="noreferrer"
          >
            ODDAM RZECZY
          </a>
          <p className="mini-description">Helping those in need</p>
          <h4>About</h4>
          <p className="about-website">
            This is a project done for my bootcamp's PortfolioLab. I was
            provided with a design for it. Two major difficulties I had to
            overcome were: pagination and registration implementation and
            changing the website's options depending on the user's status. The
            registration part was the hardest one.
          </p>
          <div className="technologies-and-links">
            <div className="technologies">
              <img src={html} className="technologies_icon" />
              <img src={css} className="technologies_icon" />
              <img src={sass} className="technologies_icon" />
              <img src={js} className="technologies_icon" />
              <img src={react} className="technologies_icon" />
              <img src={firebase} className="technologies_icon" />
            </div>
            <div>
              <a
                href="https://github.com/Esila-A/portfolio"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://esila-a.github.io/oddam-rzeczy-project/"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work_websites reverse">
        <div className="work_websites--info">
          <a
            href="https://esila-a.github.io/elsi-website/"
            target="_blank"
            rel="noreferrer"
          >
            ELSI ADAJEW PHOTO
          </a>
          <p className="mini-description">Amateur photographer</p>
          <h4>About</h4>
          <p className="about-website">
            This is the first website I ever made. It was done as the final
            project of my bootcamp. This was also my first time designing one,
            which I ended up finding very entertaining. The hardest parts of
            writing this website were working with React Router and connecting
            it to Firebase Storage.
          </p>
          <div className="technologies-and-links">
            <div className="technologies">
              <img src={html} className="technologies_icon" />
              <img src={css} className="technologies_icon" />
              <img src={sass} className="technologies_icon" />
              <img src={js} className="technologies_icon" />
              <img src={react} className="technologies_icon" />
              <img src={firebase} className="technologies_icon" />
            </div>
            <div>
              <a
                href="https://github.com/Esila-A/elsi-website"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://esila-a.github.io/elsi-website/"
                className="links"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="work_websites--screenshot">
          <img src={elsi} alt="website's screenshot" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Work;
