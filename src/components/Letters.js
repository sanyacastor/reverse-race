import E from "../images/letterE.svg";
import R from "../images/letterR.svg";
import S from "../images/letterS.svg";
import V from "../images/letterV.svg";

export default function Letters(p5) {
  let letters = [];
  let l = 0;

  p5.preload = () => {
    const imgR = p5.loadImage(R);
    const imgE = p5.loadImage(E);
    const imgV = p5.loadImage(V);
    const imgS = p5.loadImage(S);

    letters = [imgR, imgE, imgV, imgE, imgR, imgS, imgE];
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 80);
    p5.background(0);
  };

  p5.mousePressed = () => {
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
    p5.imageMode(p5.CENTER);

    const drawLetters = () => {
      p5.image(letters[l], p5.mouseX, p5.mouseY);
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
      setTimeout(drawSmallLetters, 600);
    } else {
      setTimeout(drawLetters, 600);
    }
  };
}
