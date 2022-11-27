import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // const draw = (ctx) => {
  //   ctx.fillStyle = "#fff";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  // const characters =
  //   "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()_+=-?><{}[]/|";

  // let currentText = "";
  // const fontSize = 25;

  // const draw = (x, y, fontSize, canvasHeight, context) => {
  //   currentText = characters.charAt(
  //     Math.floor(Math.random() * characters.length)
  //   );
  //   context.fillStyle = "#0aff0a";
  //   context.fillText(currentText, x * fontSize, y * fontSize);
  //   y * fontSize > canvasHeight ? (y = 0) : (y += 1);
  // };

  // const symbolsArr = characters.split("");
  // const effect = (canvasWidth, canvasHeight) => {
  //   const columns = canvasWidth / fontSize;
  //   console.log("symbolsArr :>> ", symbolsArr);
  // };

  // const animate = (ctx, canvasHeight) => {
  //   symbolsArr.forEach((symbol, index) =>
  //     draw(index, 0, canvasHeight, fontSize, ctx)
  //   );
  //   requestAnimationFrame(animate);
  // };

  const characters =
    "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789";

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      // this.characters =
      //   "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      // currently active symbol
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    // randomize character and draw at a specific position
    draw(context) {
      this.text = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  const fontSize = 25;
  const symbolsArr = characters.split();
  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.columns = this.canvasWidth / fontSize;
      this.symbols = [];
      this.#initialize();
    }

    // use to fill the symbols array with symbols i want to rain down
    //start with a # to make it private
    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(
          i,
          this.canvasHeight * Math.random(),
          fontSize,
          this.canvasHeight
        );
      }
    }
  }

  const effect = new Effect(width, height);
  const fps = 15;
  const nextFrame = 1000 / fps;
  console.log("nextFrame :>> ", nextFrame);

  console.log("width :>> ", width);
  // make the canvas appear on initial load
  useEffect(() => {
    let timer = 0;
    let lastTime = 0;
    handleWindowSizeChange();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.font = fontSize;
    canvas.width = width;
    canvas.height = height;

    // let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // let gradient = ctx.createRadialGradient(
    //   canvas.width / 2,
    //   canvas.height / 2,
    //   100,
    //   canvas.width / 2,
    //   canvas.height / 2,
    //   800
    // );
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.2, "yellow");
    // gradient.addColorStop(0.4, "green");
    // gradient.addColorStop(0.6, "cyan");
    // gradient.addColorStop(0.8, "blue");
    // gradient.addColorStop(1, "magenta");
    const animate = (timeStamp) => {
      const deltaTime = timeStamp - lastTime;

      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(5, 5, 5, 0.09)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.fillStyle = "#04b704df";
        // ctx.fillStyle = "#0aff0a";
        ctx.font = fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }
      requestAnimationFrame(animate);
    };
    animate(0);

    window.addEventListener("resize", handleWindowSizeChange);
  });

  return <canvas id="canvas1" className="canvas" ref={canvasRef} />;
};
export default Canvas;
