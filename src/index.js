import * as PIXI from "pixi.js";
// import * as dat from "dat.gui";
//import gsap, { TimelineMax } from "gsap";
import gsap from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const width = 1200;
const height = 1300;

const app = new PIXI.Application({
  width,
  height,
  backgroundColor: 0xe6f8ff,
  antialias: true
});
document.body.appendChild(app.view);

const imgFolder = "./src/images/";

const images = [
  { id: "backClouds", file: "00-clouds.png", per: 0.2 },
  { id: "mountains", file: "01-mountain.png", per: 0.4 },
  { id: "frontClouds", file: "02-clouds.png", per: 0.6 },
  { id: "trees", file: "03-trees.png", per: 0.8 },
  { id: "water", file: "04-water.png", per: 1 }
];

const min_y = 400;
const max_y = 800;

images.forEach((img, index) => {
  img.sprite = new PIXI.Sprite.from(`${imgFolder}/${img.file}`);
  app.stage.addChild(img.sprite);

  //const per = index / images.length;
  // const y = max_y * per;
  // console.log(index, per, y);

  gsap.from(img.sprite, {
    trigger: "canvas",
    y: min_y + max_y * img.per,
    duration: 2,
    scrollTrigger: {
      scrub: 3,
      id: "scrub"
    }
  });
});

// /* ----------------------------------------------------------------- */
// /* dat.gui test */
// const gui = new dat.GUI();
// /* dat.gui test function - start */
// const testFunc = () => {
//   console.log("controllerTest");
// };
// /* dat.gui test function - end */

// /* dat.gui test controller - start */
// const controller = {
//   controllerTest: testFunc
// };
// /* dat.gui test controller - end */

// gui.add(controller, "controllerTest");
