import letterE from "../images/e-01.svg";
import letterR from "../images/letterR.svg";
import letterS from "../images/s-01.svg";
import letterV from "../images/v-01.svg";

export default function Letters(p5){
    let letters = [];
    let l = 0;
  
    p5.preload = () => {
      const imgR = p5.loadImage(letterR);
      const imgE = p5.loadImage(letterE);
      const imgV = p5.loadImage(letterV);
      const imgS = p5.loadImage(letterS);
  
      letters = [imgR, imgE, imgV, imgE, imgR, imgS, imgE];
    };
  
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight-100);
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
      p5.resizeCanvas(p5.windowWidth, 691);
    };
  
   p5.draw = () => {
      p5.imageMode(p5.CENTER);
      p5.image(letters[l], p5.mouseX, p5.mouseY);
    };
}