import tlumaczenia from "../images/tlumaczenia.png";
import serlo from "../images/serlo.png";
import oddam from "../images/oddam.png";
import elsi from "../images/elsi.png";

document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball(event) {
  let eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 240;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}

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
        <div className="work_main--animation">
          <div class="face">
            <div class="eyes">
              <div class="eye"></div>
              <div class="eye"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="work_websites">
        <div className="work_websites--screenshot">
          <img src={tlumaczenia} alt="website's screenshot" className="image" />
        </div>
        <div className="work_websites--info">
          <h3>TŁUMACZENIA-A-WAGNER</h3>
          <p>Professional translator</p>
          <h4>Technologies used</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS/Sass</li>
          </ul>
        </div>
      </div>
      <div className="work_websites">
        <div className="work_websites--info">
          <h3>SERLO</h3>
          <p>Renovation and finishing</p>
          <h4>Technologies used</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS/Sass</li>
          </ul>
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
          <h3>ODDAJ RZECZY</h3>
          <p>Helping those in need</p>
          <h4>Technologies used</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS/Sass</li>
            <li>Firebase Database</li>
          </ul>
        </div>
      </div>
      <div className="work_websites">
        <div className="work_websites--info">
          <h3>ELSI ADAJEW PHOTO</h3>
          <p>Amateur photographer</p>
          <h4>Technologies used</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS/Sass</li>
            <li>Firebase Storage</li>
          </ul>
        </div>
        <div className="work_websites--screenshot">
          <img src={elsi} alt="website's screenshot" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Work;
