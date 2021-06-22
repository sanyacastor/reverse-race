import E from "../images/letterE.svg";
import R from "../images/letterR.svg";
import S from "../images/letterS.svg";
import V from "../images/letterV.svg";

export default function Letters(p5) {
  let letters = [];
  let l = 0;

  let a = 20; //Set up the horizontal amplitute
  let b = 50; //Set up the vertical amplitute
  let angle = 0;
  let cfx = 0.4;

  p5.preload = () => {
    const imgR = p5.loadImage(R);
    const imgE = p5.loadImage(E);
    const imgV = p5.loadImage(V);
    const imgS = p5.loadImage(S);

    letters = [imgR, imgE, imgV, imgE, imgR, imgS, imgE];
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 80);
    p5.angleMode(p5.DEGREES);
    p5.background(0);
  };

  p5.mousePressed = () => {
    cfx = p5.random(0.3, 0.9);
    if (l < 6) {
      l += 1;
    } else {
      l = 0;
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight - 80);
  };

  p5.draw = () => {
    let x = 0.9 * (p5.windowWidth / 2) * p5.sin(angle) * cfx;
    let y = cfx * (p5.windowHeight / 2) * p5.cos(angle) * cfx;
    angle += 2;

    p5.imageMode(p5.CENTER);

    const drawLetters = () => {
      p5.image(letters[l], x + p5.windowWidth / 2, y + p5.windowHeight / 2);
    };

    const drawSmallLetters = () => {
      p5.image(
        letters[l],
        p5.mouseX,
        p5.mouseY,
        letters[l].width / 2,
        letters[l].height / 2
      );
    };

    if (p5.windowWidth <= 1024) {
      setTimeout(drawSmallLetters, 500);
    } else {
      setTimeout(drawLetters, 500);
    }
  };
}
