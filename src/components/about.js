import photo from "../images/Kima.png"

const About = () => {
  return (
    <div className="about">
      <div className="about_main">
        <div className="about_main--text">
          <h1 className="heading">WHO AM I?</h1>
          <p className="paragraph">
            My name is Esila Adajewa. I'm a front-end developer<br/>living in
            Poland. I enjoy creating clean, minimalistic<br/>websites that are both
            user and search engine friendly.
          </p>
          <a href="#about" id="about" className="anchor">
            SKILLS & TOOLS
          </a>
        </div>
        <img src={photo} className="about_main--photo" alt="profile photo"/>
      </div>

      <div className="skills"></div>
    </div>
  );
};

export default About;
