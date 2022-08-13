const Face = () => {
  
  // FOR EYES MOVEMENT //
  document.querySelector("body").addEventListener("mousemove", eyeball);
  function eyeball(event) {
    let eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.clientX - x, event.clientY - y);
      let rot = radian * (180 / Math.PI) * -1 + 230;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  }
  return (
    <div className="animation" id="animation">
      <div className="face">
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
      </div>
    </div>
  );
}

export default Face;
