import tlumaczenia from "../images/tlumaczenia.png";
import serlo from "../images/serlo.png";
import oddam from "../images/oddam.png";
import elsi from "../images/elsi.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import sass from "../images/sass.svg";
import react from "../images/react.svg";
import firebase from "../images/firebase.svg";
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
            and an amateur digital artis
          </p>
          <a href="#work" id="work" className="anchor">
            SELECTED WORK
          </a>
        </div>
        <Face />
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
            TŁUMACZENIA-A-WAGNER
          </a>
          <p>Professional translator</p>
          <h4>
            About <span>(detailed description on GitHub)</span>
          </h4>
          <p className="about-website">
            This is my first website for a real client. I was asked to both write
            and design it. I went for a minimalistic, toned-down style. As
            for the code, it was pretty straightforward. The most challenging
            part was adding reCaptcha to the website, since it was my first time using it.
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
                className="links" target="_blank"
            rel="noreferrer"
              >
                GitHub
              </a>
              <a href="https://tlumaczenia-a-wagner.pl/" className="links" target="_blank"
            rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work_websites">
        <div className="work_websites--info">
          <a href="https://serlo.pl/" target="_blank" rel="noreferrer">
            SERLO
          </a>
          <p>Renovation and finishing</p>
          <h4>
            About <span>(detailed description on GitHub)</span>
          </h4>
          <p className="about-website">
            This website is for my second real client. Although code-wise it's
            not very complicated, it took me quite a long time to finish. I wasn't provided with any design ideas, copywriting text etc. Deveoping these aspects of it, alongside the reaserch I had to do prior, took the longest. 
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
                href="https://github.com/Esila-A/serlo-website-2"
                className="links" target="_blank"
            rel="noreferrer"
              >
                GitHub
              </a>
              <a href="https://serlo.pl/" className="links" target="_blank"
            rel="noreferrer">
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
          <a href="" target="_blank" rel="noreferrer">
            ODDAJ RZECZY
          </a>
          <p>Helping those in need</p>
          <h4>
            About <span>(detailed description on GitHub)</span>
          </h4>
          <p className="about-website">This is a project done for my bootcamp's PortfolioLab. I was provided with a design for it. Three major difficulties I had to overcome were: pagination, log up / log in implementation and changing the website's options depending on the user's status. The latter was definitely the hardest one. </p>
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
                href="https://github.com/Esila-A/oddam-rzeczy-project"
                className="links" target="_blank"
            rel="noreferrer"
              >
                GitHub
              </a>
              <a href="" className="links" target="_blank"
            rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work_websites">
        <div className="work_websites--info">
          <a href="" target="_blank" rel="noreferrer">
            ELSI ADAJEW PHOTO
          </a>
          <p>Amateur photographer</p>
          <h4>
            About <span>(detailed description on GitHub)</span>
          </h4>
          <p className="about-website">This is my first ever website. It was done as the final project of my bootcamp. This was also my first time designing one, which I ended up finding very entertaining. The hardest parts of writing this website were working with React Router and connecting it to Firebase Storage.</p>
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
              <a href="" className="links" target="_blank"
            rel="noreferrer">
                GitHub
              </a>
              <a href="" className="links" target="_blank"
            rel="noreferrer">
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
